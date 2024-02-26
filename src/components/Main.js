import Confirmation from "./Confirmation.js"
import Home from "./Home.js"
import Reservations from "./Reservation.js"
import Signup from "./Signup.js"
import {Routes, Route, Link} from 'react-router-dom'

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  )
}

export default Main