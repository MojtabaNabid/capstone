function Signup() {
    return (
        <main>
            <section>
                <h1>Sign Up Form</h1>
                <form action="#" className="signUpForm">
                    <label for="name">NAME AND FAMILY</label><br />
                    <input id="name" type="text" name="name"></input><br />

                    <label for="number">PHONE NUMBER</label><br />
                    <input id="number" type="number" name="phoneNumber"></input><br />

                    <label for="email">EMAIL</label><br />
                    <input id="email" type="email" name="email"></input><br />

                    <label for="password">PASSWORD</label><br />
                    <input id="password" type="password" name="password"></input><br />
                    
                    <label for="passwordConf">PASSWORD CONFIRMATION</label><br />
                    <input id="passwordConf" type="password" name="passwordConf"></input><br />

                    <label for="address">ADDRESS</label><br />
                    <textarea id="address" col="50" row="3" name="address">Type here...</textarea>

                </form>
                <p></p>
                <p></p>
                <p></p>
            </section>
        </main>
    )
}

export default Signup