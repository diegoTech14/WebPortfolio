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
import Project from './individualProject';
import React from 'react';



export function Projects() {
  const projectsObjects = [
    {
      title: "Green Cubes HCI Project",
      description: "Green Cubes is a Human Computer Interaction project for communicate to people the consequences of the natural exploitation, this project was a main idea for the first SIGCHI in Costa Rica and still under development for the next level.",
      link: "",
      textLink: "",
      img: "/greenCubes.png",
      icon: [<FaJava id="iconP" />, <SiArduino id="iconP" />]
    },
    {
      title: "Inventory System for Funkos",
      description: "This is a college project in wich we can manage inventory of a Funko's Shopping Cart. This project was created building and API and a frontend client with Angular.",
      link: "https://github.com/diegoTech14/funkoCommerce",
      textLink: "View Code",
      img: "/funko.png",
      icon: [<FaAngular id="iconP" />,
      <SiMysql id="iconP" />,
      <FaPhp id="iconP" />,
      <FaBootstrap id="iconP" />
      ]
    },
    {
      title: "Gandoca Tours Web Page",
      description: "This is a web app made in Wordpress and my role in this project was support the page, fix some errors and create new content and sections.",
      link: "https://www.gandocatours.com/",
      textLink: "Visit Page",
      img: "/gandoca.png",
      icon: [<FaWordpress id="iconP" />]
    },

  ]


  return (
    <div id="projects">
      <div id="title-projects">
        <h1>Fetured Projects</h1>
        <p>I had have the experience of creating real solutions for pymes, <br />
          I have also created some personal and academic projects that I am proud of them</p>
      </div>

      <div id="carouselExample" class="carousel slide carousel-white">
        <div class="carousel-inner">
          {projectsObjects.map((project, index) => (
            <React.Fragment key={index}>
              <div class={"carousel-item" + (index === 0 ? " active" : "")} key={index}>

                <Project content={project}></Project>
              </div>
            </React.Fragment>
          ))}

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
          <p>I feel very happy to be part of good experiences in which I colaborated with other colleagues through interacting or executing
            differents projects
          </p>
        </div>
        <div id="block-experiences">
          <div id="drupal-ex" className='shadow drupal-ex'>
            <div className='mt-5'>
              <h2>Drupal Camp 2023</h2>
              <p>The first time of Drupal Camp at UCR sede del Caribe learning about Drupal and being staff.</p>
            </div>
          </div>
          <div id="sigchi-ex" className='shadow chi-ex'>
            <div className='mt-5'>
              <h2>SIGCHI Costa Rica 2023</h2>
              <p>A different experience learning about emerging technology and creating a solution to a enviromental problem.
                I'm proud to share that my team and me won first place of this event. 🏆
              </p>
            </div>
          </div>
          <div id="pytuthor-ex" className='shadow chi-ex'>
            <div className='mt-5'>
              <h2>Python Tuthor</h2>
              <p>I have one year of experience helping TEC, UCR, Fidelitas students with their Python questions. 
                This was a great experience because I learned a lot about Python from supporting them. 🐍
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}