import React, { useState, useEffect, useRef } from "react";
import api from "../api";
import "../assets/styles/Project.css";
import "../assets/styles/Utility.css";
import "../assets/styles/Skeleton_Loader.css";

function Project() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const carouselRef = useRef(null);
  const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dusqlukhy/";

  // ✅ Fetch Projects
  useEffect(() => {
    api
      .get("/api/Project/")
      .then((response) => setProjects(response.data.data))
      .catch((error) => console.error("Error fetching projects:", error))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Auto Scroll (Works on Desktop + Mobile)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollDirection = 1;
    let isUserInteracting = false;
    let autoScrollInterval;

    const startAutoScroll = () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(() => {
        if (!isUserInteracting) {
          carousel.scrollLeft += scrollDirection * 1.2;
          if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
            scrollDirection = -1;
          } else if (carousel.scrollLeft <= 0) {
            scrollDirection = 1;
          }
        }
      }, 16); // ~60fps
    };

    startAutoScroll();

    // ✅ Manual drag scroll (Desktop + Mobile)
    let isDragging = false;
    let startX, scrollLeftStart;

    const startDrag = (e) => {
      isDragging = true;
      isUserInteracting = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeftStart = carousel.scrollLeft;
      carousel.classList.add("dragging");
    };

    const stopDrag = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
      setTimeout(() => (isUserInteracting = false), 1500);
    };

    const drag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeftStart - walk;
    };

    const handleWheel = () => {
      isUserInteracting = true;
      clearTimeout(carousel.resumeTimeout);
      carousel.resumeTimeout = setTimeout(() => (isUserInteracting = false), 1500);
    };

    carousel.addEventListener("mousedown", startDrag);
    carousel.addEventListener("mouseleave", stopDrag);
    carousel.addEventListener("mouseup", stopDrag);
    carousel.addEventListener("mousemove", drag);
    carousel.addEventListener("touchstart", startDrag);
    carousel.addEventListener("touchend", stopDrag);
    carousel.addEventListener("touchmove", drag);
    carousel.addEventListener("wheel", handleWheel);

    return () => {
      clearInterval(autoScrollInterval);
      carousel.removeEventListener("mousedown", startDrag);
      carousel.removeEventListener("mouseleave", stopDrag);
      carousel.removeEventListener("mouseup", stopDrag);
      carousel.removeEventListener("mousemove", drag);
      carousel.removeEventListener("touchstart", startDrag);
      carousel.removeEventListener("touchend", stopDrag);
      carousel.removeEventListener("touchmove", drag);
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div id="PROJECTS" className="project-section">
      <h1 className="text-center section-primary-heading">
        <i className="bi bi-person-workspace"></i> Projects
      </h1>
      <h3 className="text-center section-secondary-heading">
        - Demo related to my past projects -
      </h3>

      <div className="project-carousel" ref={carouselRef}>
        {loading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="project-card skeleton-card">
              <div className="skeleton-image" />
              <div className="skeleton-text short" />
              <div className="skeleton-text" />
            </div>
          ))
        ) : (
          projects
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-wrapper">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={`${CLOUDINARY_BASE_URL}${project.image}`}
                      alt={project.name}
                    />
                  </a>
                  <span className="project-website-type">
                    {project.website_type}
                  </span>
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
            ))
        )}
      </div>
      <br />
    </div>
  );
}

export default Project;
