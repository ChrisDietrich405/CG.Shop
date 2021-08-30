import { Link } from "react-router-dom"

import { useState } from "react"

import "../../assets/css/form.css"

export default function SignIn() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const addName = (e) => {
        setName(e.target.value)
    }

    const addPassword = (e) => {
        setPassword(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <h2>C.G.Shop</h2>
                <form onSubmit={submit}>
                    <h3>Sign In</h3>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" value={name} onChange={addName}  />
                    </label>
                    <label htmlFor="password">
                        Password 
                        <input type="text" placeholder="" id="password" value={password} onChange={addPassword}  />
                        <p className="password-minimum">(At least 6 characters)</p>
                    </label>
                    <p>New to C.G.Shop?</p>
                    <Link to="/create-account">
                    <button type="submit" className="btn">Create your C.G.Shop account</button>
                    
                    </Link>
                   
                </form>
            
        </div>
    )
}
