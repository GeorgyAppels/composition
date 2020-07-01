import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const title = 'Заголовок';
const image = 'img/1.jpg';
const text = 'Текст';
const picText = 'Подпись к картинке';
const link = 'http://www.google.com';

ReactDOM.render(
  <React.StrictMode>
    <App image={image} text={text} link={link} title={title} picText={picText} />
  </React.StrictMode>,
  document.getElementById('root')
);
