import React from "react"
import './badges.css'
export function Badges({t}) {
    return (
        <div id="container-badges">
            <div id="title-projects">
                <h1>{t("badgesTitle")}</h1>
                <p>{t("badgesSubtitle")}</p>
            </div>
            <div id="cert">
                <div id="badge">
                    <img src="./python.png" alt="" />
                </div>
                <div id="info-badge">
                    <h1>{t("pyTitle")}</h1>
                    <h5>{t("pyIssued")}</h5>
                    <p>
                        {t("pyInfo")}
                    </p>
                </div>
            </div>
            <div id="cert">
                <div id="badge">
                    <img src="./ciber.png" alt="" />
                </div>
                <div id="info-badge">
                    <h1>{t("ciberTitle")}</h1>
                    <h5>{t("ciberIssued")}</h5>
                    <p>
                        {t("ciberInfo")}
                    </p>
                </div>
            </div>
        </div>
    )
}