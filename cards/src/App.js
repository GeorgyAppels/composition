import React from 'react';
import logo from './logo.svg';
import './App.css';

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.text} />
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
