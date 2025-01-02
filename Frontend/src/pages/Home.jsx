


import React, {useState, useEffect} from 'react'
import api from '../api';

// image import
import DEVELOPER_image from '../images/developer.webp'
import SUJAN1_image from '../images/sujan1.jpg'
import MBCOE_image from '../images/mbcoe.png'
import Amar_image from '../images/Amar.png'
import Bishnu_image from '../images/Bishnu.jpg'

// css stylesheet import
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Education.css'
import '../styles/Utility.css'
import { Link } from 'react-router-dom';

function Home() {

    // <---------------------Home JS----------------------------->
    // npm install typed.js
    // <!-- Setup and start animation! -->
    useEffect(() => {
        // Initialize the Typed.js animation
        const typed = new Typed("#element", {
            strings: [
                "Full-stack developer...",
                "Web Developer...",
                "Gamer and curious Learner...",
                "Full-Stack Developer, Gamer, Learner...",
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });

        // Cleanup to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, []);


// <-------------------------------ABOUT JS------------------------------->
    // For API of CurrentAddress
        const [curr_addrs, setCurr_Addrs] = useState([]);
        useEffect(() => {
            // Fetch CurrentAddrss data from API
            api.get("/api/CurrentAddress/")
                .then((response) => {
                    console.log(response.data)
                    setCurr_Addrs(response.data.data); // Update state with API response
                })
                .catch((error) => console.error("Error fetching current address:", error));
        }, []);
        
        
        // For API of Download model 'resume pdf'
            // baseURL cloudinary link
        const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";
        const [downloads, setDownloads] = useState([]);
        useEffect(() => {
            // Fetch CurrentAddrss data from API
            api.get("/api/Download/")
                .then((response) => {
                    console.log(response.data)
                    setDownloads(response.data.data); // Update state with API response
                })
                .catch((error) => console.error("Error fetching resume:", error));
        }, []);


    return (

        <div>

            {/* -------------------HOME SECTION -------------------------------- */}
            <section id="HOME">
                <section className="home-section">

                    <div className="home-left">
                        <h3 className='h3'> Hi, <small> I'm <span className="text-skyblue">Sujan Rai</span></small> </h3> 
                        <h5><b><span id="element"></span></b></h5>
                        
                            <div>

                                <p>Another curious person who is always ready to learn new things and Passionate about building efficient and scalable Web App.</p>
                                    
                                    <div  className="logo-home">
                                        <ul>
                                            <li> <a href="https://www.linkedin.com/in/sujan-rai-18a07b2a6/"><i className="bi bi-linkedin"></i></a> </li>
                                            <li> <a href="https://github.com/Sujan-Rai-426"><i className="bi bi-github"></i></a> </li>
                                            <li> <a href="https://www.facebook.com/sujan.rai.92202?mibextid=LQQJ4d"><i className="bi bi-facebook"></i></a> </li>
                                        </ul>
                                    </div>

                            </div>

    
                            <div className="btn-box">
                            <Link to="/contact"> <button className="btn" type="submit">  Message <i className="bi bi-send-plus-fill"></i></button> </Link>
                            <a href="https://leetcode.com/u/sujan-426/"> <button type="submit" className="btn">Leetcode </button></a>
                            </div>
                    </div>

                    <div className="home-right">
                        <picture>
                            <img src={DEVELOPER_image} alt="devloper.webp"/>
                        </picture>
                    </div>

                </section>  
            </section>

<hr className='hr'/>


            {/* ----------------ABOUT SECTION ---------------------------------- */}
            <section id="ABOUT">
                <h1 className="section-primary-heading"><i className="fa-solid fa-circle-info"></i> About</h1>
                <span> <h2 className="section-secondary-heading">- Everything about me -</h2> </span>
                <section className="about-section">

                    <div className="about-left">
                        <img src={SUJAN1_image} loading="lazy" alt="sujan" />
                    </div>

                    
                    <div className="about-right">

                        <p><b className="text-purple big-text">Hello!!!</b> This is Sujan. My current address is 
                            
                            {/* use fetched api of  CurrentAddress Model */}
                {curr_addrs.map((address) => (
                    <b  key={address.id}  className="text-skyblue"> <i className="fa-solid fa-location-dot"></i> {address.location}.</b>
                )) } 
                            
                                I love creating new things using imagination and bringing them to life. Currently I'm studying Computer Science & Engineering in <b className="text-purple">Madan Bhandari Collage of Engineering, Urlabari. </b> I spent most of my time infront of my computer developing or learning new skill and in free time I like to spend time with my family and friends.
                        </p>
                                
                            <br />
                        

                    {/* use fetched api of  CurrentAddress Model */}
                {downloads.map((download) => (
                            <a key={download.id} href={`${CLOUDINARY_BASE_URL}${ download.file}`} className="btn" download={download.name} type="submit">Download CV <i className="fa-solid fa-download"></i> </a>
                    ))}

                        
                    </div>

                </section>

            </section>

<hr className='hr'/>


            {/* ----------------Education Section--------------------------- */}
        <section id="EDUCATION">

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
        </section>



        </div>

    )
}

export default Home