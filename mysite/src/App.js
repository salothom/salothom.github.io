import logo from "./logo.svg";
import headshot from "./photos/headshot_flowers.png";
import github from "./photos/GitHub-Mark.png";
import linkedin from "./photos/linkedin.png";
import devto from "./photos/devto.png";
import Hello from "./hello";
import Toggle from "./toggle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toggle />
      <div className="head">
        <div className="headershot">
          <img className="headshot" src={headshot} alt="headshot" />
        </div>
        <div className="header">
          <div className="header-width"></div>
          <div className="header-width">projects skills etc</div>
        </div>
      </div>
      <div className="bodier">
      <div class="parallax"></div>

        <Hello />
        <div className="contact-group">
          <div className="introgroup">
            <h2> {"< />"} </h2>
            <p>
              I'm a Software Developer currently based in Austin, Texas with
              experience developing applications using modern web development
              techniques and frameworks. I enjoy collaberating with other
              developers using Agile methologies, learning about web application
              secuirty processes, and creating accessible web applications.
            </p>
          </div>
          <div className="introgroup">
            <h2> {"¯_(ツ)_/¯"} </h2>
            <p>
              When I'm not coding, I am constantly organizing structured fun. I
              captain a city league kickball team, founded a local book club,
              and organized a season long competative scavanger hunt.
            </p>
          </div>
        </div>
        <h2>Contact Me</h2>
        <p>Give me a shout on one of these locations</p>
        <div className="contact-group">
          <a target="_blank" href="https://github.com/salothom">
            <img className="contact-links" src={github} alt="GitHub" />
            {/* <p>Github</p> */}
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sarahthompson3/">
            <img className="contact-links" src={linkedin} alt="GitHub" />
            {/* <p>Linkedin</p> */}
          </a>
          <a target="_blank" href="https://dev.to/salothom">
            <img className="contact-links" src={devto} alt="GitHub" />
            {/* <p>Dev.to</p> */}
          </a>
        </div>
        <p></p>
        <p></p>
        <div class="parallax"></div>
        <div>
          BLAH BLAH blah blah blah blah BLAH BLAH blah blah blah blah BLAH BLAH
          blah blah blah blah BLAH BLAH blah blah blah blah BLAH BLAH blah blah
          blah blah BLAH BLAH blah blah blah blah BLAH BLAH blah blah blah blah
          BLAH BLAH blah blah blah blah
        </div>
        <div class="parallax"></div>
        <div>
          BLAH BLAH blah blah blah blah BLAH BLAH blah blah blah blah BLAH BLAH
          blah blah blah blah BLAH BLAH blah blah blah blah BLAH BLAH blah blah
          blah blah BLAH BLAH blah blah blah blah BLAH BLAH blah blah blah blah
          BLAH BLAH blah blah blah blah
        </div>
      </div>
    </div>
  );
}

export default App;
