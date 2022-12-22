import React, {useState} from "react";
import {useForm} from 'react-hook-form'

import postNewNews from "../../../../services/news/postNewNews";

import "./NewNews.css";





const NewNews = ({setNewsCounter}) => {

  const [ifCreateSuccessful, setIfCreateSuccessful] = useState(false)

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } =useForm({
    mode:"onBlur"
  });

  const onSubmit = (data) => {
  

    // alert(JSON.stringify(data));
    console.log(data)
    postNewNews(data).then(res=>{
      if (res.status===true) {
        setIfCreateSuccessful(true)
        setNewsCounter(prev=>prev+1)
        reset()
      }
      
    })
    
  }

  return (
    <form className="new-news-form" onSubmit={handleSubmit(onSubmit)} onChange={()=>{setIfCreateSuccessful(false)}}>
      <label className="new-news-line">
            {/* <div className="new-news-line__description">message</div> */}
            <div>
              < textarea className="new-news-form__input-msg"
                {...register("message", {
                  required: "Message is required",
                })}
              />
            </div>
            <div className="new-news-line__error">
              
            </div>
          </label>
      <input type="submit" disabled={!isValid} />
      {errors?.message && <span>{errors?.message?.message || "Error!"}</span>}
      {ifCreateSuccessful && <span className="success-msg">msg created successful </span>}

      
    </form>
  )

};

export default NewNews;
