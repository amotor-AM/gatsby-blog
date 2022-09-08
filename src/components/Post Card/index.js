import React from "react"
import {Link} from "gatsby"
import "./index.css"

function Card(props) {
    const {image, title, tag, body, length, slug} = props
    return(
        
            <div className="Card-Container">
                <Link to={`/post/`}>
                    <div className="Card-Image-Container">
                    </div>
                    <div className="Card-Body">
                        <h4>{tag}</h4>
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <div className="Card-Body-Length">
                            <p>{`${length} min read`}</p>
                        </div>
                    </div>
                </Link>
            </div>
        
    )
}

export default Card