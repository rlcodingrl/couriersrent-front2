import React from "react";

import "./NewsItemRow.css";
import DeleteIcon from "../../../../../assets/DeleteIcon/DeleteIcon";

import deleteNews from "../../../../../services/news/deleteNews";

// redux
import { setSpinnerTrue, setSpinnerFalse } from "../../../../../store/spinnerReducer";
import { useDispatch } from "react-redux";

const NewsItemRow = ({news, trashIcon, setNewsCounter}) => {

  const dispatch = useDispatch();

  return (
    <div className="news-item-row">
      <div className="news-item-row__author-and-text">
        <div className="news-item-row__author">{ news.author.name } {news.createdAt.slice(0,-8).split('T').join(' ')}</div>
        <div>{ news.text }</div>
      </div>
      {trashIcon&&<div className="news-item-row__delete-wrapper">
                    <span className="def-btn delete-btn" onClick={
                                                              ()=>{
                                                                  dispatch(setSpinnerTrue())
                                                                  console.log('this is delete news')
                                                                    deleteNews(news._id).then(res=>{
                                                                      if (res.status) {
                                                                        console.log('user deleted');
                                                                        dispatch(setSpinnerFalse())
                                                                        setNewsCounter(prev=>prev+1)
                                                                      }
                                                                    })
                                                                  }}>
                      {DeleteIcon()}
                    </span>          
                  </div>}
      

    </div>    
  )

};

export default NewsItemRow;
