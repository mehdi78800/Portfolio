import "./contact.scss";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { config } from "../../config/config.js";
import { Form, Button, Modal } from "react-bootstrap";

export default function Contact(props) {
  const ref = useRef();
  const form = useRef();
  const [activeModal, setActiveModal] = useState(null);
  const rootMargin = "-100px";
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      config.serviceID,
      config.templateID,
      form.current,
      config.userID
    );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact" ref={ref}>
      <div className="container" id="form-container">
        <div className="row">
          <div className="col-10 col-xl-6 form-div">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="user_name" placeholder="Nom" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Votre message"
                />
              </Form.Group>
              <div className="btnContainer">
                <Button
                  className="detailsBtn"
                  type="submit"
                  onClick={(e) => handleShow(e, "emailModal")}
                >
                  Envoyer
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="container" id="contact-container">
        <div className="row">
          <div className="col-10 col-xl-6 contact-div">
            <div className="col-3">
              <a
                href="https://www.linkedin.com/in/mehdi-regragui"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src="/assets/img/contact_icons/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://github.com/mehdi78800"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src="/assets/img/contact_icons/github.png"
                  alt="github"
                />
              </a>
            </div>
            <div className="col-3">
              <a href="tel:0766714446" target="_blank" rel="noreferrer">
                <img
                  className="social-icon"
                  src="/assets/img/contact_icons/phone.svg"
                  alt="phone"
                />
              </a>
            </div>
            <div className="col-3">
              <a
                href="/assets/img/cv_regragui_mehdi_developpeur_web.pdf"
                target="_blank"
                rel="noreferrer"
                download
              >
                <img
                  className="social-icon"
                  src="/assets/img/contact_icons/cv.png"
                  alt="cv"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal
        key={"emailModal"}
        show={activeModal === "emailModal"}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Merci pour votre message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Votre message a été envoyé avec succès !</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeBtn" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
