import React from "react";
import './home.css';
import myImage from "../../images/gnb2.png";
import bayImage from "../../images/bayvalley.jpg"

export default function Home() {
    return (
        <div>
            <div className="home-me">
                <div className="home-me-desc">
                    <h1>Hello, I am Nicholaus Fleming</h1>
                    <p>I'm currently a software engineer intern</p>
                </div>
                <img src={myImage} alt="me" class="home-myImage"/>
            </div>
            <div className="home-companies">
                <h1>Companies I have worked at</h1>
                {/*Turn into component*/}
                <div className="home-companies-sec">
                    <img src={bayImage} className="home-companies-img"/>
                    <p>Bay Valley Tech</p>
                </div>
            </div>
        </div>
        )
}