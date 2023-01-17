import React from "react";

import UserItemRow from "./UserItemRow";

import "./Users.css";
import { useEffect } from "react";
import getUsers from "../../../services/users/getUsers";

// redux
import { setSpinnerTrue, setSpinnerFalse } from "../../../store/spinnerReducer";
import { useDispatch, useSelector } from "react-redux";
import { setUsersListAction, clearUsersListAction } from "../../../store/usersListReducer";

const Users = () => {

  const dispatch = useDispatch()
  
  const usersList = useSelector(state => state.usersList)
  // console.log(usersList)

  useEffect(()=>{
    dispatch(setSpinnerTrue())
    getUsers().then( res => {
          dispatch(setSpinnerFalse())
          dispatch(setUsersListAction(res.data.users))
        }
      )
    return (()=>{
      dispatch(clearUsersListAction())
    })
  },[])


  return (
    <div className="users">
      Here is user list:
      {usersList&&usersList.map((el) => (
        <UserItemRow user={el} key={el._id} />
      ))}
    </div>
  );
  
};

export default Users;
