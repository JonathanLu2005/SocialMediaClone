import "./App.css";
import BackendTest from "./components/BackendTest.js";
import NavBar from "./components/NavBar";
import PostPage from "./PostPage";
function App() {
  return (
    <div className="App">
      <h1>hello world!</h1>
      <BackendTest></BackendTest>
      <div class="nav-content-holder">
        <div style={{ flex: "1" }}>
          <NavBar></NavBar>
        </div>
        <div style={{ flex: "20" }}>
          <PostPage></PostPage>
        </div>
      </div>
    </div>
  );
}

export default App;
