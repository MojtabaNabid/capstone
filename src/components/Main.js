import Confirmation from "./Confirmation.js"
import Home from "./Home.js"
import Reservations from "./Reservation.js"
import Signup from "./Signup.js"

function Main() {
  return (
    <div className="main">
      <Home />
      <Reservations />
      <Signup />
      <Confirmation />
    </div>
  )
}

export default Main