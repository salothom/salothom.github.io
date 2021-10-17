import logo from "./logo.svg";
import headshot from "./photos/headshot_flowers.jpg";
import headshotTwo from "./photos/darkmode.jpg";
import github from "./photos/GitHub-Mark.png";
import linkedin from "./photos/linkedin.png";
import devto from "./photos/devto.png";
import Toggle from "./toggle";
import "./App.css";
import React, { useState } from "react";
import MyGraph from "./MyGraph";

function App() {
  // window.onscroll = function(ev) {
  //   if (window.scrollY > 65) {
  //     document.getElementById("top").style.opacity = "100%";
  //   } else {
  //     document.getElementById("top").style.opacity = "0%";
  //   }
  // };

  const handelShow = what => {
    if (what === "Skills") {
      document.getElementById("skills").style.display = "block";
      document.getElementById("about").style.display = "none";
      document.getElementById("portolfio").style.display = "none";
    } else if (what === "Port") {
      document.getElementById("skills").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("portolfio").style.display = "block";
    } else if (what === "About") {
      document.getElementById("skills").style.display = "none";
      document.getElementById("about").style.display = "block";
      document.getElementById("portolfio").style.display = "none";
    }
  };

  return (
    <>
      <Toggle />
      <div className="head">
        <div className="headerTop yellowSwap"></div>
        <div className="facematch">
          <img className="headshot sun" src={headshot} alt="headshot" />
          <img className="headshot moon" src={headshotTwo} alt="headshot" />

          <h1>Sarah Lois Thompson</h1>
          <div className="contact-group">
            <a target="_blank" href="https://github.com/salothom">
              <img className="contact-links" src={github} alt="GitHub" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sarahthompson3/"
            >
              <img className="contact-links" src={linkedin} alt="Linkedin" />
            </a>
            <a target="_blank" href="https://dev.to/salothom">
              <img className="contact-links" src={devto} alt="Dev.To" />
            </a>
            <a
              target="_blank"
              href="https://open.spotify.com/user/1242326189?si=nvhZn5nAQHaD48_Rt6bvGg"
            >
              <img
                className="contact-links"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/Spotify_Icon_RGB_Black.png"
                alt="Spotify"
              />
            </a>
          </div>
        </div>
        <div className="headerBottom yellowSwap"></div>
        {/* <div className="mainContent">
          <div className="mainButtons">
            <button
              tabindex="0"
              onkeydown={e => {
                console.log(e);
                if (e.keyCode === 13) {
                  handelShow("About");
                }
              }}
              onClick={() => {
                handelShow("About");
              }}
              className="buttons"
            >
              About
            </button>
            <button
              tabindex="0"
              onClick={() => {
                handelShow("Port");
              }}
              className="buttons"
            >
              Portfolio
            </button>
            <button
              tabindex="0"
              onClick={() => {
                handelShow("Skills");
              }}
              className="buttons"
            >
              Skills
            </button>
          </div>
          <div className=" sections">
            <div id="about" className="about ">
              I'm a Software Developer currently based in Austin, Texas with
              experience developing applications using modern web development
              techniques and frameworks. I enjoy collaberating with other
              developers using Agile methologies, learning about web application
              secuirty processes, and creating accessible web applications.
            </div>
            <div id="portolfio" className="portolfio ">
              Coming Soon!
            </div>
            <div id="skills" className="skills ">
              <MyGraph />
            </div>
          </div> */}
        {/* </div> */}
      </div>

      {/* I
         
              When I'm not coding, I like to do digital illistration, bake
              bread, and listen to music. You'll sometimes find me captaining a
              city league kickball team, facilitating a local book club, or just
              kicking it by Barton Springs Creek. */}
    </>
  );
}

export default App;
