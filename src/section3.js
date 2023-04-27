import React from "react";
import "./section3.css";
import graph from "./developer-graph.svg";
import leftNote from "./notes-1.svg";
import rightNote from "./notes-2.svg";

export default function Section3() {
    return (
        <div className="section-3">
            <div className="section-img">
                <img src={graph} alt="pic" />
            </div>
            <div className="section-text">
                <h1>Light, fast & responsive</h1>
                <p>
                This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.
                </p>
                <div className="notes">
                    <div>
                        <img src={leftNote} alt="note" />
                        <p className="head">WHY ANTD?</p>
                        <p className="body">
                        Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.
                        </p>
                    </div>
                    <div>
                        <img src={rightNote} alt="note" />
                        <p className="head">WHY STYLED-COMPONENTS?</p>
                        <p className="body">
                        Styled Components gives you total control over your components.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}