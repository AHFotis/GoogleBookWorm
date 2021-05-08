import React from "react";

function SaveBtn(props) {
  // console.log(props);
  return (
      <button className="save-btn btn btn-success" tabIndex="0" onClick={() => props.handleBookSave(props.bookData)} style={{ float: "right", marginBottom: 10, backgroundColor: "#d87093" }}>
        {props.children} 
      </button>
  );
}

export default SaveBtn;