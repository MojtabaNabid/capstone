import checkIcon from "../assets/images/check_icon.png"

function ConfirmedBooking(props) {
    const customerEmail = "";
    const username = "";
    const date = props.state.date;
    const time = props.state.time;
    const Ceremony = props.state.typeOfCeremony;
    console.log(Ceremony)
    const whereToSeat = props.state.typeOfCeremony;
    const explanation = props.state.customerdescription;
    return (
        <main className="reserv_conf">
            <div>
                <img src={checkIcon} alt="Check Icon" /><h1>Confirmation</h1>
            </div>
            <p>Thank you for your reservation.</p>
            <p>A confirmation email has been sent to {customerEmail}</p>
            <h2>Reservation Details</h2>
            <p><b>Name:</b> {username}</p>
            <p><b>Date and Time:</b> {date} - {time}</p>
            <p><b>Type of Ceremony:</b> {Ceremony}</p>
            <p><b>Where to seat:</b> {whereToSeat}</p>
            <p><b>Explanation:</b><br /> {explanation}</p>
        </main>
    )
}

export default ConfirmedBooking