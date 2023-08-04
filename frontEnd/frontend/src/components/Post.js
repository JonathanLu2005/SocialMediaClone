// todo flesh this out
import React, { useState, useEffect } from "react";
function Post({ postID }) {
  return (
    <div>
      <PostHeader></PostHeader>
      <img></img>
      <postActionBar></postActionBar>
      <ShortComments></ShortComments>
    </div>
  );
}

export default Post;
