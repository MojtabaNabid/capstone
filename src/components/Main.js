import ConfirmedBooking from "./ConfirmedBooking.js"
import Home from "./Home.js"
import Reservations from "./Reservation.js"
import Signup from "./Signup.js"
import Menu from "./Menu.js"
import Aboutme from "./Aboutme.js"
import { Routes, Route } from 'react-router-dom'
import { useReducer } from "react"
import {fetchAPI,submitAPI} from "../mockAPI.js"

// Tomorrow tasks :
// update sign up form and store user data in a useStat hook
// update confirmation component and show the final details after submitting the reservation form by user


export function updateTimes(state, action) {
  switch (action.type) {
    case 'day':
      const newDay = fetchAPI(action.daySelected)
      return { ...state, date: action.daySelected, hour: newDay}

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
                numberOfGeusts: 0,
                whereToSeat: "",
                typeOfCeremony: "",
                customerdescription: ""
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
           "Mon, 25/03/24", 
           "Tue, 26/03/24", 
           "Wed, 27/03/24", 
           "Thr, 28/03/24", 
           "Fri, 29/03/24",
           "Sat, 30/03/24", 
           "Son, 31/03/24", 
           "Mon, 01/04/24", 
           "Teu, 02/04/24", 
           "Wed, 03/04/24"
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

function Main() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes())


  // function submitForm() {

  // }

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations state={state} dispatch={dispatch} />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/confirmation" element={<ConfirmedBooking state={state} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  )
}

export default Main