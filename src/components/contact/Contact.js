import "./contact.scss";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { config } from "../../config/config.js";

export default function Contact(props) {
  const ref = useRef();
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.serviceID,
        config.templateID,
        form.current,
        config.userID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact" ref={ref}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
