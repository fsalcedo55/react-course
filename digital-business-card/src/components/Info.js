import React from "react";
import photo from "../images/IMG_7063.jpg";

export default function Info() {
  return (
    <div className="info">
      <img className="photo" src={photo} width="317" alt="profile" />
      <div className="bottom-info">
        <h2 className="name">Fernando Salcedo</h2>
        <h4 className="occupation">Frontend Developer</h4>
        <p className="email">fsalcedo55@hotmail.com</p>
        <div className="buttons-div">
          <span>
            <button className="button">Email</button>
          </span>
          <span>
            <button className="button">LinkedIn</button>
          </span>
        </div>
      </div>
    </div>
  );
}
