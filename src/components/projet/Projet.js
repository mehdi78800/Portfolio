import "./projet.scss";
import React, { useEffect, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import SwipeIcon from "@mui/icons-material/Swipe";
import { projets } from "../../data/projets";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projet(props) {
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
    <div className="projet" id="projet" ref={ref}>
      {" "}
      <ScrollContainer className="applications scroll-container">
        {projets.map((data, key) => {
          return (
            <div className="application" key={key}>
              <div className="row">
                <div className="col-3">
                  <img className="logoApp" src={data.img} alt={data.name} />
                </div>
                <div className="col-9">
                  <h3>{data.name}</h3>
                </div>
              </div>
              <hr />

              <p className="category">Catégorie: {data.category}</p>
              <p className="date">Sortie: {data.date}</p>
              <p className="resume">{data.description}</p>
              <p className="techno">{data.techno}</p>
              <div className="btnContainer">
                <a
                  className="detailsBtn"
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Essayer
                </a>
              </div>
              <div className="btnContainer"></div>
            </div>
          );
        })}
      </ScrollContainer>
      <div className="swipeDiv">
        <SwipeIcon className="swipeIcon" />
      </div>
    </div>
  );
}
