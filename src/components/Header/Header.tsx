import React from "react";
import "./Header.css";

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <div className="header ">
        <h1>
          {" "}
          <span>&#10148; </span>
          {title}
        </h1>
      </div>
    </>
  );
};

export default Header;
