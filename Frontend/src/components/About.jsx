import React, { useEffect, useState } from 'react'
import api from '../api'
import Loading_Indicator from '../components/Loading_Indicator';
import SUJAN1_image from '../assets/images/sujan1.jpg'
import '../assets/styles/About.css'



function About() {


 // For API of CurrentAddress
        const [curr_addrs, setCurr_Addrs] = useState([]);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            // Fetch CurrentAddrss data from API
            api.get("/api/CurrentAddress/")
                .then((response) => {
                    console.log(response.data)
                    setCurr_Addrs(response.data.data); // Update state with API response
                })
                .catch((error) => console.error("Error fetching current address:", error))
                .finally(() => setLoading(false));
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
        <div id="ABOUT">
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
                    

    {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {/* Show the loading indicator when loading is true */}
                        <Loading_Indicator />
                    </div>
                ) :(
                    // use fetched api of  Download  Model to download CV
                    <div>
                        {downloads.map((download) => (
                            <a key={download.id} href={`${CLOUDINARY_BASE_URL}${ download.file}`} className="btn" download={download.name} type="submit">Download CV <i className="fa-solid fa-download"></i> </a>
                        )) } 
                    </div> 
                )}
                
                    
                </div>

            </section>

        </div>
    )
}

export default About