import React from "react";
import { VscGithub } from "react-icons/vsc";
export default function Project(content) {
    return ( 
        <div id="project">
            <div id="individualProject" >
                <div id="insideProject">
                    <div id="projectImg">
                        <img src={content.content.img} alt="" />
                    </div>
                    <div id="pDesc">
                        <h2>{content.content.title}</h2>
                        <p>{content.content.description}

                        </p>
                        <div>
                            {
                                content.content.icon.map((icon, index) => (
                                    <React.Fragment key={index}>
                                        {icon}
                                        &nbsp;&nbsp;&nbsp;
                                    </React.Fragment>
                                ))
                            }
                        </div>
                        {(content.content.link != "") ? <a href={content.content.link} target='_blank' className='fw-bold' id="hyperlinkWeb">
                            <button type="button" id="buttonProject"><VscGithub style={{fontSize:22}}></VscGithub> {content.content.textLink}</button>
                        </a> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}
