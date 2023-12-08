import React from "react";
import "./components/header/Header";
import "./styles/global.scss";
import "./components/header/header.scss";
import Header from "./components/header/Header.jsx";
import Main from "./screens/mainScreen/Main.jsx";
import "./screens/mainScreen/main.scss";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Main />
        <About />
      </>
    </div>
  );
};

export default App;
