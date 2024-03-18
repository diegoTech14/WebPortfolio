
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


export function About({t}) {

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
            {/*&nbsp;&nbsp;&nbsp;
            <SiMongodb id="icon"/>*/}
            &nbsp;&nbsp;&nbsp;
            <FaGithub id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaBootstrap id="icon" />


            <div id="description-tech">
              <p className="mt-3" >NodeJS, MySQL, Python, Git/Github, Bootstrap</p>
            </div>
          </div>

        </div>
        <div id="component" className="shadow">
          <div>
            <h3 className="fw-bold">{t("otherTech")}</h3>
            <p>
              {t("otherTechInfo")}
            </p>
            <FaJava id="icon" />
            &nbsp;&nbsp;&nbsp;
            <FaPhp id="icon" />
            {/*&nbsp;&nbsp;&nbsp;
            <FaAws id="icon" />
            &nbsp;&nbsp;&nbsp;
            <SiDocker id="icon" />*/}
            &nbsp;&nbsp;&nbsp;
            <FaReact id="icon" />
            <div id="description-tech">
              <p className="mt-3" >Java, php, Docker, React</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
