import React from "react";

export default function Testimonial(props) {
  return (
    <div className="testimonial">
      <img className="logo" src={props.logo} alt="" />
      <p className="text">{props.text}</p>
      <div className="cite">
        <span className="name">{props.name}</span>
        <img className="divider" src={props.divider} alt=""/>
        <span className="position">{props.position}</span>
      </div>
    </div>
  );
};