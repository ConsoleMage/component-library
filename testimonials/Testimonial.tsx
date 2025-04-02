import React from "react";

export default function Testimonial(props) {
  return (
    <div className="testimonial">
      <img className="logo" src={props.logo} alt="" />
      <p className="text">{props.text}</p>
    </div>
  );
};