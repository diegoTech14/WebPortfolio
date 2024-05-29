
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
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import Marquee from 'react-fast-marquee'
import './about.css';


export function About({ t }) {
  const skills = {
    main: [],
    second: [
      <FaPhp id="icon" />,
      <FaCss3Alt id="icon"></FaCss3Alt>,
      <TiHtml5 id="icon"></TiHtml5>,
      <IoLogoJavascript id="icon"></IoLogoJavascript>,
      <FaWordpress id="icon"></FaWordpress>,
      <FaJava id="icon" />
    ]
  }
  return (
    <div id="about-container">
      <div id="about-me" className="shadow">
        <h3 className="fw-bold">{t("meAs")}</h3>
        <p className="mt-4" id="about-me-text">
          {t('meAsInfo')}
        </p>

        <p className="mt-4" id="tag-about">{t('meAsTag')}</p>
      </div>
      <div id="about-skills" className="about-skills">
        <div className="shadow" id="component">
          <h3 className="fw-bold">{t('aboutmeTitle')}</h3>
          <p>{t("im")} <span>Diego Duarte Fernández</span>, {t("whatIm")}
            {t("im")} {t("a")} <span>{t("proact")}</span>, <span>{t("kind")}</span> {t("and")} <span>{t("responsable")}</span> {t("person")} <span>{t("communication")}</span> {t("skills")} <span>{t("work")}</span>. {t("perfectionist")}
            {t("aboutSecondPart")}
          </p>
        </div>

        <div id="component" className="shadow">
          <div>
            <h3 className="fw-bold">{t("mainTech")}</h3>
            <p>{t("mainTechInfo")}
            </p>
            <DiNodejsSmall id="icon" />
            &nbsp;&nbsp;&nbsp;
            <SiMysql id="icon" />
            &nbsp;&nbsp;&nbsp;
            <DiPython id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaGithub id="icon" />
            &nbsp;&nbsp;&nbsp;
            <SiExpress id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaBootstrap id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaReact id="icon" />
            <></>
            <div id="description-tech">
              <p className="mt-3" >NodeJS, MySQL, Python, Git/Github, Express.js, Bootstrap, React</p>
            </div>
          </div>

        </div>

      </div>
      <h4 className="text-light pt-5 text-center">{t("other-technologies")}</h4>
      <Marquee autoFill pauseOnHover className="w-50" id="marquee">
        {skills.second.map((icon, i) => (
          <div className="p-4" key={i}>{icon}</div>
        ))}
      </Marquee>
    </div>
  );
}
