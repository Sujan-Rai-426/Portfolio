import React from "react";
import "../assets/styles/Education.css";
import MBCOE_image from "../assets/images/mbcoe.png";
import Amar_image from "../assets/images/Amar.png";
import Bishnu_image from "../assets/images/Bishnu.jpg";
import Viewport_Animation_Component from "../context/Viewport_Animation_Components";

function Education() {
    const educationData = [
        {
            img: MBCOE_image,
            alt: "Madan Bhandari College of Engineering",
            name: "MBCOE",
            period: "2019 - 2024",
            address: "Urlabari -03, Morang",
            course: "Computer Engineering",
            links: [
                { href: "https://www.facebook.com/mbmanepal", icon: "fa-facebook" },
                { href: "https://mbman.edu.np/", icon: "fa-globe" },
            ],
            side: "left",
        },
        {
            img: Bishnu_image,
            alt: "Bishnu Memorial",
            name: "Bishnu Memorial",
            period: "2015 - 2017",
            address: "Dharan-9, Sunsari",
            course: "High School (+2)",
            links: [
                { href: "https://www.facebook.com/memorialbishnu/", icon: "fa-facebook" },
                { href: "https://www.collegenp.com/school/bishnu-memorial-secondary-school", icon: "fa-globe" },
            ],
            side: "right",
        },
        {
            img: Amar_image,
            alt: "Amar Boarding",
            name: "Amar Boarding",
            period: "2015",
            address: "Belbari-10, Morang",
            course: "Competed SLC",
            links: [{ href: "https://www.facebook.com/passedstudent", icon: "fa-facebook" }],
            side: "left",
        },
    ];

    return (
        <div id="EDUCATION">
            <h1 className="section-primary-heading">
                <i className="bi bi-mortarboard-fill"></i> My Qualification
            </h1>
            <h2 className="section-secondary-heading">- My overall qualification -</h2>

            <section className="education-section">
                <div className="timeline">
                    {educationData.map((edu, idx) => (
                        <Viewport_Animation_Component key={idx} animation={edu.side === "left" ? "fade-left" : "fade-right"} >
                            <div className={`education_container ${edu.side}-container`}>
                                <picture>
                                    <img src={edu.img} loading="lazy" alt={edu.alt} />
                                </picture>
                                <div className="text-box">
                                    <h2>{edu.name}</h2>
                                    <i> <small>{edu.period}</small> </i>
                                    <div className="education-detail">
                                        <p>
                                            <b> <i className="fa-solid fa-location-dot"></i> Address </b>{" "} :- <i>{edu.address}</i>
                                        </p>
                                        <p>
                                            <b> <i className="fa-solid fa-book-open"></i> Course </b>{" "} :- <i>{edu.course}</i>
                                        </p>
                                        <p>
                                            <b> <i className="fa-solid fa-globe"></i> Visit </b>{" "} :-{" "}
                                            {edu.links.map((link, i) => (
                                                <a key={i} href={link.href} target="_blank" rel="noreferrer">
                                                    <i className={`fa-brands ${link.icon}`}></i>{" "}
                                                </a>
                                            ))}
                                        </p>
                                    </div>
                                    <span className={`${edu.side}-container-arrow`}></span>
                                </div>
                            </div>
                        </Viewport_Animation_Component>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Education;
