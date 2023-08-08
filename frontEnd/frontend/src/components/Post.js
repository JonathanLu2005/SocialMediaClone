// todo flesh this out
import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";
import "../App.css";
//temporary
import pfp from "../statics/pfp.jfif";
import post from "../statics/post.jfif";
function Post({ postData }) {
  return (
    <div className="post" style={{ display: "flex", flexDirection: "column" }}>
      <PostHeader name="testName" pfp={pfp}></PostHeader>
      <img
        style={{
          display: "block",
          borderColor: "#000000",
          borderRadius: "6px",
          borderWidth: "1px",
          borderStyle: "solid",
          alt: "",
        }}
        // width="50%"
        src={post}
      ></img>
      {/* <postActionBar></postActionBar>
      <ShortComments></ShortComments> */}
    </div>
  );
}

export default Post;
