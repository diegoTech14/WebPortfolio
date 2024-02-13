import './myProjects.css';
import { SiArduino } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
export function Projects() {
  return (
    <div id="projects">
      <div id="title-projects">
        <h1>Fetured Projects</h1>
        <p>I had have the experience of building or contributing to some real projects with real clients and <br />
          I have also created some personal and academic projects that I am proud of them</p>
      </div>

      <div id="carouselExample" class="carousel slide carousel-dark">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div id="project" class="">
              <div class="" id="projectImg">
                <img src="/funko.png" alt="" />
              </div>
              <div class="pDesc">
                <h2>Inventory System for Funkos</h2>
                <p>This is a college project in wich we can manage inventory of a Funko's Shopping Cart. This project was created building and API and a frontend client with Angular.</p>
                <div className='mt-4'>
                
                <FaAngular id="iconP"/>
                &nbsp;&nbsp;&nbsp;
                <SiMysql id="iconP" />
                &nbsp;&nbsp;&nbsp;
                <FaPhp id="iconP" />
                &nbsp;&nbsp;&nbsp;
                <FaBootstrap  id="iconP" />
                </div>
                <a href="https://github.com/diegoTech14/funkoCommerce">
                <button type="button" class="ps-5 pe-5 pt-3 pb-3 mt-4 border-0" id="buttonProject">View Code</button>
                </a>
                
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="project" class="">
              <div class="" id="projectImg">
                <img src="/gandoca.png" alt="" />
              </div>
              <div class="pDesc">
                <h2>Gandoca Tours Web Page</h2>
                <p>This is a web app made in Wordpress and my role in this project was support the page, fix some errors and create new content and sections.
                  You can see it
                </p>
                <div>
                <FaWordpress id="iconP"/>
                </div>
                <a href="https://www.gandocatours.com/" target='_blank' className='fw-bold' id="hyperlinkWeb">
                  <button type="button" class="ps-5 pe-5 pt-3 pb-3 mt-4 border-0" id="buttonProject">Visit Page</button>
                </a>

              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="project" class="">
              <div class="" id="projectImgGreen">
                <img src="/greenCubes.png" alt="" />
              </div>
              <div class="pDesc">
                <h2>Green Cubes <span>HCI Project</span></h2>
                <p>Green Cubes is a Human Computer Interaction project for communicate to people the consequences of
                  the natural exploitation, this project was a main idea for the first SIGCHI in Costa Rica and still under development for the next level.
                  This Project is created with Java using Processing and Arduino.
                </p>
                <div>
                  <FaJava  id="iconP" />
                  &nbsp;&nbsp;
                  <SiArduino id="iconP"/>
                </div>


              </div>

            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="experiences" className='pt-2 pb-5'>
        <div id="title-projects">
          <h1>
            Featured Experiences
          </h1>
          <p>I feel very happy to be part of some good experiences throughout my career in which I gave my help to others,<br /> I networked and contributed with others in new projects.</p>
        </div>
        <div id="block-experiences">
          <div id="drupal-ex" className='shadow drupal-ex'>
            <div className='mt-5'>
              <h2>Drupal Camp 2023</h2>
              <p>The first time of Drupal Camp at UCR headquarters of the Caribbean learning about Drupal and being staff.</p>
            </div>
          </div>
          <div id="sigchi-ex" className='shadow chi-ex'>
            <div className='mt-5'>
              <h2>SIGCHI Costa Rica 2023</h2>
              <p>A different experience learning about emerging technology and creating a solution to a enviromental problem.
                I'm proud to announce that my team and I won first place of this event. 🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}