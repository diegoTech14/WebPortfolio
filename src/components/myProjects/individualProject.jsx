import React from "react";

export default function Project(content) {
    
    return (
        <div id="project">
            <div class="" id="projectImg">
                <img src={content.content.img} alt="" />
            </div>
            <div class="pDesc">
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
                    <button type="button" class="ps-5 pe-5 pt-3 pb-3 mt-4 border-0" id="buttonProject">{content.content.textLink}</button>
                </a> : <></>}


            </div>
        </div>
    )
}
