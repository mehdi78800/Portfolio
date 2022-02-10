import "./formation.scss";
import React, { useEffect, useRef } from "react";
import { formations } from "../../data/formations";
import ScrollContainer from "react-indiana-drag-scroll";
import { Button } from "react-bootstrap";
import SwipeIcon from "@mui/icons-material/Swipe";

export default function Formation(props) {
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
    <div className="formation" id="formation" ref={ref}>
      <ScrollContainer className="diplomes scroll-container">
        {formations.map((data, key) => {
          return (
            <div className="diplome" key={key}>
              <h3>{data.company}</h3>
              <p className="title">{data.title}</p>
              <p className="date">
                {data.start_date === data.end_date
                  ? data.start_date
                  : data.start_date + " - " + data.end_date}
              </p>
              <img src={data.link} alt={data.title} />
              <div className="btnContainer">
                <a
                  download={data.title + ".png"}
                  href={data.link}
                  title={data.title}
                  className="detailsBtn"
                >
                  <Button id={key}>Télécharger l'image</Button>
                </a>
              </div>
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
