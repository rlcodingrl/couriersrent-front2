import React, { useEffect, useState, useContext } from "react";

import "./AllNews.css";

import getAllNews from "../../../../services/news/getAllNews";
import NewsItemRow from "./NewsItemRow";

import { spinnerContext } from "../../../AuthOrApp/AuthOrApp";

const AllNews = ({newsCounter}) => {

  const [news, setNews]=useState([])
  const setSpinner = useContext(spinnerContext)
  // console.log(news)

  useEffect(()=>{
    setSpinner(true);
    getAllNews().then(res=>{
      setNews(res)
      setSpinner(false);
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
