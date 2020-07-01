import React from 'react';
import './App.css';
import Card from './Card';

function App(props) {
  console.log(props);
  const {image, text, link, title, picText} = props;
  return (
    <Card image={image} picText={picText}>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={link} className="btn btn-primary">Ссылка</a>
    </Card>
  );
}

export default App;
