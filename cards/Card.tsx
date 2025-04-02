import React from "react";


export default function Card(props) {
  return (
    <div className="card">
      <div className="icon">{props.icon}</div>
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
    </div>
  );
};