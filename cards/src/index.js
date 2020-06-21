import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './App';
import * as serviceWorker from './serviceWorker';

const image = 'img/1.jpg';
const text = 'Подпись к картинке';
const link = 'http://www.google.com'

ReactDOM.render(
  <React.StrictMode>
    <Card image={image} text={text}>
      <h5 className="card-title">Заголовок</h5>
      <p className="card-text">Текст</p>
      <a href={link} className="btn btn-primary">Ссылка</a>
    </Card> 
  </React.StrictMode>,
  document.getElementById('root')
);
