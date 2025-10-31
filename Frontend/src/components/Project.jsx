import React, { useState, useEffect } from 'react';
import api from '../api';
import "../styles/Project.css";
import "../styles/Utility.css";
import "../styles/Skeleton_Loader.css";

function Project() {
    const [loading, setLoading] = useState(true);
    const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get("/api/Project/")
            .then((response) => {
                setProjects(response.data.data);
            })
            .catch((error) => console.error("Error fetching projects:", error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <div className="project-container">
                <h1 className="text-center section-primary-heading">
                    <i className="bi bi-person-workspace"></i> Projects
                </h1>
                <h3 className="text-center section-secondary-heading">- Demo related to my past projects -</h3>
            </div>

            <div className="project-container">
                {loading ? (
                    <div className="project-grid">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="project-card skeleton-card">
                                <div className="skeleton-image" />
                                <div className="skeleton-text short" />
                                <div className="skeleton-text" />
                                <div className="skeleton-text" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="project-grid">
                        {projects
                            .slice() // make a copy to avoid mutating state
                            .sort((a, b) => b.id - a.id) // descending order by id
                            .map((project) => (
                                <div key={project.id} className="project-card">
                                    <div className="project-image-wrapper">
                                        <a href={project.link}>
                                            <img src={`${CLOUDINARY_BASE_URL}${project.image}`} alt={project.name} />
                                        </a>
                                        <span className="project-website-type">{project.website_type}</span>
                                        <div className="info-icon">
                                            <span className="info-tooltip">{project.detail}</span>
                                            <i className="bi bi-info-circle-fill"></i>
                                        </div>
                                    </div>
                                    <div className="project-card-detail">
                                        <h1>{project.name}</h1>

                                        {project.tech_stack?.length > 0 && (
                                            <div className="tech-stack my-0">
                                                <ul>
                                                    {project.tech_stack.map((tech) => (
                                                        <li key={`${project.id}-${tech.name}`}>
                                                            <i>{tech.name}</i>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}

export default Project;
