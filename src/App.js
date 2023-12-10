import React from "react";
import "./components/header/Header";
import "./styles/global.scss";
import "./components/header/header.scss";
import Header from "./components/header/Header.jsx";
import Main from "./screens/mainScreen/Main.jsx";
import "./screens/mainScreen/main.scss";
import About from "./screens/About/About.jsx";
import "./screens/About/about.scss";
import Introduction from "./screens/Introduction/Introduction";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Main />
        <About />
        <Introduction />
      </>
    </div>
  );
};

export default App;
