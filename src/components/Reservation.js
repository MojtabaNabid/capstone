import reserve_table_banner from "../assets/images/reservetable.jpg"
function Reservations() {
    return (
        <main className="main-reservation">
            <article className="reservation-banner">
                <section>
                    <h1>Reserve a Table</h1>
                    <p>at little lemon Chicago</p>
                    <p>Make sure you create an account and enter all your information accurately before completing your reservation</p>
                    <button>Create an account</button>
                </section>
                <img src={reserve_table_banner} alt="a dish with one fish"/>
                <section>
                    <img src="" />
                </section>
            </article>
            <article>
                <h2>Reservation Detail</h2>
                <section>
                    <form></form>
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