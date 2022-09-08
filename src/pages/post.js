import React from "react"
import {Link} from "gatsby"
import Next from "../images/icons/next.png"
import Facebook from "../images/icons/facebook.png"
import Twitter from "../images/icons/twitter.png"
import Share from "../images/icons/share.png"
import "./CSS Files/post.css"


function Post() {
    return(
        <div className="Post-Container">
            <div className="Blog-Post-Container">
                <div className="Featured-Ad"></div>
                <div className="Post-Image">

                </div>
                <div className="Post-Title">
                    <h1>Title</h1>
                </div>
                <div className="Post-Body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus. Pretium quam vulputate dignissim suspendisse in est ante in. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisis magna etiam tempor orci eu lobortis. Ullamcorper malesuada proin libero nunc consequat interdum. Tellus orci ac auctor augue mauris augue neque gravida. Integer malesuada nunc vel risus commodo. Porttitor leo a diam sollicitudin tempor id. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Magna ac placerat vestibulum lectus mauris ultrices eros. Egestas maecenas pharetra convallis posuere morbi. Dignissim convallis aenean et tortor at risus. Aenean et tortor at risus viverra adipiscing at in. Orci porta non pulvinar neque. Quis lectus nulla at volutpat diam ut. Id neque aliquam vestibulum morbi blandit.

Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Eu tincidunt tortor aliquam nulla facilisi cras. Eget mi proin sed libero enim sed faucibus. Ultrices in iaculis nunc sed augue lacus. Platea dictumst quisque sagittis purus sit amet. Rutrum quisque non tellus orci ac auctor augue mauris augue. Sit amet nulla facilisi morbi tempus iaculis urna id. Dolor morbi non arcu risus. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Fringilla ut morbi tincidunt augue interdum velit. In ante metus dictum at tempor commodo ullamcorper a lacus. Duis convallis convallis tellus id interdum velit. Libero id faucibus nisl tincidunt eget nullam non nisi.

Et egestas quis ipsum suspendisse ultrices. Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt lobortis feugiat vivamus at augue eget. Id neque aliquam vestibulum morbi blandit cursus. Semper auctor neque vitae tempus quam pellentesque nec. Arcu dui vivamus arcu felis bibendum ut tristique et. Massa massa ultricies mi quis hendrerit dolor. Lectus quam id leo in vitae. Mauris a diam maecenas sed enim. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Mattis vulputate enim nulla aliquet. Turpis egestas integer eget aliquet nibh praesent tristique magna. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Varius sit amet mattis vulputate enim nulla aliquet. Iaculis at erat pellentesque adipiscing. Ornare lectus sit amet est placerat in. Placerat in egestas erat imperdiet sed euismod nisi. Nulla aliquet enim tortor at auctor. Aliquam ut porttitor leo a diam sollicitudin.

Non curabitur gravida arcu ac tortor dignissim convallis aenean. Eget lorem dolor sed viverra ipsum. Egestas integer eget aliquet nibh praesent tristique magna sit amet. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Purus viverra accumsan in nisl nisi scelerisque eu. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Eget lorem dolor sed viverra. Cursus in hac habitasse platea dictumst quisque sagittis purus. Faucibus nisl tincidunt eget nullam non nisi est sit. Donec et odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Consectetur a erat nam at. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Cras adipiscing enim eu turpis egestas.</p>
                </div>
                <div className="Post-Navigation">
                    <div className="Social-Share">
                        <a href="">
                            <img src={Facebook}/>
                        </a>
                        <a href="">
                            <img src={Twitter}/>
                        </a>
                        <a href="">
                            <img src={Share}/>
                        </a>
                    </div>
                    <div className="Next-Post">
                        <Link to="/post/">
                            <p>Next Post</p>
                        </Link>
                        <Link to="/post/"><img src={Next}/></Link>
                        
                        
                    </div>

                </div>
            </div>
            <div className="Post-Sidebar">
                <div className="Sidebar-Subscribe-Box"></div>
                <div className="Sidebar-Relevant-Posts"></div>
                <div className="Sidebar-Relevant-Ad"></div>
                <div className="Sidebar-Social-Share">
                        <a href="">
                            <img src={Facebook}/>
                        </a>
                        <a href="">
                            <img src={Twitter}/>
                        </a>
                        <a href="">
                            <img src={Share}/>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Post