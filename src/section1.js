import React from "react";
import "./section1.css";
import img1 from "./developer.svg";

export default function Section1() {
    return (
        <div className="section-1">
            <div className="section-text">
                <h1>Landing page template for developers and startups</h1>
                <p>
                Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.
                </p>
                 
                <div className="btn-flex">
                    <button className="btn dark-btn">Explore</button>
                    <button className="btn light-btn">Learn More</button>
                </div>
            </div>


            <div className="section-img">
                <img src={img1} alt="pic" />
            </div>

        </div>
    )
}