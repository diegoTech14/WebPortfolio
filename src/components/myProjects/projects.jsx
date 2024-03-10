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
import { VscGithub } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";


export function Projects({ t }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const projectsObjects = [
    {
      title: t("greenTitle"),
      description: t("greenDesc"),
      link: "https://github.com/diegoTech14/funkoCommerce",
      textLink: t("funkoLink"),
      img: "/map.jpg",
      icon: [<FaJava id="iconP" />, <SiArduino id="iconP" />]
    },
    {
      title: t("funkoTitle"),
      description: t("funkoDesc"),
      link: "https://github.com/diegoTech14/funkoCommerce",
      textLink: t("funkoLink"),
      img: "/funko2.png",
      icon: [<FaAngular id="iconP" />,
      <SiMysql id="iconP" />,
      <FaPhp id="iconP" />,
      <FaBootstrap id="iconP" />
      ]
    },
    {
      title: t("gandocaTitle"),
      description: t("gandocaDesc"),
      link: "https://www.gandocatours.com/",
      textLink: t("gandocaLink"),
      img: "/gandoca2.png",
      icon: [<FaWordpress id="iconP" />]
    }
  ]


  return (
    <div id="projects">
      <div id="title-projects">
        <h1>{t("projectTitle")}</h1>
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projectsObjects.map((project, index) => (
            <React.Fragment key={index}>
              <div className={"carousel-item" + (index === 0 ? " active" : "")} key={index}>
                <Project content={project} ></Project>
              </div>
            </React.Fragment>
          ))}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>


      <div id="experiences" className='pt-2 pb-5'>
        <div id="title-projects">
          <h1>
            {t("experiencesTitle")}
          </h1>

        </div>
        
        <div id="block-experiences">
          <div id="drupal-ex" className='shadow drupal-ex'>
            <div className='mt-5'>
              <h2>{t("drupalTitle")}</h2>
              <p>{t("drupalInfo")}</p>
            </div>
          </div>
          <div id="sigchi-ex" className='shadow chi-ex'>
            <div className='mt-5'>
              <h2>{t("sigchiTitle")}</h2>
              <p>
                {t("sigchiInfo")}
              </p>
              <a href="https://www.facebook.com/ucrcaribe/posts/574701894690734?ref=embed_post">
                See it here <FaExternalLinkAlt /></a>
            </div>
          </div>
          <div id="pytuthor-ex" className='shadow chi-ex'>
            <div className='mt-5'>
              <h2>{t("pythonTutorTitle")}</h2>
              <p>
                {t("pythonTuthorInfo")}
              </p>
            </div>
          </div>
          </div>
      </div>

    </div>
  )
}