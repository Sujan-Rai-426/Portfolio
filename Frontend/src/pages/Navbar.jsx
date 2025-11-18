import React from "react";
import "../assets/styles/Navbar.css";

function Navbar({ toggleMode, mode }) {
    // Smooth scroll function
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        // Close sidebar after clicking (for mobile)
        const checkbox = document.getElementById("sidebar-active");
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div>
            <nav>
                {/* Background toggle button */}
                <button className="toggle-btn" onClick={toggleMode}>
                    {mode.backgroundColor === "#171b46" ? (
                        <i className="bi bi-sun-fill text-warning toggle-btn-icon"></i>
                    ) : (
                        <i className="bi bi-moon-fill toggle-btn-icon"></i>
                    )}
                </button>

                {/* Left side */}
                <div className="nav-left">
                    <h2>
                        <a href="https://portfolio-backend-silk-xi.vercel.app/" className="px-5">
                            SUJAN
                        </a>
                    </h2>
                </div>

                {/* Right side */}
                <div>
                    <input type="checkbox" id="sidebar-active" />
                    <label id="overlay" htmlFor="sidebar-active" className="open-sidebar-button">
                        <i className="fa-solid fa-bars"></i>
                    </label>

                    <div className="nav-right">
                        <label htmlFor="sidebar-active" className="close-sidebar-button">
                            <i className="bi bi-x-lg"></i>
                        </label>

                        {/* Smooth scroll links */}
                        <a href="#HOME" onClick={(e) => handleScroll(e, "HOME")}>
                            <li><i className="fa-solid fa-house"></i> Home</li>
                        </a>

                        <a href="#ABOUT" onClick={(e) => handleScroll(e, "ABOUT")}>
                            <li><i className="bi bi-person-fill"></i> ABOUT</li>
                        </a>

                        <a href="#EDUCATION" onClick={(e) => handleScroll(e, "EDUCATION")}>
                            <li><i className="bi bi-mortarboard-fill"></i> Education</li>
                        </a>

                        <a href="#SKILL" onClick={(e) => handleScroll(e, "SKILL")}>
                            <li><i className="bi bi-rocket-fill"></i> Skills</li>
                        </a>

                        <a href="#PROJECTS" onClick={(e) => handleScroll(e, "PROJECTS")}>
                            <li><i className="bi bi-person-workspace"></i> Projects</li>
                        </a>

                        <a href="#CONTACT-FORM" onClick={(e) => handleScroll(e, "CONTACT-FORM")}>
                            <li><i className="bi bi-person-lines-fill"></i> Contact</li>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
