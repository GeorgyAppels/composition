import React from 'react';
import './App.css';
import NewsBlock from './NewsBlock';
import ExchangeRates from './ExchangeRates';
import SearchForm from './SearchForm';
import Weather from './Weather';
import TvProgram from './TvProgram';

const news = [
  {text: "В квартире похитителя огурцов зацвёл исполинский кактус",
  link: 'http://www.yandex.ru'},
  {text: "Костромская область побила собственный рекорд по удою коз",
  link: 'http://www.yandex.ru'},
  {text: "Цена одного барреля нефти превысила проезд на троллейбусе",
  link: 'http://www.yandex.ru'},
  {text: "Китай запустил на Венеру носорога",
  link: 'http://www.yandex.ru'},
  {text: "Глава КПППРНРДВНадзора объявил об отставке",
  link: 'http://www.yandex.ru'}
];

const rates = [
  {currency: 'EUR', rate: 79.9},
  {currency: 'USD', rate: 70.1},
  {currency: 'GBP', rate: 88.5}
];

const weather = {state: 'rain', currentDegrees: 17, morningDegrees: 12, eveningDegrees: 16};

const tvProgram = [
  {time: '12:30', channel: '1TV', program: 'Опять двойка'},
  {time: '12:40', channel: 'НТВ', program: 'Руцкой'},
  {time: '12:55', channel: 'РТР', program: 'Кнопка'}
]

function MainPage() {
  return (
    <div>
      <NewsBlock news={news}/>
      <ExchangeRates rates={rates}/>
      <SearchForm />
      <Weather weather={weather} />
      <TvProgram tvProgram={tvProgram} />
    </div>
  );
}

export default MainPage;
