import React, { useEffect, useState } from 'react';
import Loading_Indicator from '../context/Loading_Indicator';
import api from '../api';
import "../assets/styles/Skills_Services.css";
import "../assets/styles/Utility.css";
import Viewport_Animation_Component from '../context/Viewport_Animation_Components';

function Skills() {

    // Loading Indicator until project is loaded
    const [loading, setLoading] = useState(true);

    // Fetch Frontend Skill from API
    const [frontendSkills, setFrontendSkills] = useState([]);
    useEffect(() => {
        api.get("/api/Frontend_Skill/")
            .then((response) => {
                setFrontendSkills(response.data.data);
            })
            .catch((error) => console.error("Error fetching Frontend Skill:", error))
            .finally(() => setLoading(false));
    }, []);

    // Fetch Backend Skill from API
    const [backendSkills, setBackendSkills] = useState([]);
    useEffect(() => {
        api.get("/api/Backend_Skill/")
            .then((response) => {
                setBackendSkills(response.data.data);
            })
            .catch((error) => console.error("Error fetching Backend Skill:", error))
            .finally(() => setLoading(false));
    }, []);

    // Fetch Services from API
    const [services, setServices] = useState([]);
    useEffect(() => {
        api.get("/api/Service/")
            .then((response) => {
                setServices(response.data.data);
            })
            .catch((error) => console.error("Error fetching Service:", error));
    }, []);

    return (
        <div>
            <br />
            {/* ===================== SKILLS SECTION ===================== */}
            <section id="SKILL" className='mt-6'>
                <h1 className="section-primary-heading"><i className="bi bi-rocket-fill"></i> My Skills</h1>
                <h2 className="section-secondary-heading pb-2"> - My overall technical skills -</h2>

                <section className="skill-section">
                    
                    <ul className="skill-level">
                        
                        {/* Front-End Skills */}
                        <Viewport_Animation_Component animation="fade-right">
                            <div className="Front-End-Skill">
                                <h1 className="text-center text-ibm text-Primary-heading">Front End</h1>
                                {loading ? (
                                    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'40vh' }}>
                                        <Loading_Indicator />
                                    </div>
                                ) : (
                                    <div>
                                        {frontendSkills.map((skill) => (
                                            <li key={skill.id}>
                                                <div className="skill-name">
                                                    <h3 className="text-ibm text-Secondary-heading">{skill.name}</h3>
                                                    <p className="text-ibm text-Secondary-paragraph">{skill.percentage} %</p>
                                                </div>
                                                <div className="bar">
                                                    <span className="bar-fill" style={{ width: `${skill.percentage}%` }}></span>
                                                </div>
                                            </li>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Viewport_Animation_Component>

                        {/* Back-End Skills */}
                        <Viewport_Animation_Component animation="fade-left">
                            <div className="Back-End-Skill">
                                <h1 className="text-center text-ibm text-Primary-heading">Back End</h1>
                                {loading ? (
                                    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'40vh' }}>
                                        <Loading_Indicator />
                                    </div>
                                ) : (
                                    <div>
                                        {backendSkills.map((skill) => (
                                            <li key={skill.id}>
                                                <div className="skill-name">
                                                    <h3 className="text-ibm text-Secondary-heading">{skill.name}</h3>
                                                    <p className="text-ibm text-Secondary-paragraph">{skill.percentage} %</p>
                                                </div>
                                                <div className="bar">
                                                    <span className="bar-fill" style={{ width: `${skill.percentage}%` }}></span>
                                                </div>
                                            </li>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Viewport_Animation_Component>

                    </ul>
                    
                </section>
                <br />
            </section>

            {/* ===================== SERVICES SECTION ===================== */}
            {/* <Viewport_Animation_Component animation="fade-up">
                <section id="SERVICE" className='my-3'>
                    <h1 className="section-primary-heading"><i className="bi bi-gear-fill"></i> My Services</h1>
                    <h2 className="section-secondary-heading"> - What I can offer -</h2>

                    <div className="services-container">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon"><i className={service.icon}></i></div>
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Viewport_Animation_Component> */}
        </div>
    );
}

export default Skills;
