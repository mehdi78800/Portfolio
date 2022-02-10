import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useRef } from "react";

export default function Intro(props) {
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

  return (
    <div className="intro" id="intro" ref={ref}>
      <div className="text">
        <h2>Bonjour, je suis</h2>
        <h1>Mehdi Regragui</h1>
        <h3>Développeur Web</h3>
      </div>
      <div className="link">
        <a href="#experience">
          <KeyboardArrowDownIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}
