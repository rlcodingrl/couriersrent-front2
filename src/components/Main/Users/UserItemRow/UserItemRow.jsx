import React from "react";
import { useState } from "react";

import "./UserItemRow.css";

// redux
import { useDispatch } from "react-redux"; 

//handler
import changeBalanceHandler from "../../../../onClickHandlers/changeBalanceHandler";

const UserItemRow = ({user}) => {

  const dispatch = useDispatch()

  const [newBalance, setNewBalance] = useState('')
  
  return (
    <div className="userItemRow">
      <div>{ user.name } / id = { user._id }</div>
      <div>balance = { user.balance }$, wallet = { user.wallet }</div>
      <button onClick={
        ()=>{
          changeBalanceHandler(dispatch,user,newBalance, setNewBalance)
      }}>
        change balance
      </button>
      <input className="input-balance" type="text" onChange={e=>setNewBalance(e.target.value)} value={newBalance}/>
    </div>    
  )

};

export default UserItemRow;
