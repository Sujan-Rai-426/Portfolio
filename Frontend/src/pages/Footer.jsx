
import React from 'react'
import '../assets/styles/Footer.css'


function Footer() {

    // baseURL cloudinary link
    const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";

    return (

        <footer className='footer'>
            <div className='footer-content'>
                <p>© 2024 Portfolio of Sujan Rai. All Rights Reserved.</p>
                <div className='footer-icon-Container'>
                        {/* Social Media Links */}
                        <a href="https://www.facebook.com/sujan.rai.92202/" target="_blank" rel="noopener noreferrer" className='footer-icon'>
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.sujan140.com.np" target="_blank" rel="noopener noreferrer" className='footer-icon'>
                            <i className="bi bi-globe2"></i>
                        </a>
                        <a href="https://www.instagram.com/sujan_rai_426/" target="_blank" rel="noopener noreferrer" className='footer-icon'>
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://github.com/Sujan-Rai-426" target="_blank" rel="noopener noreferrer" className='footer-icon'>
                            <i className="bi bi-github"></i>
                        </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer