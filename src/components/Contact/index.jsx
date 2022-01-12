import { useState } from "react";
import { FaTwitter, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./index.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubimit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_59xy1i2",
        "template_hftblhd",
        e.target,
        "user_mpqbMJ7gPc6MqolfUPm7d"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setMessage(true);
    e.target.email.value = "";
    e.target.message.value = "";
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <br />
        <h2>
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <FaTwitter></FaTwitter>
          </a>
          <a
            href="https://www.youtube.com/channel/UCbslYgFIf11sbJ8G-b4nd5Q"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube></FaYoutube>
          </a>
          <a
            href="https://www.instagram.com/yuridanshi/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://github.com/sudopain"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub></FaGithub>
          </a>
        </h2>
        <form onSubmit={handleSubimit} type="text">
          <input required name="email" type="email" placeholder="Email" />
          <textarea required name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
