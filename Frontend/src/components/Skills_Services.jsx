

import React, { useEffect, useState } from 'react'
import Loading_Indicator from './Loading_Indicator';
import api from '../api';
import "../assets/styles/Skills_Services.css"
import "../assets/styles/Utility.css"

function Skills() {

    // Loading Indicator untill project is loaded
    const [loading, setLoading] = useState(true);
    
    // Fetch Frontend Skill from API
    const [frontendSkills, setFrontendSkills] = useState([]);
    useEffect(() => {
        api.get("/api/Frontend_Skill/")
            .then((response) => {
                console.log(response.data)
                setFrontendSkills(response.data.data); // Update state with API response
            })
            .catch((error) => console.error("Error fetching Frontend Skill:", error))
            .finally(() => setLoading(false));
        }, []);
    
    
    // Fetch Backend Skill from API
    const [backendSkills, setBackendSkills] = useState([]);
    useEffect(() => {
        api.get("/api/Backend_Skill/")
        .then((response) => {
            console.log(response.data)
            setBackendSkills(response.data.data); // Update state with API response
        })
        .catch((error) => console.error("Error fetching Backend Skill:", error))
        .finally(() => setLoading(false));
    }, []);
    
    
    // Fetch Service from API
    const [services, setServices] = useState([]);
    useEffect(() => {
        api.get("/api/Service/")
            .then((response) => {
                console.log(response.data)
                setServices(response.data.data); // Update state with API response
            })
            .catch((error) => console.error("Error fetching Service:", error));
    }, []);

    return (
        
        <div>
                {/* Skill Section */}
        <section id="SKILL" className='my-3'>
            <h1 className="section-primary-heading"><i className="bi bi-rocket-fill"></i>  My Skills </h1>
            <h2 className="section-secondary-heading"> - My overall technical skills -</h2> 

                <section className="skill-section">
                        <br />
                    <ul  className="skill-level">
                        
                        <div className="Front-End-Skill">
                            <h1 className="text-center text-ibm text-Primary-heading"> Front End </h1>

                    {loading ? (
                                    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'40vh' }}>
                                        {/* Show the loading indicator when loading is true */}
                                        <Loading_Indicator />
                                    </div>
                                ) : (  
                                    <div>
                                            {/* <!-------------------- For front-end-skill upload from database dynamically --------------------> */}
                                        {frontendSkills.map((skill, index) => (
                                            
                                            <li key={skill.id}>
                                                <div className="skill-name">
                                                    <h3 className="text-ibm text-Secondary-heading">{skill.name }</h3> 
                                                    <p className="text-ibm text-Secondary-paragraph">{skill.percentage } %</p>
                                                </div>

                                                <div className="bar">
                                                    <span className="bar-fill" style={{ width: `${skill.percentage}%` }}> </span> 
                                                </div>
                                            </li>
                                        ))}
                                    </div>      
                                )}
                        </div>
                        
                <div className="Back-End-Skill">
                    <h1 className="text-center text-ibm text-Primary-heading"> Back End </h1>
    {loading ? (
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'40vh' }}>
                        {/* Show the loading indicator when loading is true */}
                        <Loading_Indicator />
                    </div>
                ) : (  
                    <div>
                            {/* <!-------------------- For front-end-skill upload from database dynamically --------------------> */}
                        {backendSkills.map((skill, index) => (
                            <li key={skill.id}>
                                <div className="skill-name">
                                    <h3 className="text-ibm text-Secondary-heading">{skill.name}</h3> 
                                    <p className="text-ibm text-Secondary-paragraph">{skill.percentage} %</p>
                                </div>

                                <div className="bar">
                                    <span className="bar-fill" style={{ width: `${skill.percentage}%` }}> </span> 
                                </div>
                            </li>
                        ))}
                    </div>
                )}
            </div>
                        
                    </ul>
                        <br />

                </section>
                <br />
            </section>

                    <hr />

                {/* Services Section */}
        {/* <section id="SKILL" className='my-3'>
            <h1 className="section-primary-heading"><i className="bi bi-rocket-fill"></i>  My Skills </h1>
            <h2 className="section-secondary-heading"> - My overall technical skills -</h2>

                <div className="services-container">
                    <h3>Services</h3>
                    {services.map((service, index) => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon"> <i className={service.icon}></i>  </div>
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                    </div>
                    ))}
                </div>
        </section> */}
            
        </div>

    )
}

export default Skills