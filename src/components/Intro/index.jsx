import { useEffect, useRef } from "react";
import "./index.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      strings: ["Developer", "Desiner", "Content Creater"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Lorem Lorem</h1>
          <h3>
            MERN Stack <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portofolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
