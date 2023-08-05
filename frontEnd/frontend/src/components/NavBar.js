import React, { useState, useEffect } from "react";
import "boxicons";
import "../App.css";
import logo from "../statics/logo2.png";

export default function NavBar() {
  return (
    <div className="navFlex">
      <img width="50px" src={logo}></img>

      <box-icon name="home-circle"></box-icon>
      <box-icon name="search"></box-icon>
      <box-icon name="plus"></box-icon>
      <box-icon name="heart"></box-icon>
      <box-icon name="chat"></box-icon>
    </div>
  );
}
