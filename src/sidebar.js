import React from "react";
import "./sidebar.css";

export default function SideBar(props) {    
    const styling = props.state ? "0" : "-200%";
    return (
            <div>
                <i 
                    className="fa-solid fa-bars"
                    id="open"
                    onClick={props.toggle}
                >

                </i>
                <div className="menu-bar" id="menu" style={{right: styling}}>
                    <div className="header">
                        <h2>Menu</h2>
                    </div>
                    <div className="menu-body">
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Product</li>
                        </ul>

                        <div className="cont">Contact</div>
                    </div>
                </div>
            </div>
    )
}