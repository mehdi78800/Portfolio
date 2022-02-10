import "./experience.scss";
import React, { useEffect, useRef, useState } from "react";
import { jobs } from "../../data/jobs";
import { Modal, Button } from "react-bootstrap";
import ScrollContainer from "react-indiana-drag-scroll";
import SwipeIcon from "@mui/icons-material/Swipe";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Experience(props) {
  const ref = useRef();
  const rootMargin = "-100px";
  const [activeModal, setActiveModal] = useState(null);
  const { parentCallback } = props;

  const handleClose = () => setActiveModal(null);
  const handleShow = (e, key) => setActiveModal(key);

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
    <div className="experience" id="experience" ref={ref}>
      <ScrollContainer className="jobs scroll-container">
        {jobs.map((data, key) => {
          return (
            <div className="job" key={key}>
              <h3>{data.company}</h3>
              <p className="title">{data.title}</p>
              <p className="date">
                {data.start_date} - {data.end_date}
              </p>
              <p className="location">{data.location}</p>
              <p className="resume">{data.resume}</p>
              <div className="btnContainer">
                <Button
                  id={key}
                  className="detailsBtn"
                  onClick={(e) => handleShow(e, key)}
                >
                  Détails
                </Button>
              </div>
              <Modal id={key} show={activeModal === key} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {data.company}{" "}
                    <p className="date">
                      {data.start_date} - {data.end_date}
                    </p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div dangerouslySetInnerHTML={{ __html: data.details }} />
                </Modal.Body>
                <Modal.Footer>
                  <Button className="closeBtn" onClick={handleClose}>
                    Fermer
                  </Button>
                </Modal.Footer>
              </Modal>
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
