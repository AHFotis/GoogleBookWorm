import React from "react";
import "./styles.css"


function Card({ children }) {
  return (
    <div className="mainCard">{ children }</div>
  );
}

export default Card;