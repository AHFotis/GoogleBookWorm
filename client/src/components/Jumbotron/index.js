import React from "react";
import "./styles.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 450, clear: "both", paddingTop: 170, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
