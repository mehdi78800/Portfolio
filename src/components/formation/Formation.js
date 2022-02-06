import "./formation.scss";
import React, { useEffect, useRef } from "react";

export default function Formation(props) {
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
  return <div className="formation" id="formation" ref={ref}></div>;
}
