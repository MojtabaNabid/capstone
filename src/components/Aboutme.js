
import colleages from "../assets/images/little-lemon-employees.jpg"


function Aboutme() {

    return (
        <article>
            
            <section className="description-aboutus">
                <div className="employees" >
                    <img src={colleages}  alt="employees" />
                </div>
                <h2>About Us</h2>
                <p>Welcome to Little Lemon – where the zest of life meets the art of cooking. Nestled in the heart of the community, Little Lemon is more than just a restaurant; it's a haven for those who cherish the joy of dining and the magic of culinary innovation.
                <br />Our journey began with a simple yet passionate dream: to create a dining experience that feels like home yet dazzles with flavors from around the world. Little Lemon is the embodiment of that dream, serving dishes that comfort, inspire, and satisfy with every bite.
                <br />At Little Lemon, we believe in the power of fresh, locally-sourced ingredients to transform a meal into a memory. Our menu, inspired by both traditional and contemporary recipes, is a testament to the diversity and richness of global cuisine. Each dish is prepared with love, aiming to bring a slice of the world to your table.
                <br />Our cozy, welcoming space is designed to make you feel at ease, whether you're here for a quick lunch or a leisurely dinner. With friendly staff who treat you like family and a warm atmosphere that lights up the room, Little Lemon is not just a restaurant—it's a place where community, culture, and cuisine come together.
                <br />Beyond the plates, Little Lemon is committed to sustainability and giving back to the community that supports us. We take pride in our efforts to reduce waste, support local farmers, and contribute to local causes that make a difference.
                <br />Join us at Little Lemon, where every meal is an adventure, every bite is a story, and every visitor is a friend we haven't met yet. Here's to delicious dishes, unforgettable memories, and the start of a beautiful friendship. Welcome to our family.
                </p>
            </section>
        </article>
    )
}

export default Aboutme