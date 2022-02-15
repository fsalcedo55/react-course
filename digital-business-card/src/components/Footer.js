import React from "react";
import github from "../images/github-logo.png";
import twitter from "../images/twitter-logo.png";
import instagram from "../images/instagram-logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twitter} alt="bird-logo" className="logo" />
      <img src={instagram} alt="camera-logo" className="logo" />
      <img src={github} alt="cat-logo" className="logo" />
      <p>Copyright 2022</p>
    </div>
  );
}
