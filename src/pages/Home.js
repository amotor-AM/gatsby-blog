import React from "react"
import heroImage from "../images/blog-cover.jpg"
import "./CSS Files/home.css"
import {Link} from "gatsby"
import Card from "../components/Post Card"
import Header from "../components/Header"

function HomePage() {
    let arrVal = ["", "", "","", "", ""]
    return (
        <div className="HomePage-Container">
            <div className="HomePage-Hero" style={{"backgroundImage": `url(${heroImage})`}}>
                
                <h3>Fix Your Credit</h3>
                <h3>Fix Your Life</h3>
            </div>
            <div className="HomePage-Feed">
                {
                    arrVal.map(() => {
                        return <Card image="" title="test blog post" tag="test" body="this is a test body for my test blog post..." length = "2" slug="test" />
                    })
                }
            </div>
        </div>
    )
}

export default HomePage