import React from "react";
import './references.css';
import { MdEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

export function References() {
    const content = [{
        name: "Mariana Rivas Villatoro",
        grade: "Msc.",
        position: "Informatic Business career Coordinator",
        company: "UCR",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        email: "villatoro@gmail.com",
        date: "07/03/2024"
    }, {
        name: "Mariana Rivas Villatoro",
        grade: "Msc.",
        position: "Informatic Business career Coordinator",
        company: "UCR",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        email: "villatoro@gmail.com",
        date: "07/03/2024"
    }]

    return (
        <>
            <div id="title-projects">
                <h1>
                    Professional References
                </h1>
                <p>
                    In this section, I share opinions from colleagues, and supervisors who have been part of my professional career <br/>
                    these references provide a more complete view about my work performance, skills and contributions in different projects and roles
                </p>
            </div>

            <div className="d-flex justify-content-center">

                <div id="carouselExample2" class="carousel slide carousel-white ">
                    <div className="carousel-inner">
                        {content.map((reference, index) => (
                            <div className={"carousel-item" + (index === 0 ? " active" : "") + ""} key={index}>
                                <div className="card mb-3 mt-3" id="card">
                                    <div className="card-header border-light">
                                        <h3><span>{reference.grade} </span>{reference.name}</h3>
                                        <h5>{reference.position}{reference.company}</h5>
                                    </div>
                                    <div className="card-body text-light">
                                        <p className="card-text">
                                            {reference.content}
                                        </p>
                                    </div>
                                    <div className="card-footer bg-transparent" id="footer">
                                        <div><MdEmail id="iconRef" />{reference.email}</div>
                                        <div><MdDateRange id="iconRef" />{reference.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}