import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./assets/resume.css";
import { ChromeReaderModeOutlined } from "@mui/icons-material";
import logo from "../../assets/logolight.png";

const ResumeTopbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`topbar ${isScrolled ? "fixed" : ""}`}>
      <Link to="/Dashboard" className="topbarLogo">
        <img className="heroLogo" src={logo} alt="" />
      </Link>
      <div className="userDash">
        <Link to="/Dashboard" className="userResumePick">
          Pick Another Template <ChromeReaderModeOutlined />
        </Link>
        <button className="userResume">Resume</button>
        <Link to="/" className="userResume">
          Logout
        </Link>
        <img
          className="userDashImg"
          src="https://images.unsplash.com/photo-1649532355244-e011eebe7a81?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default ResumeTopbar;
