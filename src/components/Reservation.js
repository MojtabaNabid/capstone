import reserve_table_banner from "../assets/images/reserva_a_table.jpg"
function Reservations() {
    return (
        <main className="main-reservation">
            <article className="reservation-banner">
                <section className="reservation-banner-desc">
                    <h1>Reserve a Table</h1>
                    <p>at little lemon Chicago</p>
                    <p>Make sure you create an account and enter all your information accurately before completing your reservation</p>
                    <button className="yello-btn">Create an account</button>
                </section>
                <img src={reserve_table_banner} alt="a dish with one fish" />
                <section>
                    <img src="" />
                </section>
            </article>
            <article className="reservation-details">
                <h2>Reservation Details</h2>
                <section>
                    <form>
                        <section className="detail">
                            <div className="guest">
                                <label for="guestnumber">Number of Guests: </label>
                                <select name="guests" id="guestnumber">
                                    <option value="select">Select a number</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="more">more than 5 people</option>
                                </select>
                            </div>

                            <div className="time">
                                <label for="time_available">Time available</label>
                                <div>
                                    <select name="time_available" id="day">
                                        <option value="day">Day</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                    </select>
                                    <select name="time_available" id="hour">
                                        <option value="hour">Hour</option>
                                        <option value="12">12:00</option>
                                        <option value="12.5">12:30</option>
                                        <option value="13">13:00</option>
                                        <option value="13.5">13:30</option>
                                        <option value="14">14:00</option>
                                        <option value="14.5">14:30</option>
                                        <option value="15">15:00</option>
                                        <option value="15.5">15:30</option>
                                        <option value="16">16:00</option>
                                        <option value="16.5">16:30</option>
                                        <option value="17">17:00</option>
                                        <option value="17.5">17:30</option>
                                        <option value="18">18:00</option>
                                        <option value="18.5">18:30</option>
                                        <option value="19">19:00</option>
                                        <option value="19.5">19:30</option>
                                        <option value="20">20:00</option>
                                        <option value="20.5">20:30</option>
                                        <option value="21">21:00</option>
                                        <option value="21.5">21:30</option>
                                    </select>
                                </div>
                            </div>

                            <div className="whereToSeat">
                                <label for="seat">Where to Seat: </label>
                                <select name="seat" id="seat">
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
                                <input type="radio" id="birthday" name="ceremonytype" value="Birthday Party" />
                                <label for="birthday">Birthday Party</label>
                            </div>

                            <div>
                                <input type="radio" id="Romanticdate" name="ceremonytype" value="Romantic Date" />
                                <label for="Romanticdate">Romantic Date</label>
                            </div>

                            <div>
                                <input type="radio" id="Familyhangout" name="ceremonytype" value="Family Hang Out" />
                                <label for="Familyhangout">Family Hang Out</label>
                            </div>

                            <div>
                                <input type="radio" id="businessmeeting" name="ceremonytype" value="Business Meeting" />
                                <label for="businessmeeting">Business Meeting</label>
                            </div>

                            <div>
                                <input type="radio" id="event" name="ceremonytype" value="Event" />
                                <label for="event">Evnet</label>
                            </div>

                            <div>
                                <input type="radio" id="others" name="ceremonytype" value="Others" />
                                <label for="others">Others</label>
                            </div>

                            <div>
                                <input type="radio" id="conference" name="ceremonytype" value="Conference" />
                                <label for="conference">Conference</label>
                            </div>

                            <div>
                                <input type="radio" id="brunch" name="ceremonytype" value="Brunch" />
                                <label for="brunch">Brunch</label>
                            </div>
                        </fieldset>

                        <div className="customerdescription">
                            <label for="anythingtoadd">Anything to Add</label>
                            <p className="textareadesc">Please add if you have any plan. Our team will contact you for further coordination</p>
                            <textarea id="anythingtoadd" name="customerdescription" rows="4" cols="50">type here ...</textarea>
                        </div>

                        <div className="submit">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </section>
            </article>
        </main >
    )
}

export default Reservations