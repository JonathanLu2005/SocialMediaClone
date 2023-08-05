import React from "react";
import "../App.css";
export default function Pfp({ pfp, width }) {
  return (
    <img width={width} height={width} className="circular-pfp" src={pfp}></img>
  );
}
