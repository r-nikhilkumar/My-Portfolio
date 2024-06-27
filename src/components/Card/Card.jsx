import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color, link}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={link??"#"} className="c-button" target="_blank">LEARN MORE</a>
    </div>
  );
};

export default Card;
