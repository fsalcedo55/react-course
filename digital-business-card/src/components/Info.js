import React from "react";
import photo from "../images/IMG_7063.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={photo} width="300" alt="profile" />
      <h2 className="name">Fernando Salcedo</h2>
      <h4 className="occupation">Frontend Developer</h4>
      <p className="email">fsalcedo55@hotmail.com</p>
      <div>
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}
