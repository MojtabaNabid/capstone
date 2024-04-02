import { useState } from "react"

function Signup() {
    const [formData, setformData] = useState({
        nameAndFamily: "",
        phone: "",
        email: "",
        pass: "",
        passConf: "",
        address: ""
    })

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        console.log(formData)
        setformData({...formData, nameAndFamily:"", phone:"", email:"", pass:"", passConf:"", address:""});
    }


    return (
        <main>
            <section className="signupform">
                <h1>Sign Up Form</h1>
                <form onSubmit={handleSumbit} className="signUpForm">
                    <label htmlFor="name">NAME AND FAMILY*</label><br />
                    <input id="name" 
                        type="text" 
                        name="name" 
                        value={formData.nameAndFamily} 
                        onChange={e => setformData({...formData, nameAndFamily: e.target.value})} /><br />

                    <label htmlFor="number">PHONE NUMBER</label><br />
                    <input id="number" 
                        type="number" 
                        name="phoneNumber"
                        value={formData.phone}
                        onChange={e => setformData({...formData, phone: e.target.value})} /><br />

                    <label htmlFor="email">EMAIL*</label><br />
                    <input id="email" 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={e => setformData({...formData, email: e.target.value})} /><br />

                    <label htmlFor="password">PASSWORD*</label><br />
                    <input id="password" 
                        type="password" 
                        name="password"
                        value={formData.pass}
                        onChange={e => setformData({...formData, pass: e.target.value})} /><br />
                    
                    <label htmlFor="passwordConf">PASSWORD CONFIRMATION*</label><br />
                    <input id="passwordConf" 
                        type="password" 
                        name="passwordConf"
                        value={formData.passConf}
                        onChange={e => setformData({...formData, passConf: e.target.value})} /><br />

                    <label htmlFor="address">ADDRESS</label><br />
                    <textarea id="address" 
                        col="50" 
                        row="3" 
                        name="address"
                        value={formData.address}
                        onChange={e => setformData({...formData, address: e.target.value})}>Type here...</textarea>

                    <div className="submit">
                        <input type="submit" value="submit" disabled={!formData.nameAndFamily} />
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