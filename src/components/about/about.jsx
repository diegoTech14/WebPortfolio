import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faGithub,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
  faPython,
  faGit,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import './about.css';

export function About() {
  return (
    <div>
      <div class="about" id="about">
      <div class="d-flex flex-column justify-content-center align-items-center m-5">
        <h1 class="mt-5 fw-bold">ABOUT ME</h1>
        <p class="mt-5 fs-4 text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br />
          of programming and technology
        </p>
      </div>
      <div class="container" id="aboutCont">
        
        <div class="about-me" id="aboutMe">
          <h3 class="fw-bold">Let's go to know me!</h3>
          <p class="mt-5">
            I'm a <span class="fw-bold">Backend Web Developer</span> building
            and designing the best solution for you App, you can see some of my
            work in the <span class="fw-bold">Projects</span> section.
            <br />
            <br />I also like support in research projects because it's a good
            way to learn more about other technologies and help people to create
            their projects, Feel free to connect or follow me on my{" "}
            <a href="https://www.linkedin.com/in/diego-duarte-fern%C3%A1ndez-165445180/">
              Linkedin
            </a>
            . If you are interested in my contribution in research projects just{" "}
            <a href="research.html">Click Here</a>
          </p>
          <button
            type="button"
            class="ps-5 pe-5 pt-3 pb-3 mt-4 bg-warning border-0"
          >
            <span class="fs-5 fw-bold">CONTACT</span>
          </button>
        </div>

        {/* Skills div */}
        <div class="skills">
          <div>
            <h3 className="fw-bold text-center">Skills</h3>
            <div className="container mt-5 text-center">
              <div className="row">
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faPython}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">Python</p>
                </div>
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">Node.js</p>
                </div>
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">MySQL</p>
                </div>
              </div>
              <div className="row mt-3 text-center">
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">HTML 5</p>
                </div>
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">Bootstrap/Css 3</p>
                </div>
                <div className="col me-4">
                  <FontAwesomeIcon icon={faJs} style={{ fontSize: "90px" }} />
                  <p className="fw-bold">JavaScript</p>
                </div>
              </div>
              <div className="row mt-3 text-center">
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faDocker}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">Docker</p>
                </div>
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">Git/GitHub</p>
                </div>
                <div className="col me-4">
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{ fontSize: "90px" }}
                  />
                  <p className="fw-bold">React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
