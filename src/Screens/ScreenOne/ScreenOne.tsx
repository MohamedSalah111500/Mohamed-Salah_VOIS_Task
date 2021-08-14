import React from "react";
import Button from "../../components/Button/Button";
import "./ScreenOne.css";

interface ScreenOneProps {
  setScreenNum: (ScreenNum: string) => void;
}

function ScreenOne({ setScreenNum }: ScreenOneProps) {
  return (
    <>
      <div className="ScreenOne-container">
        <Button clicked={() => setScreenNum("ScreenTow")} name="Start"></Button>
      </div>
    </>
  );
}

export default ScreenOne;
