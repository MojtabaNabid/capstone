// import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const navigate = useNavigate();
    // const [formData, setformData] = useState({
    //     nameAndFamily: "",
    //     phone: "",
    //     email: "",
    //     pass: "",
    //     passConf: "",
    //     address: ""
    // })

    const handleSumbit = (e) => {
        e.preventDefault();
        if(props.formData.pass === props.formData.passConf) {
            console.log("form submitted!");
            console.log(props.formData)
            props.setformData({...props.formData, signedFlag: 1});
            alert("You have registered, Welcome to the little lemon restaurant")
            props.setNameAndFamily(props.formData.nameAndFamily)
            navigate("/");
        }
        else 
          alert("Passwords are not the same!")
    }


    return (
        <main>
            <section className="signupform">
                <h1>Sign Up Form</h1>
                <p>* sign means required!</p>
                <form onSubmit={handleSumbit} className="signUpForm">
                    <label htmlFor="name">NAME AND FAMILY*</label><br />
                    <input id="name" 
                        type="text" 
                        name="name" 
                        placeholder="David Beckham"
                        value={props.formData.nameAndFamily} 
                        onChange={e => props.setformData({...props.formData, nameAndFamily: e.target.value})} minLength={3} required /><br/>

                    <label htmlFor="number">PHONE NUMBER</label><br />
                    <input id="number" 
                        type="tel" 
                        pattern="[0-9]{12}"
                        placeholder="015123456789"
                        name="phoneNumber"
                        value={props.formData.phone}
                        onChange={e => props.setformData({...props.formData, phone: e.target.value})} /><br />

                    <label htmlFor="email">EMAIL*</label><br />
                    <input id="email" 
                        type="email" 
                        name="email"
                        placeholder="example@example.com"
                        value={props.formData.email}
                        onChange={e => props.setformData({...props.formData, email: e.target.value})} required /><br />

                    <label htmlFor="password">PASSWORD*<br />
                    <small>***Minimum eight characters, at least one letter, one number and one special character***</small>
                    </label><br />
                    <input id="password" 
                        type="password" 
                        name="password"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                        value={props.formData.pass}
                        onChange={e => props.setformData({...props.formData, pass: e.target.value})} required /><br />
                    
                    <label htmlFor="passwordConf">PASSWORD CONFIRMATION*
                    <small> (Repeat Password)</small>
                    </label><br />
                    <input id="passwordConf" 
                        type="password" 
                        name="passwordConf"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                        value={props.formData.passConf}
                        onChange={e => props.setformData({...props.formData, passConf: e.target.value})} required /><br />

                    <label htmlFor="address">ADDRESS</label><br />
                    <textarea id="address" 
                        col="50" 
                        row="3" 
                        name="address"
                        value={props.formData.address}
                        onChange={e => props.setformData({...props.formData, address: e.target.value})}>Type here...</textarea>

                    <div className="submit">
                        <input type="submit" value="submit" disabled={!props.disable} aria-label="submit"/>
                    </div>

                </form>
                <p></p>
                <p></p>
                <p></p>
            </section>
        </main>
    )
}

export default Signup