import React from 'react';

 /*блок для вывода курсов валют*/

function ExchangeRates(props) {
  return (
    props.rates.map((el) => 
      <div align="center">
        <b>{el.currency}</b>: 
        <i>{el.rate}</i>
      </div>
    )
  );
}

export default ExchangeRates;