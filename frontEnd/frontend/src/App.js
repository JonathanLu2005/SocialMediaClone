import "./App.css";
import BackendTest from "./components/BackendTest.js";
import NavBar from "./components/NavBar";
import PostPage from "./PostPage";
import Post from "./components/Post";
import SignUp from "./SignUp.js";

function App() {
  return (
    <div className="App">
      <div class="nav-content-holder">
        <div style={{ flex: "3" }}>
          <NavBar></NavBar>
        </div>
        <div style={{ flex: "25" }}>
          {/*<PostPage></PostPage>*/}
          <SignUp></SignUp>
          {/* <Post></Post> */}
        </div>
      </div>
      {/* <div style={{ height: "5px" }}>
        <BackendTest></BackendTest>
        <p style={{}}>im only here for backend debugging</p>
      </div> */}
    </div>
  );
}

export default App;
