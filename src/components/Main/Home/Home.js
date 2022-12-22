import React, {useState, useContext} from "react";

import { UserContext } from "../../app/app";

import NewNews from "./NewNews";
import AllNews from "./AllNews";

import "./Home.css";

const Home = () => {

  const {user} = useContext(UserContext)

  const [newsCounter, setNewsCounter] = useState(0);
  // console.log(newsCounter)

  return (
    <div className="home">
      {(user.role === 'admin')
        ?<NewNews setNewsCounter={setNewsCounter}/>
        :null}
      
      <AllNews newsCounter={newsCounter}/>
      
    </div>
  )

};

export default Home;
