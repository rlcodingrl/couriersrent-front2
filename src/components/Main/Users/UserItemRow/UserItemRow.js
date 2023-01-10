import React from "react";

import "./UserItemRow.css";



const UserItemRow = ({user}) => {
  
  return (
    <div className="userItemRow">
      {console.log(user)}
      <div>{ user.name } and it's id = { user._id }</div>
    </div>    
  )

};

export default UserItemRow;
