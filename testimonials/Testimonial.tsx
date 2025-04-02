import React from "react";

export default function Testimonial(props) {
  if (props.img) {
    return (
      <div className="img-testimonial">
        <img className="img" src={props.img} alt="" />
        <div className="container" >
          <img className="comma" src={props.comma} alt="" />
          <p className="img-text">{props.text}</p>
          <span className="img-name">{props.name}</span>
          <span className="img-role">{props.role}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="testimonial">
        <img className="logo" src={props.logo} alt="" />
        <p className="text">{props.text}</p>
        <div className="cite">
          <span className="name">{props.name}</span>
          <img className="divider" src={props.divider} alt="" />
          <span className="role">{props.role}</span>
        </div>
      </div>
    );
  }
};