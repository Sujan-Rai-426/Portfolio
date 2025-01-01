


import React, {useState, useEffect} from 'react'
import api from '../api';
import "../assets/styles/Project.css"
import "../assets/styles/Utility.css"


function Project() {

    // baseURL cloudinary link
    const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch Projects from API
        api.get("/api/Project/")
            .then((response) => {
                console.log(response.data)
                setProjects(response.data.data); // Update state with API response
            })
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (

        <div>

            <div className="project-container">
                <h1 className="text-center section-primary-heading"> <i className="bi bi-person-workspace"></i> Projects </h1>
                <h3 className="text-center section-secondary-heading">- Demo related to my past projects -</h3>
            </div>

        <div className="project-container">
    {projects.length > 0 ? (
    <div className="project-grid">
        {projects.map((project) => (
            <div key={project.id} className="project-card">
                <div className="project-image-wrapper">
                    <img src={`${CLOUDINARY_BASE_URL}${project.image}`} alt={project.name} />
                    <span className="project-website-type">{project.website_type}</span>
                    <div className="info-icon">
                        <span className="info-tooltip">{project.detail}</span>
                        <i> <i className="bi bi-info-circle-fill"></i> </i>
                    </div>
                </div>
                <div className="project-card-detail">
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>

                    {/* Tech Stack Section */}
            {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="tech-stack my-0">
                        <ul>
                            {project.tech_stack.map((tech, index) => (
                                <li key={`${project.id}-${tech.name}`}>{tech.name}</li>
                            ))}
                        </ul>
                    </div>
            )}
                        {/* Visit button  */}
                    <a href={project.link} className='btn my-2'> Visit website </a>
                </div>

            </div>
        ))}
    </div>
    ) : (
        <p>No projects to display.</p>
    )}
</div>


    </div>

    )
}

export default Project