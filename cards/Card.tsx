import React from "react";
import { VscPassFilled } from "react-icons/vsc";

export default function Card(props) {
  return (
    <div className="card">
      <div className="icon"><VscPassFilled /></div>
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
    </div>
  );
};