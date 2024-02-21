
import { SiDocker, SiMysql } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import './about.css';


export function About() {

  return (
    <div id="about-container">
      <div id="about-me" className="shadow about-me">
        <h3 className="fw-bold">Me as a developer</h3>
        <p class="mt-4" id="about-me-text">
          Data, databases and logic are topics that I'm apassionate about, I really love solving new challenges. As a backend developer I consider it very important
          continue updating knowledge about trends and mantaining an continuos learning that allows me grow professionally and develop new skills.
        </p>

        <p className="mt-4" id="tag-about">Creating solutions makes me very happy! 🧑🏽‍💻</p>
      </div>
      <div id="about-skills" className="about-skills">
        <div className="shadow" id="component">
          <h3 className="fw-bold">About me</h3>
          <p>I'm <span>Diego Duarte Fernández</span>, I'm a jr. Developer who likes helping other programmers, talking about technology, animals and the ocean.
            I'm a <span>proactive</span>, <span>kind</span> and <span>responsable</span> person I have <span>communication</span> skills and ability to <span>work in a team</span>. Also sometimes I'm perfectionist
            and many times I like to take the initiative to do or create something. I really like to programming, solve a lot of challenges and get feedback to improve myself.
          </p>
        </div>

        <div id="component" className="shadow">
          <div>
            <h3 className="fw-bold">Main technologies</h3>
            <p>These are my most outstanding technologies in wich I have worked on numerous projects,
              I like to know a little about other areas such as cybersecurity, frontend, software architecture based on
              Backend development.
            </p>
            <DiNodejsSmall id="icon" />
            &nbsp;&nbsp;&nbsp;
            <SiMysql id="icon" />
            &nbsp;&nbsp;&nbsp;
            <DiPython id="icon" />
            {/*&nbsp;&nbsp;&nbsp;
            <SiMongodb id="icon"/>*/}
            &nbsp;&nbsp;&nbsp;
            <FaGithub id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaBootstrap id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaReact id="icon" />

            <div id="description-tech">
              <p className="mt-3" >NodeJS, MySQL, Python, Git/Github, Bootstrap, React</p>
            </div>
          </div>

        </div>
        <div id="component" className="shadow">
          <div>
            <h3 className="fw-bold">Other technologies</h3>
            <p>

              Everyday I like to visualize myself as a good programmer and gradually I like to learn new technologies
              to complement my TI knowledge. I'm capacitated in other technologies such as
            </p>

            <FaJava id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaPhp id="icon" />
            {/*&nbsp;&nbsp;&nbsp;
            <FaAws id="icon" />*/}
            &nbsp;&nbsp;&nbsp;
            <SiDocker id="icon" />
            <div id="description-tech">
              <p className="mt-3" >Java, php, Docker</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
