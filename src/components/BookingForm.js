import { useState } from "react";


function BookingForm(props) {

    // data from all parts of form except the available times
    const [bookingForm, setbookingForm] = useState({
        numberOfGeusts: 0,
        time: "",
        // hour: "",
        whereToSeat: "",
        typeOfCeremony: "",
        customerdescription: ""
    })
    
    // dispatch function for available times
    const handleTime = (e) => {
        props.dispatch({
            type: "time",
            daySelected: e.target.value
        })
        setbookingForm({...bookingForm, time: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        console.log(bookingForm)
        setbookingForm({
            numberOfGeusts: 0,
            time: "",
            whereToSeat: "",
            typeOfCeremony: "",
            customerdescription: ""
        })
        
        props.dispatch({
            type: "reservationSlot"
        })
    }
            
    return (
        <div>
            <article className="reservation-details">
                <h2>Reservation Details</h2>
                <section>
                    <form onSubmit={handleSubmit}>
                        <section className="detail">
                            <div className="guest">
                                <label htmlFor="guestnumber">Number of Guests: </label>
                                <select name="guests" 
                                    id="guestnumber" 
                                    value={bookingForm.numberOfGeusts} 
                                    onChange={e => setbookingForm({...bookingForm, numberOfGeusts: e.target.value})}>
                                    <option value="select">Select a number</option>
                                    <option value="1">1 person</option>
                                    <option value="2">2 people</option>
                                    <option value="3">3 people</option>
                                    <option value="4">4 people</option>
                                    <option value="5">5 people</option>
                                    <option value="more than 5">more than 5 people</option>
                                </select>
                            </div>

                            <div className="time">
                                <label htmlFor="time_available">Time available</label>
                                <div>
                                    {/* <p>{props.state.timeSelected}</p> */}
                                    <select 
                                        name="time_available" 
                                        id="time_available" 
                                        value={bookingForm.time}
                                        onChange={handleTime}
                                        >

                                        {props.state.time.map((item, index) => {
                                            return <option key={index} value={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            {/* choosing where to seat */}
                            <div className="whereToSeat">
                                <label htmlFor="seat">Where to Seat: </label>
                                <select name="seat" 
                                    id="seat"
                                    value={bookingForm.whereToSeat}
                                    onChange={e => setbookingForm({...bookingForm, whereToSeat: e.target.value})}>
                                    <option value="select" >select</option>
                                    <option value="outside" >outside</option>
                                    <option value="inside">inside</option>
                                    <option value="balkony">balkony</option>
                                    <option value="near_window">near window</option>
                                </select>
                            </div>
                        </section>
                        <fieldset className="typeOfCeremony">
                            <legend>Types of Ceremony</legend>
                            <div>
                                <input 
                                    type="radio" 
                                    id="birthday" 
                                    name="ceremonytype" 
                                    value="Birthday Party"
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Birthday Party"}     
                                />
                                <label htmlFor="birthday">Birthday Party</label>
                            </div>

                            <div>
                                <input 
                                    type="radio" 
                                    id="Romanticdate" 
                                    name="ceremonytype" 
                                    value="Romantic Date"
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Romantic Date"}
                                />
                                <label htmlFor="Romanticdate">Romantic Date</label>
                            </div>

                            <div>
                                <input 
                                    type="radio" 
                                    id="Familyhangout" 
                                    name="ceremonytype" 
                                    value="Family Hang Out"
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Family Hang Out"}
                                />
                                <label htmlFor="Familyhangout">Family Hang Out</label>
                            </div>

                            <div>
                                <input 
                                    type="radio" 
                                    id="businessmeeting" 
                                    name="ceremonytype" 
                                    value="Business Meeting"
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Business Meeting"}
                                />
                                <label htmlFor="businessmeeting">Business Meeting</label>
                            </div>

                            <div>
                                <input 
                                    type="radio" 
                                    id="event" 
                                    name="ceremonytype" 
                                    value="Event"
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Event"}
                                />
                                <label htmlFor="event">Evnet</label>
                            </div>

                            <div>
                                <input 
                                    type="radio" 
                                    id="others" 
                                    name="ceremonytype" 
                                    value="Others"
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Others"}
                                />
                                <label htmlFor="others">Others</label>
                            </div>

                            <div>
                                <input 
                                    type="radio" 
                                    id="conference" 
                                    name="ceremonytype" 
                                    value="Conference" 
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Conference"}
                                />
                                <label htmlFor="conference">Conference</label>
                            </div>

                            <div>
                                <input 
                                    type="radio" 
                                    id="brunch" 
                                    name="ceremonytype" 
                                    value="Brunch" 
                                    onChange={e => setbookingForm({...bookingForm, typeOfCeremony: e.target.value})}
                                    checked={bookingForm.typeOfCeremony === "Brunch"}
                                />
                                <label htmlFor="brunch">Brunch</label>
                            </div>
                        </fieldset>

                        <div className="customerdescription">
                            <label htmlFor="anythingtoadd">Anything to Add</label>
                            <p className="textareadesc">Please add if you have any plan. Our team will contact you for further coordination</p>
                            <div className="reservationDesctiption">
                                <textarea
                                    id="anythingtoadd"
                                    name="customerdescription"
                                    rows="4"
                                    cols="50"
                                    value={bookingForm.customerdescription}
                                    onChange={e => setbookingForm({...bookingForm, customerdescription: e.target.value})}
                                >type here ...</textarea>
                            </div>
                        </div>

                        <div className="submit">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </section>
            </article>
        </div>
    )

}

export default BookingForm