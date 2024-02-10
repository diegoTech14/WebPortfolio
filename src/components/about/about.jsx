
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
import { someFunction } from "../../scroll.js";

export function About() {
  {window.addEventListener('scroll', someFunction)}
  return (
    <div id="about-container">
      <div id="about-me" className="shadow about-me">
        <h3 className="fw-bold">Me as a backend developer</h3>
        <p class="mt-4" id="about-me-text">
          Data, databases and logic are topics that I am passionate about, I really love solving new challenges, as a backend developer I consider it very important to continue studying,
          creating and learning to grow in our professional career and provide more and new solutions.
        </p>

        <p className="mt-4" id="tag-about">I am very excited to help you! 🧑🏽‍💻</p>
      </div>
      <div id="about-skills" className="about-skills">
        <div className="shadow component1" id="component1">
          <h3 className="fw-bold">About me</h3>
          <p>I'm <span>Diego Duarte Fernández</span>, I'm a jr. Developer who loves helping others, talking about technology, animals and the ocean. 
            I consider myself to be a <span>proactive</span>, <span>kind</span> and <span>responsable</span> person who likes to do everything well. Also sometimes I'm perfectionist 
            and many times I like to take the initiative to do or create something. I really like to programming, solve a lot of challenges and get feedback to improve myself.
          </p>
        </div>

        <div id="component" className="shadow component2">
          <div>
          <h3 className="fw-bold">Main technologies</h3>
          <p>These are my most outstanding skills for programming and developing web proyects,
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
            <FaGithub  id="icon"/>

            <div id="description-tech">
            <p className="mt-3" >NodeJS, MySQL, Python, MongoDB, Git/Github</p>
            </div>
          </div>

        </div>
        <div id="component" className="shadow component3">
          <div>
          <h3 className="fw-bold">Other technologies</h3>
          <p>
            These are my least outstanding skills for programming and developing web proyects,
            Everyday I like to visualize myself as a good programmer and gradually I like to learn some new technologies
            to complement my TI knowledge.
          </p>
           
            <FaJava  id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaPhp id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaReact id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaBootstrap  id="icon" />
            {/*&nbsp;&nbsp;&nbsp;
            <FaAws id="icon" />*/}
            &nbsp;&nbsp;&nbsp;
            <SiDocker id="icon"/>
            <div id="description-tech">
            <p className="mt-3" >Java, php, React, Bootstrap, AWS, Docker</p>
            </div>

          </div>

        </div>
      </div>
    </div>


  );
}
