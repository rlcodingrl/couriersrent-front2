import React, {useState, useContext} from "react";

import { UserContext } from "../../app/app";
import { useSelector } from "react-redux";

import NewNews from "./NewNews";
import AllNews from "./AllNews";

import "./Home.css";

const Home = () => {

  const user = useSelector(state=>state.user)

  const [newsCounter, setNewsCounter] = useState(0);

  return (
    <div className="home">
      {(user.role === 'admin')
        ?<NewNews setNewsCounter={setNewsCounter}/>
        :null}
      
      <AllNews newsCounter={newsCounter} setNewsCounter={setNewsCounter}/>    
    </div>
  )

};

export default Home;
