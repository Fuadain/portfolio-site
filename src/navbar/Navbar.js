import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import './navbar.css';

export default function Navbar(){
  return (
      <nav className="Navbar">
            <img src={logo} className="nav--logo" alt="logo"/>
            <div className="nav--list">
                <Link to="/" className="nav--link">
                    Home
                </Link>
                <Link to="/work-experience" className="nav--link">
                    Experience
                </Link>
                <Link to="/projects" className="nav--link">
                    Projects
                </Link>
                <Link to="/contact" className="nav--link">
                    Contact
                </Link>
            </div>
      </nav>
  )
}