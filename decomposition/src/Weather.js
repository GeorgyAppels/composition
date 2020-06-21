import React from 'react';

 /*блок для погоды*/

 function Weather(props) {
    return (
      <div>
          {props.state}
          <li>Текущая: {props.weather.currentDegrees}°</li>
          <li>Утром: {props.weather.morningDegrees}°</li>
          <li>Вечером: {props.weather.eveningDegrees}°</li>
      </div>

    );
  }
  
  export default Weather;