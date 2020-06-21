import React from 'react';

 /*блок для новостей в верхней части страницы*/

function NewsBlock(props) {
  return (
    props.news.map((el) => <li align="center"><a href={el.link}>{el.text}</a></li>)
  );
}

export default NewsBlock;