

import React, { useEffect, useState } from 'react'
import "../assets/styles/Contact.css"
import "../assets/styles/Utility.css"
import api from '../api';

function Contact_Form() {

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



    // For API of Contact using access key
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        
<section style={{height:'90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

    <div className="contact-section">
            
            <div className="contact-left">
                                
                    <div className="address-detail">
                        <i className="fa-solid fa-location-dot"></i>
                        <h1>  Address  </h1>
                        <p> Belbari-10, Morang</p>
        {/* use fetched api of  CurrentAddress Model */}
    {curr_addrs.map((address) => (
        <p key={address.id}> {address.location}.</p>
    ))}
                        
                    </div>

                    <div className="phone-detail">
                        <i className="fa-solid fa-phone"></i>
                        <h1>  Phone  </h1>
                        <p>   +977 9805376861  </p>
                    </div>

                    <div className="email-detail">
                        <i className="fa-solid fa-envelope"></i>
                        <h1>  Email  </h1>
                        <p> rsujan140.in@gmail.com </p>
                        <p> sujanrai20070140@gmail.com </p>
                    </div>
                            <div></div>
            </div>

            <div className="contact-right">
                    <h1 >Send your message here</h1>
                    <p> If you have any queries or work for me you can direct contact me or drop your message here </p>

{/*     ACTUAL FORM SECTION  */}
        <section className="form-container">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>

                <div className="input-box">
                    <input type="text" className='form-label1' placeholder='Full Name' name="name" id="name" required="required" />
                </div>

                <div className="input-box">
                    <input type="email" className='form-label1' placeholder='Email' name="email" id="email" required />
                </div>

                <div className="input-box">
                    <input type="text" className='form-label1' placeholder='Subject' name="subject" id="subject" required />
                </div>

                <div className='input-box'>
                    <textarea className='form-label2' placeholder='Message' name="message" id="message" required></textarea>
                </div>

                <button type="submit" className='btn' onClick={ () => { alert("Your message is sent successfully!!!.") } }> Send Message </button>
            </form>
        </section>
{/*     ACTUAL FORM SECTION  END    */}


        </div>
    </div>

</section>
    )
}

export default Contact_Form