import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import img from "./statics/pfp.jfif";
export default function PostPage() {
  {
    /* todo work out a way of centering posts */
  }

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Post style={{}}></Post>
      <Post></Post>
      {/* <div style={{ flex: 1, paddingBottom: "100px" }}>
        <Post></Post>
      </div> */}
      {/* <img src={img}></img>
      <img src={img}></img> */}

      <div></div>
    </div>
  );
}
