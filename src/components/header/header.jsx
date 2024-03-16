import './header.css'
import { TypeAnimation } from 'react-type-animation';
import { SiCredly } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import React, { useEffect, useState } from 'react';

export function Header({t, lngCv}) {

    const [cv, setCv] = useState('/cv.pdf');
    useEffect(() => {
        (lngCv === 0) ? setCv('/cv.pdf') : setCv('/cvE.pdf')
    }, [lngCv]);

    return (
        <header id="header">
            <div id="fast-presentation">
                <div id="text">
                    <div id="text-animated">
                        <h2>{t("greeting")}, <br></br> {t("me")}</h2>
                        <TypeAnimation
                            sequence={[
                                t("rol"),
                                1500
                            ]}
                            wrapper="span"
                            speed={20}

                            style={{ fontSize: '30px', color: "#12AB7A", fontFamily: "Rubik"}}
                        />
                    </div>
                    <p>
                        {t("resume")}
                    </p>
                </div>

                <a className="fw-bold fs-5" href={cv} download={cv} aria-disabled="true">
                    <button type="button" id="cvButton">
                        {t("cv")}
                    </button>
                </a>
                
        <div id="personal">
          <div id="socialNetworks" >
            <div className='me-4'>
              <a href="https://www.linkedin.com/in/diego-duarte-fern%C3%A1ndez-165445180/"><GrLinkedin id="iconHeader" /></a>
            </div>
            <div className='me-4'>
              <a href="https://github.com/diegoTech14"><VscGithub id="iconHeader"/></a>
            </div>
            <div className=''>
              <a href="https://www.credly.com/users/diego-duarte-fernandez"><SiCredly id="iconHeader"/></a>
            </div>
            
          </div>

        </div>

            </div>
            <div id="img">
                <img className='img-fluid' src="/future3.png" alt="" />
            </div>
        </header>
    )
}