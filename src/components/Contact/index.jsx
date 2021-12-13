import { useState } from "react";
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
