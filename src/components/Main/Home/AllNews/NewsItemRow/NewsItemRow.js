import React from "react";

import "./NewsItemRow.css";



const NewsItemRow = (news) => {
  
  return (
    <>
      <div className="news-item-row__author">{ news.news.author.name } {news.news.createdAt.slice(0,-8).split('T').join(' ')}</div>
      <div>{ news.news.text }</div>
    </>    
  )

};

export default NewsItemRow;
