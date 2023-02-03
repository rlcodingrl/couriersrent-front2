import React from "react";
import { useState } from "react";

import "./UserItemRow.css";

// redux
import { useDispatch } from "react-redux"; 
import { setSpinnerFalse, setSpinnerTrue } from "../../../../store/spinnerReducer";
import { useSelector } from "react-redux";
import { setUsersListAction } from "../../../../store/usersListReducer";

//services
import getUsers from "../../../../services/users/getUsers";
import setBalance from "../../../../services/users/setBalance";


const UserItemRow = ({user}) => {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.user.id)

  const [newBalance, setNewBalance] = useState('')
  
  return (
    <div className="userItemRow">
      <div>{ user.name } / id = { user._id }</div>
      <div>balance = { user.balance }$, wallet = { user.wallet }</div>
      <button onClick={
        ()=>{
          dispatch(setSpinnerTrue())
          setBalance(userId,newBalance).then(res=>{
            console.log(res)
            getUsers().then( res => {
              dispatch(setSpinnerFalse())
              dispatch(setUsersListAction(res.data.users))
              setNewBalance('');
            }
          )
          })

      }}>change balance</button>
      <input className="input-balance" type="text" onChange={e=>setNewBalance(e.target.value)} value={newBalance}/>
    </div>    
  )

};

export default UserItemRow;
