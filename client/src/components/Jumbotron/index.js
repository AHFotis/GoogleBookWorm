import React from "react";
import "./styles.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 500, clear: "both", paddingTop: 220, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
