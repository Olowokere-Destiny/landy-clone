import React from "react";
import "./section4.css";
import rocket from "./rocket.png";

export default function Section4() {
    return (
        <div className="section-4">
            <div className="section-text">
                <h1>Ready made sections</h1>
                <p>
                Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.
                </p>
            </div>

            <div className="section-img">
                <img src={rocket} alt="image" />
            </div>
        </div>
    )
}