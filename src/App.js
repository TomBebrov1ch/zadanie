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
import Advant from "./screens/Advant/Advant.jsx";
import Implement from "./screens/Implement/Implement.jsx";
import Results from "./screens/Results/Results.jsx";
import RoadMap from "./screens/RoadMap/RoadMap";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Main />
        <About />
        <Introduction />
        <Advant />
        <Implement />
        <Results />
        <RoadMap />
      </>
    </div>
  );
};

export default App;
