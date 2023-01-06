import React, { useEffect, useState, useContext } from "react";

import "./AllNews.css";

import getAllNews from "../../../../services/news/getAllNews";
import NewsItemRow from "./NewsItemRow";

import { spinnerContext } from "../../../AuthOrApp/AuthOrApp";


//redux
import { setSpinnerFalse, setSpinnerTrue } from "../../../store/spinnerReducer";
import {useDispatch} from "react-redux";

const AllNews = ({newsCounter}) => {
  //redux
  const dispatch = useDispatch()  

  const [news, setNews]=useState([])
  const setSpinner = useContext(spinnerContext)
  
  useEffect(()=>{


    dispatch(setSpinnerTrue())
    getAllNews().then(res=>{
      setNews(res)
      dispatch(setSpinnerFalse())
    })
    // eslint-disable-next-line
  },[newsCounter])

  return (
    <div className="all-news">
      {news.map((el) => <NewsItemRow news={el} key={el._id} />)}

    </div>
  )

};

export default AllNews;
