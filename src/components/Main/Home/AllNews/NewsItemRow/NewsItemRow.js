import React from "react";

import "./NewsItemRow.css";
import DeleteIcon from "../../../../../assets/DeleteIcon/DeleteIcon";

import { useSelector } from "react-redux";


const NewsItemRow = ({news, trashIcon}) => {


  
  return (
 

    <div className="news-item-row">
      <div className="news-item-row__author-and-text">
        <div className="news-item-row__author">{ news.author.name } {news.createdAt.slice(0,-8).split('T').join(' ')}</div>
        <div>{ news.text }</div>
      </div>
      {console.log(trashIcon)}
      {trashIcon&&<div className="news-item-row__delete-wrapper">
                    <span className="def-btn delete-btn">
                      {DeleteIcon()}
                    </span>          
                  </div>}
      

    </div>    
  )

};

export default NewsItemRow;
