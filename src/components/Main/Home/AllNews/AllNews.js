import React, { useEffect, useState } from "react";

import "./AllNews.css";

import getAllNews from "../../../../services/news/getAllNews";
import NewsItemRow from "./NewsItemRow";

//redux
import { setSpinnerFalse, setSpinnerTrue } from "../../../../store/spinnerReducer";
// import { setSpinnerFalse, setSpinnerTrue } from "../../../store/spinnerReducer";
import {useDispatch, useSelector} from "react-redux";


const AllNews = ({newsCounter, setNewsCounter}) => {
  

  //redux
  const dispatch = useDispatch()  
  const user = useSelector(state=>state.user)


  const [news, setNews]=useState([])
  const [trashIcon, setTrashIcon] = useState(false)

  
  
  useEffect(()=>{
    if (user.role === 'admin') { setTrashIcon(true) }
    dispatch(setSpinnerTrue())
    getAllNews().then(res=>{
      setNews(res)
      dispatch(setSpinnerFalse())
    })
    // eslint-disable-next-line
  },[newsCounter])

  return (
    <div className="all-news">
      {news&&news.map((el) => <NewsItemRow news={el} key={el._id} trashIcon={trashIcon} setNewsCounter={setNewsCounter}/>)}
    </div>
  )

};

export default AllNews;
