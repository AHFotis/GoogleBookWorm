import React from "react";

function SaveBtn(props) {
  // console.log(props);
  return (
      <button className="save-btn btn btn-info" tabIndex="0" onClick={() => props.handleBookSave(props.bookData)} style={{ float: "right", marginBottom: 10 }}>
        {props.children} 
      </button>
  );
}

export default SaveBtn;