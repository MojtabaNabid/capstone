import Confirmation from "./Confirmation.js"
import Home from "./Home.js"
import Reservations from "./Reservation.js"
import Signup from "./Signup.js"
import Menu from "./Menu.js"
import Aboutme from "./Aboutme.js"
import { Routes, Route } from 'react-router-dom'
import { useReducer } from "react"

export function updateTimes(state, action) {
  switch (action.type) {
    case 'time':
      return { ...state, timeSelected: action.daySelected }
    case 'reservationSlot':
      return {
        ...state,
        time: state.time.filter(time => time !== state.timeSelected),
      }
    default:
      return state
  }
}

export function initializeTimes() {
  return ({
    time: ["Day and Hour", "Mon, 25/03/24-12:00", "Mon, 25/03/24-13:00", "Mon, 25/03/24-15:00", "Tue, 26/03/24-12:00", "Tue, 26/03/24-13:00", "Tue, 26/03/24-15:00", "Tue, 26/03/24-16:00", "Tue, 26/03/24-17:00", "Tue, 26/03/24-18:00", "Tue, 26/03/24-19:00", "Tue, 26/03/24-20:00", "Tue, 26/03/24-21:00", "Wed, 27/03/24-16:00", "Wed, 27/03/24-19:00", "Wed, 27/03/24-20:00", "Thr, 28/03/24-13:00", "Thr, 28/03/24-14:00", "Thr, 28/03/24-21:00", "Fri, 29/03/24-12:00", "Fri, 29/03/24-17:00", "Fri, 29/03/24-18:00", "Fri, 29/03/24-20:00"],
    timeSelected: "",
  })
}

function Main() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes())
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations state={state} dispatch={dispatch} />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  )
}

export default Main