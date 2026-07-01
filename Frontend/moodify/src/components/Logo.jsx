import React from "react";
import logoImage from "../assets/Logo.png";
import "../Styles/Logo.css";

const logo = () => {
  return (
    <div className="w-[50%] ">
      <img src={logoImage} />
    </div>
  );
};

export default logo;
