import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
export default function PostPage() {
  {
    /* todo work out a way of centering posts */
  }

  return (
    <div
      class="postPageGrid"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post></Post>
      <div></div>
    </div>
  );
}
