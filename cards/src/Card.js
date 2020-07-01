import React from 'react';
import './App.css';

function Card(props) {
  const {image, picText} = props;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={picText} />
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
}

export default Card;