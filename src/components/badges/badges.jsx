import React from "react"
import './badges.css'
export function Badges({t}) {
    return (
        <div id="container-badges">
            <div id="title-projects">
                <h1>{t("badgesTitle")}</h1>
            </div>
            <div id="cert">
                <div id="badge">
                    <img src="./python.png" alt="" />
                </div>
                <div id="info-badge">
                    <h2>{t("pyTitle")}</h2>
                    <h5 id="issued">{t("pyIssued")}</h5>
                    <p>
                        {t("pyInfo")}
                    </p>
                </div>
            </div>
            <hr />
            <div id="cert">
                <div id="badge">
                    <img src="./ciber.png" alt="" />
                </div>
                <div id="info-badge">
                    <h2>{t("ciberTitle")}</h2>
                    <h5 id="issued">{t("ciberIssued")}</h5>
                    <p>
                        {t("ciberInfo")}
                    </p>
                </div>
            </div>
        </div>
    )
}