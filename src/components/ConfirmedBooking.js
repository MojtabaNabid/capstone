import checkIcon from "../assets/images/check_icon.png"
import { useState } from "react"

function ConfirmedBooking(props) {
    const [reservationDetail, setReservationDetail] = useState({
        name: props.formData.nameAndFamily,
        email: props.formData.email,
        address: props.formData.address,
        date: props.state.date,
        time: props.state.time,
        numberOfGeusts: props.state.numberOfGeusts,
        whereToSeat: props.state.whereToSeat,
        typeOfCeremony: props.state.typeOfCeremony,
        customerdescription: props.state.customerdescription,
    })




    
    // const customerEmail = "";
    // const username = "";
    console.log(props.state)
    return (
        <main className="reserv_conf">
            <div>
                <img src={checkIcon} alt="Check Icon" /><h1>Confirmation</h1>
            </div>
            <p>Thank you for your reservation.</p>
            {/* <p>A confirmation email has been sent to {customerEmail}</p> */}
            <h2>Reservation Details</h2>
            <p><b>Name:</b> {reservationDetail.name}</p>
            <p><b>Email:</b> {reservationDetail.email}</p>
            <p><b>Address:</b> {reservationDetail.address}</p>
            <p><b>Date and Time:</b> {reservationDetail.date} - {reservationDetail.time}</p>
            <p><b>Number of Guests:</b> {reservationDetail.numberOfGeusts}</p>
            <p><b>Type of Ceremony:</b> {reservationDetail.typeOfCeremony}</p>
            <p><b>Where to seat:</b> {reservationDetail.whereToSeat}</p>
            <p><b>Explanation:</b><br /> {reservationDetail.customerdescription}</p>
        </main>
    )
}

export default ConfirmedBooking