import "./experience.scss";
import React, { useEffect, useRef } from "react";

export default function Experience(props) {
  const ref = useRef();
  const rootMargin = "-100px";
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          props.parentCallback(ref.current.id);
        }
      },
      {
        rootMargin,
      }
    );
    ref.current && observer.observe(ref.current);
  }, []);

  return <div className="experience" id="experience" ref={ref}></div>;
}
