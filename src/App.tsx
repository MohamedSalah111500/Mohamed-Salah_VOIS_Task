import React, { useState } from "react";
import "./App.css";
import DarkMode from "./components/darkmode/DarkMode";
import { ScreenTow, ScreenOne, ScreenThree } from "./Screens";

import { GlobalState } from "./redux/types";
import { getDarkMode } from "./redux/selectors";
import { connect } from "react-redux";

interface AppProps {
  darkMode: boolean;
}

function mapStateToProps(state: GlobalState): AppProps {
  return {
    darkMode: getDarkMode(state),
  };
}

function App(props: AppProps) {
  const [screenNum, setScreenNum] = useState("ScreenOne");
  function renderScreens(ScreenNum: string) {
    switch (ScreenNum) {
      case "ScreenOne":
        return (
          <ScreenOne
            setScreenNum={(ScreenNum) => setScreenNumHandler(ScreenNum)}
          />
        );
      case "ScreenTow":
        return (
          <ScreenTow
            setScreenNum={(ScreenNum) => setScreenNumHandler(ScreenNum)}
          />
        );
      case "ScreenThree":
        return (
          <ScreenThree
            setScreenNum={(ScreenNum) => setScreenNumHandler(ScreenNum)}
          />
        );
      default:
        return (
          <ScreenOne
            setScreenNum={(ScreenNum) => setScreenNumHandler(ScreenNum)}
          />
        );
    }
  }

  const setScreenNumHandler = (ScreenNum: string) => setScreenNum(ScreenNum) ;

  return (
    <div className={`app ${props.darkMode ? "app--dark-mode" : ""}`}>
      <DarkMode />
      {renderScreens(screenNum)}
    </div>
  );
}

export default connect(mapStateToProps)(App);
