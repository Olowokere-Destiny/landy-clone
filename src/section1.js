import React from "react";
import "./section1.css";
import img1 from "./developer.png";

export default function Section1() {
    return (
        <div className="section-1">
            <div className="section-text">
                <h1>Landing page template for developers and startups</h1>
                <p>
                Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.
                </p>
                
                <div className="btn-flex">
                    <div className="btn dark-btn">Explore</div>
                    <div className="btn light-btn">Learn More</div>
                </div>
            </div>


            <div className="section-img">
                <img src={img1} alt="image" />
            </div>

        </div>
    )
}