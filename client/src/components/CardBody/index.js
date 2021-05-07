import React from "react";
import "./styles.css";


function CardBody(props) {
  return (
    <div key={props.id}>

      <div className="title-author">
          <h2 className="title">{props.title}</h2>

          { props.authors ? (<h5 className="authors">{props.authors}</h5>) : ""}
      </div>
      <div className="image-description">
          { props.image ? (<img className="card-img" src={props.image} alt="book thumbnail" />) : "" }

          { props.description ? (<p className="description">{props.description}</p>) : ""}
      </div>

      </div>
  );
}

export default CardBody;