import React, { useEffect, useState } from "react";
import api from "../api";
import Loading_Indicator from "../context/Loading_Indicator";
import SUJAN1_image from "../assets/images/sujan1.jpg";
import "../assets/styles/About.css";
import Viewport_Animation_Components from "../context/Viewport_Animation_Components";

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";

const About = () => {
    const [currAddrs, setCurrAddrs] = useState([]);
    const [downloads, setDownloads] = useState([]);
    const [loadingAddr, setLoadingAddr] = useState(true);
    const [loadingDownloads, setLoadingDownloads] = useState(true);
    const [errorAddr, setErrorAddr] = useState(null);
    const [errorDownloads, setErrorDownloads] = useState(null);

    // Fetch Current Address
    useEffect(() => {
        api
        .get("/api/CurrentAddress/")
        .then((res) => setCurrAddrs(res.data.data))
        .catch((err) => setErrorAddr("Failed to load address"))
        .finally(() => setLoadingAddr(false));
    }, []);

    // Fetch Download CV
    useEffect(() => {
        api
        .get("/api/Download/")
        .then((res) => setDownloads(res.data.data))
        .catch((err) => setErrorDownloads("Failed to load downloads"))
        .finally(() => setLoadingDownloads(false));
    }, []);

    return (
        <div id="ABOUT">
            <h1 className="section-primary-heading">
                <i className="fa-solid fa-circle-info"></i> About
            </h1>
            <h2 className="section-secondary-heading">- Everything about me -</h2>

            <section className="about-section">
                {/* LEFT IMAGE */}
                <Viewport_Animation_Components animation="fade-left">
                <div className="about-left">
                    <img src={SUJAN1_image} alt="Sujan Rai" loading="lazy" />
                </div>
                </Viewport_Animation_Components>

                {/* RIGHT CONTENT */}
                <Viewport_Animation_Components animation="fade-right">
                    <div className="about-right">
                        <p>
                        <b className="text-purple big-text">Hello!!!</b> This is Sujan.
                        My current address is{" "}
                        {loadingAddr ? (
                                <span>Loading address...</span>
                            ) : errorAddr ? (
                                <span className="text-red">{errorAddr}</span>
                            ) : (
                                currAddrs.map((address) => (
                                <b key={address.id} className="text-skyblue">
                                    {" "}
                                    <i className="fa-solid fa-location-dot"></i> {address.location}.
                                </b>
                                ))
                            )}
                        <br />
                        I love creating new things using imagination and bringing them to
                        life. Currently I'm studying Computer Science & Engineering in{" "}
                        <b className="text-purple">
                            Madan Bhandari College of Engineering, Urlabari.
                        </b>{" "}
                        I spend most of my time in front of my computer developing or
                        learning new skills and in free time I like to spend time with my
                        family and friends.
                        </p>

                        {/* CV Download */}
                        <div className="cv-download">
                            {loadingDownloads ? (
                                <Loading_Indicator />
                            ) : errorDownloads ? (
                                <span className="text-red">{errorDownloads}</span>
                            ) : (
                                downloads.map((download) => (
                                <a
                                    key={download.id}
                                    href={`${CLOUDINARY_BASE_URL}${download.file}`}
                                    className="btn"
                                    download={download.name}
                                >
                                    Download CV <i className="fa-solid fa-download"></i>
                                </a>
                                ))
                            )}
                        </div>
                    </div>
                </Viewport_Animation_Components>
            </section>
            <br />
        </div>
    );
};

export default About;
