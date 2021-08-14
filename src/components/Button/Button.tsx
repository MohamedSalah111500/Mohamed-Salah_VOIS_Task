import React, { ReactElement } from "react";
import "./Button.css";

interface ButtonProps {
  children?: ReactElement;
  clicked: () => void;
  name: string;
  theme?: string;
}

const Button = ({ children, clicked, name, theme }: ButtonProps) => {
  let classes;
  switch (theme) {
    case "primary":
      classes = "primary";
      break;
    case "submit":
      classes = "submit";
      break;

    default:
      classes = "primary";

      break;
  }

  return (
    <button className={`btnStyle ${classes}`} onClick={clicked}>
      {name} {children}
    </button>
  );
};

export default Button;
