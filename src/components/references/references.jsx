import React from "react";
import './references.css';
import { MdAttachEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export function References({t}) {
    const content = [{
        name: "Mariana Rivas Villatoro",
        grade: t("mariGrade"),
        position: t("mariPosition"),
        company: "Universidad de Costa Rica",
        email: "villatoro@gmail.com",
        day: "Feb",
        month: "2024"
    }, {
        name: "Daniel Calderón Díaz",
        grade: t("danielGrade"),
        position: t("danielPosition"),
        company: "The Lifetime Value Company",
        email: "calde0601@gmail.com",
        day: "Mar",
        month: "2024"
    }]

    return (
        <>
            <div className="container" id="container-references">
                <div id="title-projects">
                    <h1>
                        {t("referenceTitle")}
                    </h1>
                    <p>
                        {t("referenceSubTitle")}
                        {t("referenceSubTitleTwo")}<br />
                        
                    </p>
                </div>
                <div id="references">
                    {content.map((reference, index) => (
                        <div id="card" key={index} className="shadow">
                            <div id="header-card">
                                <div id="date">
                                    <div><h4>{reference.day}</h4></div>
                                    <div><h4>{reference.month}</h4></div>
                                </div>
                                <div>
                                    <h3>{reference.name}</h3>
                                    <h5>{reference.grade}</h5>
                                </div>
                            </div>
                            <div id="info-reference">
                                <div><FaBuilding /> {reference.company}</div>
                                <div><MdWork /> {reference.position}</div>
                                <div><MdAttachEmail /> {reference.email}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}