import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-divs">
                <h3>Contact</h3>
                <p>Tell Us Everything</p>
                <p className="small">Do you have any question? Feel free to reach out.</p>
            </div>

            <div className="footer-divs">
                <h3>Policy</h3>
                <p>Application Security</p>
                <p>Software Principles</p>
            </div>

            <div className="footer-divs">
                <h3>Address</h3>
                <p className="">
                Rancho Santa Margarita
                2131 Elk Street
                California
                </p>
            </div>

            <div className="footer-divs">
                <h3>Company</h3>
                <ul className="link-list">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Press</li>
                </ul>
            </div>
        </div>
    )
}