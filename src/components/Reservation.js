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
                        <label>Number of Guests </label>
                        <select name="" id="">
                            <option>Select a number</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>more than 5 people</option>
                        </select>
                        <div>
                            <label id="">Time available</label>
                            <select name="" id="">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                            </select>
                            <select name="" id="">
                                <option>Hour</option>
                                <option>12:00</option>
                                <option>12:30</option>
                                <option>13:00</option>
                                <option>13:30</option>
                                <option>14:00</option>
                                <option>14:30</option>
                                <option>15:00</option>
                                <option>15:30</option>
                                <option>16:00</option>
                                <option>16:30</option>
                                <option>17:00</option>
                                <option>17:30</option>
                                <option>18:00</option>
                                <option>18:30</option>
                                <option>19:00</option>
                                <option>19:30</option>
                                <option>20:00</option>
                                <option>20:30</option>
                                <option>21:00</option>
                                <option>21:30</option>
                            </select>
                        </div>
                        
                    </form>
                </section>
            </article>
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
        </main >
    )
}

export default Reservations