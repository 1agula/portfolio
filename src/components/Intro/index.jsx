import "./index.scss";

export default function Intro() {
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
          <h1>Sudopain</h1>
          <br />
          <h3>MERN Stack Developer</h3>
          <h3>From China.</h3>
          {/* <h3>はじめまして、</h3>
          <h3>中国出身の駆け出しエンジニア</h3>
          <h3>Sudopainです</h3> */}
        </div>
        <a className="arrow" href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
