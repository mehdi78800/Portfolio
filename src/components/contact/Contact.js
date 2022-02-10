import "./contact.scss";
import React, { useEffect, useRef } from "react";

export default function Contact(props) {
  const ref = useRef();
  const rootMargin = "-100px";
  const { parentCallback } = props;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          parentCallback(ref.current.id);
        }
      },
      {
        rootMargin,
      }
    );
    ref.current && observer.observe(ref.current);
  }, [parentCallback]);

  return <div className="contact" id="contact" ref={ref}></div>;
}
