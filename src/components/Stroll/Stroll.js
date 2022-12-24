import React from "react";

import "./Stroll.css";

function Stroll({ index, src, text }) {
  return (
    <div className="Stroll">
      <p className="Stroll__index">{index}</p>
      <img src={src} alt="SPY-img" />
      <p className="Stroll__text">{text}</p>
    </div>
  );
}

export default Stroll;
