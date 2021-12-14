import { useState } from "react";
import { FaTwitter, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import "./index.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubimit = (e) => {
    e.preventDefault();
    setMessage(true);
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
            {" "}
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://github.com/sudopain"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub></FaGithub>
          </a>
        </h2>
        <form onSubmit={handleSubimit} type="text">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
