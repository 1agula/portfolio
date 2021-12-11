import React, { useState } from "react";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Topbar from "./components/Topbar";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";
import Menu from "./components/Menu";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div
        onClick={() => {
          setMenuOpen(false);
        }}
        className="sections"
      >
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
