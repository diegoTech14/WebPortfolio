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
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Projects({ t }) {
  let settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true
  }
  const projectsObjects = [
    {
      title: t("greenTitle"),
      description: t("greenDesc"),
      link: "",
      textLink: "",
      img: "/greenCubes.png",
      icon: [<FaJava id="iconP" />, <SiArduino id="iconP" />]
    },
    {
      title: t("funkoTitle"),
      description: t("funkoDesc"),
      link: "https://github.com/diegoTech14/funkoCommerce",
      textLink: t("funkoLink"),
      img: "/funko.png",
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
      img: "/gandoca.png",
      icon: [<FaWordpress id="iconP" />]
    },

  ]


  return (
    <div id="projects">
      <div id="title-projects">
        <h1>{t("projectTitle")}</h1>

      </div>

      <div id="slider">
        <Slider {...settings} >
          {projectsObjects.map((project, index) => (
          <React.Fragment key={index}>
            <div key={index}>
              <Project content={project}></Project>
            </div>
          </React.Fragment>
        ))}
        </Slider>
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