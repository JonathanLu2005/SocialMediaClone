// import "./App.css";
// import BackendTest from "./components/BackendTest.js";
// import NavBar from "./components/NavBar";
// import PostPage from "./PostPage";
// import Post from "./components/Post";
// import React, { useState } from "react";

// function App() {
//   const [toRender, setToRender] = useState({ main: <PostPage />, modal: null });
//   return (
//     <div className="App">
//       <div class="nav-content-holder">
//         <div style={{ flex: "3" }}>
//           <NavBar setToRender={setToRender}></NavBar>
//         </div>
//         <div style={{ flex: "25" }}>
//           {toRender.main}
//           {toRender.modal}
//           {/* <Post></Post> */}
//         </div>
//       </div>
//       {/* <div style={{ height: "5px" }}>
//         <BackendTest></BackendTest>
//         <p style={{}}>im only here for backend debugging</p>
//       </div> */}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PostPage from "./PostPage";
import SignUp from "./SignUp.js";

function App() {
  const [toRender, setToRender] = useState({
    main: <PostPage />,
    modal: null, // Initialize modal content as null
  });

  // Function to update modal content and optionally main content
  const updateRender = (modalContent, mainContent = null) => {
    setToRender({
      main: mainContent !== null ? mainContent : toRender.main,
      modal: modalContent,
    });
  };

  return (
    <div className="App">
      <div className="nav-content-holder">
        <div style={{ flex: "3" }}>
          <NavBar updateRender={updateRender} />
        </div>
        <div style={{ flex: "25" }}>
          {/*<PostPage></PostPage>*/}
          <SignUp></SignUp>
          {/* <Post></Post> */}
        </div>
      </div>
    </div>
  );
}

export default App;
