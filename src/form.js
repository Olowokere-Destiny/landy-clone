import React from "react";
import "./form.css";

export default function Form() {
    return (
        <div>
            <label htmlFor="name">Name</label><br />
            <input id="name" type="text" placeholder="Your Name"/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your Email"/>
            <label htmlFor="msg">Message</label>
            <textarea id="msg"placeholder="Your Message"/>

            <div className="submit">
                Submit
            </div>
        </div>
    )
}