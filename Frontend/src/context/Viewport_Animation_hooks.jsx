import { useEffect, useState, useRef } from "react";

const Viewport_Animation_hooks = (options) => {
    const ref = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInViewport(true);
                    observer.unobserve(entry.target); // animate once
                }
            },
            options
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return [ref, isInViewport];
};

export default Viewport_Animation_hooks;
