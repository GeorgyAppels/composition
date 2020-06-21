import React from 'react';

 /*блок для тв-программы*/

function TvProgram(props) {
  return (
    props.tvProgram.map((el) =>
      <li>
          <i>{el.time}</i>
          <b>{el.channel}</b>
          <s>{el.program}</s>
      </li>
    )
  );
}

export default TvProgram;