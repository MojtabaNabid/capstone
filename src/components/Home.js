import homebanner from "../assets/images/home-banner.jpg"
import greeksalad from "../assets/images/greek salad.jpg"
import motorcycle from "../assets/images/motorcycle-svgrepo-com.svg"
import bruchetta from "../assets/images/bruchetta.jpg"
import lemondessert from "../assets/images/lemon dessert.jpg"
import certificate from "../assets/images/certificate-testimonials.svg"
import star5 from "../assets/images/5-star.png"
import star4 from "../assets/images/4-star.png"
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import person3 from "../assets/images/person3.png"
import person4 from "../assets/images/person4.png"
import restaurant from "../assets/images/restaurant.jpg"
import restaurant_chef from "../assets/images/restaurantchef.jpg"




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
                                <a><img src={motorcycle} style={{ width: "20px" }} alt="motorcycle icon"/></a>
                            </section>
                        </section>
                    </section>
                </article>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <section className="testimonials-items">
                    <section className="item">
                        <img src={star5} alt="rated 5 stars"/>
                        <div className="commentor">
                            <img src={person1} alt="commentor number 1"/>
                            <p>Julian</p>
                        </div>
                        <p>My wife and I, vacationing in SD from Chicago, had lunch Fri 17th at TFG and we were both absolutely pleased with everything at your place.</p>
                    </section>
                    <section className="item">
                    <img src={star4} alt="rated 4 stars"/>
                        <div className="commentor">
                            <img src={person2} alt="commentor number 2"/>
                            <p>Martin</p>
                        </div>
                        <p>We were at The Little Lemon a few weeks ago with some clients from Texas . I am finally getting back to tell you that we had a wonderful evening! The food, the service, the host, EVERYTHING was perfect!</p>
                    </section>
                    <section className="item">
                    <img src={star5} alt="rated 5 stars"/>
                        <div className="commentor">
                            <img src={person3} alt="commentor number 3"/>
                            <p>Jodi</p>
                        </div>
                        <p>Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment.</p></section>
                    <section className="item">
                    <img src={star4} alt="rated 4 stars"/>
                        <div className="commentor">
                            <img src={person4} alt="commentorNumber4"/>
                            <p>Kathy</p>
                        </div>
                        <p>WOW!!! What an outstanding dinner you prepared at the Little Lemon on Friday evening!!! It was an honor for me to be invited and experience firsthand your incredible culinary gift!</p></section>
                </section>
            </section>
            <section className="about">
                <section className="about-desc">
                    <h2>Little Lemon</h2>
                    <p>Chicago</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    <br/>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </section>
                <section>
                    <img src={restaurant} className="about-img" alt="restaurant view"/>
                    <img src={restaurant_chef} className="about-img" alt="picture of restaurant chef"/>
                </section>
            </section>
        </main>
    )
}

export default Home