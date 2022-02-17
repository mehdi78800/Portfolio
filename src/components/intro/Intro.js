import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro(props) {
  const ref = useRef();
  const textRef = useRef();
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
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      backSpeed: 60,
      showCursor: true,
      strings: ["Développeur Web", "Gamer", "Papa", "Supporter de Man U..."],
    });
  }, [parentCallback]);

  return (
    <div className="intro" id="intro" ref={ref}>
      <div className="text">
        <h2>Bonjour, je suis</h2>
        <h1>Mehdi Regragui</h1>
        <h3>
          <span ref={textRef}></span>{" "}
        </h3>
      </div>
      <div className="link">
        <a href="#experience">
          <KeyboardArrowDownIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}
