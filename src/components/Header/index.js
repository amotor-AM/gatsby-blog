import React from "react"
import Link from "gatsby"
import Logo from "../../images/logo.png"

function Header() {
    return (
        <div className="Header-Container">
            <div className="Header-Logo">
                <Link to="/">
                    <img src={Logo} alt="Credit Repair Blog Logo"/>
                </Link>
            </div>
            <div className="Header-NavBar">
                <Link to="/">
                    <button className="Header-CTA-Button">Get Out Of Debt Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Header