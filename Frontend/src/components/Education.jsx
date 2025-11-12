import React from 'react'
import '../assets/styles/Education.css'
import MBCOE_image from '../assets/images/mbcoe.png'
import Amar_image from '../assets/images/Amar.png'
import Bishnu_image from '../assets/images/Bishnu.jpg'

function Education() {
    return (
        <div id="EDUCATION">

            <h1 className="section-primary-heading"><i className="bi bi-mortarboard-fill"></i> My Qualification </h1>
            <span> <h2 className="section-secondary-heading"> - My overall qualification -</h2> </span>

                <section className="education-section">
                    
                    <div className="timeline">

                        <div className="education_container left-container">
                            <picture>
                                <img src={MBCOE_image} loading="lazy" alt="Madan Bhandari Collage of Engineering"/>
                            </picture>
                                <div className="text-box">
                                <h2> MBCOE </h2>
                                <i><small>2019 - 2024</small></i>
                                <div className="education-detail">
                                    <p> <b> <i className="fa-solid fa-location-dot"></i> Address </b> :- <i> Urlabari -03, Morang </i></p>
                                    <p> <b> <i className="fa-solid fa-book-open"></i> Course </b> :- <i> Computer Engineering</i> </p>
                                    <p> <b><i className="fa-solid fa-globe"></i> Visit </b> :- <a href="https://www.facebook.com/mbmanepal"> <i className="fa-brands fa-facebook"></i> </a> <a href="https://mbman.edu.np/"> <i className="fa-solid fa-globe"></i> </a>  </p>
                                </div>
                                <span className="left-container-arrow"></span>
                            </div>
                        </div>
    
                        <div className=" right-container education_container">
                            <picture>
                                <img src={Bishnu_image} loading="lazy" alt="Bishnu Memorial"/>
                            </picture>
                            <div className="text-box">
                                <h2>Bishnu Memorial</h2>
                                <i><small>2015 - 2017</small></i>
                                <div className="education-detail">
                                    <p> <b> <i className="fa-solid fa-location-dot"></i> Address </b> :- <i> Dharan-9, Sunsari </i></p>
                                    <p> <b> <i className="fa-solid fa-book-open"></i> Course </b> :- <i> High School <sup><b> (+2) </b></sup></i> </p>
                                    <p> <b> <i className="fa-solid fa-globe"></i> Visit </b> :- <a href="https://www.facebook.com/memorialbishnu/"> <i className="fa-brands fa-facebook"></i> </a> <a href="https://www.collegenp.com/school/bishnu-memorial-secondary-school"> <i className="fa-solid fa-globe"></i> </a>  </p>
                                </div>
                                <span className="right-container-arrow"></span>
                            </div>
                        </div>
    
                        <div className="education_container left-container">
                            <picture>
                                <img src={Amar_image} loading="lazy" alt="Amar boarding" />
                            </picture>
                                <div className="text-box">
                                <h2>Amar Boarding</h2>
                                <i><small>2015</small></i>
                                <div className="education-detail">
                                    <p> <b> <i className="fa-solid fa-location-dot"></i> Address </b> :- <i> Belbari-10, Morang </i></p>
                                    <p> <b> <i className="fa-solid fa-book-open"></i> Course </b> :- <i>Competed SLC </i> </p>
                                    <p> <b> <i className="fa-solid fa-globe"></i> Visit </b> :- <a href="https://www.facebook.com/passedstudent"> <i className="fa-brands fa-facebook"></i> </a>   </p>
                                </div>
                                <span className="left-container-arrow"></span>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
        </div>
    )
}

export default Education