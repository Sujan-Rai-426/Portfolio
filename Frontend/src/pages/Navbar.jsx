import React from 'react'
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

function Navbar(props) {

    

    return (

        <div>
            <nav>
                                        {/* background toggle button */}
                <button className='toggle-btn'  onClick={props.toggleMode}> {props.mode.backgroundColor === '#171b46'? (<i className="bi bi-sun-fill text-warning toggle-btn-icon"></i>) : (<i className="bi bi-moon-fill toggle-btn-icon"></i>) }</button>

                {/* <!-- Left side of navbar --> */}
                <div className="nav-left">


                    <h2><a href="https://portfolio-backend-silk-xi.vercel.app/" className='px-5'>SUJAN</a></h2>
                </div>



                <div>
                    {/* <!-- SIDE BAR ACTIVE or on button --> */}
                    <input type="checkbox"  id="sidebar-active"/>
                            <label id="overlay" htmlFor="sidebar-active" className="open-sidebar-button">
                                <i className="fa-solid fa-bars"></i>
                            </label>

                    {/* <!-- Right side of navbar --> */}
                    <div className="nav-right">
                        {/* <!-- Side bar off or deative button --> */}
                        <label htmlFor="sidebar-active" className="close-sidebar-button"> <i className="bi bi-x-lg"></i> </label>

                        
                            <Link to="/">  <li> <i className="fa-solid fa-house"></i>  Home</li> </Link>
                            <Link to="/skills-services">  <li> <i className="bi bi-rocket-fill"></i>  Skills</li>  </Link>
                            {/* <Link to="/education">  <li> <i className="bi bi-mortarboard-fill"></i>  Education</li> </Link> */}
                            <Link to="/skills-services">  <li><i className="fa-solid fa-briefcase"></i> Services</li> </Link>
                            {/* <!-- <Link to="#ACHIVEMENT">  <li> <i className="fa-solid fa-certificate"></i>  Achivements</li> </Link> --> */}
                            <Link to="/projects">  <li> <i className="bi bi-person-workspace"></i>  Projects</li> </Link>
                            <Link to="/contact"> <li> <i className="bi bi-person-lines-fill"></i>  Contact </li></Link>
                        
                    </div>
                </div>

            </nav>

        </div>

    )

}

export default Navbar