import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import facebookIconW from "../images/facebookW.svg";
import InstaIconW from "../images/instaW.svg";
import "../About-Contact.css";

export default function ContactUs() {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    navigate("/");
    emailjs
      .sendForm(
        "service_amrb9n8",
        "template_2f44der",
        form.current,
        "TOc3jWGBBu2FEIU8_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="ContactUs">
      <div className="headings">
        <h1>Contact us</h1>
        <h2>
          for a <span className="word-highlight">free</span> quote
        </h2>
      </div>
      <div className="lower-half">
        <div className="left-contact">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="name-input"
              placeholder="Full Name"
              minLength={2}
              maxLength={30}
              required
            ></input>
            <input
              type="email"
              name="user_email"
              className="mail-input"
              placeholder="E-mail"
              minLength={2}
              required
            ></input>
            <textarea
              name="message"
              className="message-input"
              placeholder="Message"
              minLength={2}
              maxLength={200}
              required
            ></textarea>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="right-contact">
          <div className="right-top">
            <h2>Contact</h2>
            <h3>admaidservice@gmail.com</h3>
            <h3>615-821-4972</h3>
            <h3>615-752-8361</h3>
          </div>
          {/* <div className="right-bottom">
            <img
              className="IconInsta"
              src={InstaIconW}
              alt=" instagram icon"
            ></img>
            <img
              className="IconFacebook"
              src={facebookIconW}
              alt="facebook icon"
            ></img>
          </div> */}
        </div>
      </div>
    </div>
  );
}
