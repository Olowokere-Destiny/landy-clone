import React from "react";
import "./section5.css";
import dev from "./waving.png";

export default function Section5() {
    return (
        <div className="section-5">
            <div className="section-img">
                <img src={dev} alt="image" />
            </div>

            <div className="section-text">
                <h1>That's about it!</h1>
                <p>
                If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions. 
                </p>
            </div>
        </div>
    )
}