// todo flesh this out
import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";
//temporary
import pfp from "../statics/pfp.jfif";
import post from "../statics/post.jfif";
function Post({ postData }) {
  return (
    <div>
      <PostHeader name="testName" pfp={pfp}></PostHeader>
      <img
        style={{
          borderColor: "#000000",
          borderRadius: "6px",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        width="50%"
        src={post}
      ></img>
      {/* <postActionBar></postActionBar>
      <ShortComments></ShortComments> */}
    </div>
  );
}

export default Post;
