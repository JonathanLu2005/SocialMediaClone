// import React, { useState, useEffect } from "react";
// import "boxicons";
// import "../App.css";
// import logo from "../statics/logo2.png";
import PostPage from "../PostPage";
// import CreatePostModal from "./CreatePostModal";

// export default function NavBar({ setToRender }) {
//   return (
//     <div className="navFlex">
//       <img width="50px" src={logo}></img>

//       <box-icon
//         name="home-circle"
//         onClick={() => setToRender(<postPage />)}
//       ></box-icon>
//       <box-icon name="search"></box-icon>
//       <box-icon
//         name="plus"
//         onClick={() => setToRender(<CreatePostModal />)}
//       ></box-icon>
//       <box-icon name="heart"></box-icon>
//       <box-icon name="chat"></box-icon>
//     </div>
//   );
// }

import React from "react";
import "boxicons";
import "../App.css";
import logo from "../statics/logo2.png";
import Modal from "./Modal";
import CreatePostModal from "./CreatePostModal";
export default function NavBar({ updateRender }) {
  return (
    <div className="navFlex">
      <img width="50px" src={logo} alt="Logo" />

      <box-icon
        name="home-circle"
        onClick={() => updateRender(null, <PostPage />)}
      ></box-icon>
      <box-icon name="search"></box-icon>
      <box-icon
        name="plus"
        onClick={() =>
          updateRender(
            <Modal Page={CreatePostModal} closeModal={updateRender} />
          )
        }
      ></box-icon>
      <box-icon name="heart"></box-icon>
      <box-icon name="chat"></box-icon>
    </div>
  );
}
