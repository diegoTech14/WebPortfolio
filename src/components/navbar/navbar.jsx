import './navbar.css';
import i18n from '../../i18n.js';
import { LuLanguages } from "react-icons/lu";

export function Navbar({t, changeLanguage}) {
  return (

    <nav className="navbar navbar-expand-lg fixed-top " id="navbar" data-bs-theme="dark">
      <div className="container-fluid">
        &nbsp;
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <a className="navbar-brand" href="#header">
            <img src="/me1.jpg" alt="" id="meImg" />
            &nbsp;&nbsp;Diego Duarte Fernández
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" id="item">
              <a className="nav-link" href="#header">{t("Home")}</a>
            </li>
            <li className="nav-item" id="item">
              <a className="nav-link" href="#about-container">{t("About-me")}</a>
            </li>

            <li className="nav-item" id="item">
              <a className="nav-link" href="#container-badges">{t("Badges")}</a>
            </li>
            <li className="nav-item" id="item">
              <a className="nav-link" href="#projects">{t("Projects")}</a>
            </li>
            <li className="nav-item" id="item">
              <a className="nav-link" href="#container-references">{t("references")}</a>
            </li>
            <li className="nav-item" id="item">
              <a className="nav-link" href="#contact-container">{t("Contact-me")}</a>
            </li>

            <li className="nav-item dropdown dropstart">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <LuLanguages />
              </a>
              <ul className="dropdown-menu dropdown-menu-lg-start" aria-labelledby="navbarDropdown">
                <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>

                  <img src="./flagEnglish.png" alt="" id="flag" /> {t("English")}
                </button></li>
                <li><button className="dropdown-item" onClick={() => changeLanguage('es')}>
                  <img src="./flagSpain.png" alt="" id="flag" /> {t("Spain")}
                </button></li>
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>



  )
}