import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import '../assets/styles/Home_Hero.css'
import DEVELOPER_image from '../assets/images/developer.webp'

function Home_Hero() {


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

    return (
            <div id="HOME">
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
                            <Link to="/contact"> 
                                <button className="btn" type="submit">  
                                    Message <i className="bi bi-send-plus-fill"></i>
                                </button> </Link>
                            <a href="https://blog-code-verse.vercel.app/"> <button type="submit" className="btn"> 
                                Code<sup><u>Vora💻</u></sup> 
                            </button></a>
                            </div>
                    </div>

                    <div className="home-right">
                        <picture>
                            <img src={DEVELOPER_image} alt="devloper.webp"/>
                        </picture>
                    </div>

                </section>  
            </div>
    )
}

export default Home_Hero