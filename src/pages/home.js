import React from "react";
import '../styles/home.css';
import myImage from "../images/me.jpeg";

export default function Home() {
    return (
        <div>
            <div>
                <h1>Hello, I am Nicholaus Fleming</h1>
                <p>I'm currently a software engineer intern</p>
                <img src={myImage} alt="me" class="myImage"/>
            </div>
            <div>
                <h1>Companies I have worked at</h1>
                <p>Bay Valley Tech</p>
            </div>
        </div>
        )
}