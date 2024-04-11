import {Link} from 'react-router-dom'
import reserve_table_banner from "../assets/images/reserva_a_table.jpg"
import BookingForm from './BookingForm';


function Reservations(props) {
    // if(props.state.time)
    //     console.log("true")

    return (
        <main className="main-reservation">
            <article className="reservation-banner">
                <section className="reservation-banner-desc">
                    <h1>Reserve a Table</h1>
                    <p>at little lemon Chicago</p>
                    <p>Make sure you create an account and enter all your information accurately before completing your reservation</p>
                    <button className="yello-btn" aria-label='create an account'><Link to="/login">Create an account</Link></button>
                </section>
                <img src={reserve_table_banner} alt="a dish with one fish" />
                
            </article>
            <BookingForm state={props.state} dispatch={props.dispatch} submitForm={props.submitForm} formData={props.formData} />
        </main >
    )
}

export default Reservations