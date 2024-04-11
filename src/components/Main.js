import ConfirmedBooking from "./ConfirmedBooking.js"
import Home from "./Home.js"
import Reservations from "./Reservation.js"
import Signup from "./Signup.js"
import Menu from "./Menu.js"
import Aboutme from "./Aboutme.js"
import { Routes, Route } from 'react-router-dom'
import { useReducer } from "react"
import {fetchAPI,submitAPI} from "../mockAPI.js"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

// Tomorrow tasks :
//update the unit tests

export function updateTimes(state, action) {
  switch (action.type) {
    case 'day':
      const newhour = fetchAPI(action.daySelected)
      return { ...state, date: action.daySelected, hour: newhour}
    case 'hour':
      return { ...state, time: action.hourSelected }
    case 'guestnumber':
      return{...state, numberOfGeusts: action.numberOfGeusts}
    case 'whereToSeat':
      return{...state, whereToSeat: action.whereToSeat}
    case 'typeOfCeremony':
      return{...state, typeOfCeremony: action.typeOfCeremony}
    case 'customerdescription':
      return {...state, customerdescription: action.customerdescription,}
    case 'reservationSlot':
      let submitStatus = submitAPI(state)
      // console.log(state)
      if(submitStatus){
        const newTimeAvailable = fetchAPI(state.date)
        return {...state,
                hour: newTimeAvailable,
                // numberOfGeusts: 0,
                // whereToSeat: "",
                // typeOfCeremony: "",
                // customerdescription: ""
              }
      }
        // state.day = availableTimesByDate
      break;
    default:
      return state
  }
}

export function initializeTimes() {
  
  const returnedDate = fetchAPI('day')
  // console.log(returnedDate)
  return ({
    day: ["Choose Day",
           "Mon, 08/04/24", 
           "Tue, 09/04/24", 
           "Wed, 10/04/24", 
           "Thr, 11/04/24", 
           "Fri, 12/04/24",
           "Sat, 13/04/24", 
           "Son, 14/04/24", 
           "Mon, 15/04/24", 
           "Teu, 16/04/24", 
           "Wed, 17/04/24"
          ],
    hour: returnedDate,
    date: "",
    time: "",
    numberOfGeusts: 0,
    whereToSeat: "",
    typeOfCeremony: "",
    customerdescription: "",
  })
}

function Main(props) {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes())
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    nameAndFamily: "",
    phone: "",
    email: "",
    pass: "",
    passConf: "",
    address: "",
    signedFlag: 0,
})

  const submitForm = (state) => {
    if (submitAPI(state) && formData.signedFlag === 1) {
      navigate("/ConfirmedBooking");
    }
  }
    
  let disable = false
  const handleDisable = (formData) => {
    if (formData.nameAndFamily.length > 0 && formData.email.length > 0 && formData.pass.length > 0){
      disable = true
      return true
    }
    else return false
  }

  handleDisable(formData)
  
  

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations state={state} dispatch={dispatch} submitForm={submitForm} formData={formData} />} />
        <Route path="/login" element={<Signup  formData={formData} setformData={setformData} disable={disable} setNameAndFamily={props.setNameAndFamily} />} />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking state={state} dispatch={dispatch} formData={formData} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  )
}


export default Main