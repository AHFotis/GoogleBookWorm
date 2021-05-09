
import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button className="delete-btn btn btn-dark" tabIndex="0" onClick={() => props.handleDeleteSubmit(props.id)} style={{ float: "right", marginBottom: 10 }}>Delete <i className="fa fa-trash"></i>
      {props.children}
    </button>
  );
}

export default DeleteBtn;
