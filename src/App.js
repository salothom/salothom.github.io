import logo from "./logo.svg";
import headshot from "./photos/headshot_flowers.jpg";
import headshotTwo from "./photos/darkmode.jpg";
import github from "./photos/GitHub-Mark.png";
import linkedin from "./photos/linkedin.png";
import devto from "./photos/devto.png";
import "./App.css";
import React, { useState } from "react";
import LibraConstellation from "./librastar";
function App() {
  return (
    <>
      {/* <Toggle /> */}
      <div className="head">
        <div className="">
          <h1 className={"mainName"}>Sarah Lois Thompson</h1>
          <LibraConstellation></LibraConstellation>
          <img className="headshot " src={headshotTwo} alt="headshot" />
        </div>
        <div className="paragraph">
          When I'm not coding, I like to do digital illistration, bake bread,
          and listen to music. You'll sometimes find me captaining a city league
          kickball team, takinga pottery class, or just kicking it by Barton
          Springs.
        </div>
        <h2>Look</h2> 
        <h2>Look</h2>
        <h2>Look</h2>
        <h2>Look</h2>
        <h2>Look</h2>
        <h2>Look</h2>
        <h2>Look</h2>
        <h2>Look</h2>
        <h2>Look</h2>
        <div className="contact">
          <a target="_blank" href="https://github.com/salothom">
            <img className="contact-links" src={github} alt="GitHub" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sarahthompson3/">
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
    </>
  );
}

export default App;
