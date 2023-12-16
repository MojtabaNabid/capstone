import homebanner from "../assets/images/home-banner.jpg"
import greeksalad from "../assets/images/greek salad.jpg"
import motorcycle from "../assets/images/motorcycle-svgrepo-com.svg"
import bruchetta from "../assets/images/bruchetta.jpg"
import lemondessert from "../assets/images/lemon dessert.jpg"

function Home() {
    return (
        <main className="main-home">
            <section className="home-banner">
                <section className="homebanner-text">
                    <h1>Little Lemon</h1>
                    <p>Little Lemon</p>
                    <p className="homebanner-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <button className="yello-btn">Reserve a Table</button>
                </section>
                <section>
                    <img src={homebanner} className="homebanner-img" />
                </section>
            </section>
            <section className="weekspecial">
                <header className="weekspecial-title">
                    <h2>This week's special!</h2>
                    <button className="yello-btn">Online Menu</button>
                </header>
                <article className="cards">
                    <section className="card1">
                        <img src={greeksalad} />
                        <section className="card-desc">
                            <section className="card-title-price">
                                <h4>Greek Salad</h4>
                                <p>$12.99</p>
                            </section>
                            <p className="card-recipe">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <section className="card-calltoaction">
                                <a>Order a Delivery</a>
                                <a><img src={motorcycle} style={{ width: "20px" }} /></a>
                            </section>
                        </section>
                    </section>
                    <section className="card1">
                        <img src={bruchetta} />
                        <section className="card-desc">
                            <section className="card-title-price">
                                <h4>Bruchetta</h4>
                                <p>$5.99</p>
                            </section>
                            <p className="card-recipe">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            <section className="card-calltoaction">
                                <a>Order a Delivery</a>
                                <a><img src={motorcycle} style={{ width: "20px" }} /></a>
                            </section>
                        </section>
                    </section>
                    <section className="card1">
                        <img src={lemondessert} />
                        <section className="card-desc">
                            <section className="card-title-price">
                                <h4>Lemon Dessert</h4>
                                <p>$5.00</p>
                            </section>
                            <p className="card-recipe">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                            <section className="card-calltoaction">
                                <a>Order a Delivery</a>
                                <a><img src={motorcycle} style={{ width: "20px" }} /></a>
                            </section>
                        </section>
                    </section>
                </article>
            </section>
            <section>
                <h2>Testimonials</h2>
            </section>
            <section>
                <h2>Little Lemon</h2>
            </section>
        </main>
    )
}

export default Home