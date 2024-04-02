import checkIcon from "../assets/images/check_icon.png"

function ConfirmedBooking(props) {
    const customerEmail = ""
    const username = ""
    const date = props.state.date
    const typeOfCeremony = props.state.typeOfCeremony
    const whereToSeat = props.state.typeOfCeremony
    const explanation = props.stat.customerdescription
    return (
        <main className="reserv_conf">
            <div>
                <img src={checkIcon} alt="Check Icon" /><h1>Confirmation</h1>
            </div>
            <p>Thank you for your reservation.</p>
            <p>A confirmation email has been sent to {customerEmail}</p>
            <h2>Reservation Details</h2>
            <p><b>Name:</b> Mojtaba Nabid{username}</p>
            <p><b>date:</b> 21.Jan.2024{date}</p>
            <p><b>Type of Ceremony:</b> Birthday Party{typeOfCeremony}</p>
            <p><b>Where to seat:</b> Inside{whereToSeat}</p>
            <p><b>Explanation:</b><br /> I want to suprise my friend so I need you to play a birthday song and bring a birthday cake, please call me.{explanation}</p>
        </main>
    )
}

export default ConfirmedBooking