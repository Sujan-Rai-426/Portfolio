import React from "react";
import Viewport_Animation_hooks from "./Viewport_Animation_hooks";
import "../assets/styles/Viewport_Animation_Components.css";

const Viewport_Animation_Component = ({ children, animation = "fade-up" }) => {
    const [ref, isInViewport] = Viewport_Animation_hooks({ threshold: 0.2 });

    return (
        <div   ref={ref} className={`animated-section ${animation} ${isInViewport ? "in-view" : ""}`}    >
            {children}
        </div>
    );
};

export default Viewport_Animation_Component;
