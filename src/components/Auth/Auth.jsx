import React, { useState, useContext } from "react";
import { loginHandler } from "../../services/auth/loginHandler";

//redux
import { setSpinnerFalse,setSpinnerTrue } from "../../store/spinnerReducer";
import { setAuthTrue, setAuthFalse } from "../../store/ifAuthReducer";
import { setUserDataAction } from "../../store/userReducer";
import {useDispatch} from "react-redux";


import "./Auth.css";

const Auth = () => {


  const dispatch = useDispatch()

  const [form, setForm] = useState({ login: "", password: "" });
  const [ showInvPass, setShowInvPass ] = useState(false);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setShowInvPass(false)
  };

  return (
    <div className="auth">
      <div className="auth-inner-wrapper">
      <h1>Couriers rent service</h1>
      <form
        action=""
        onSubmit={async (e) => {
          dispatch(setSpinnerTrue())     
          e.preventDefault();
          let res = await loginHandler(form, dispatch, setAuthTrue, setUserDataAction);
          console.log(res)
          if (res.success) {
            dispatch(setSpinnerFalse())
          }
          if (res.message==='Invalid username or password'||res.message==='User not found') {
            setShowInvPass(true)
            dispatch(setSpinnerFalse())
          }
          
        }}
      >
        <div className="auth-first-row">
          <span>login</span>
          <input
            name="login"
            type="text"
            placeholder="login"
            autoComplete="username"
            onChange={changeHandler}
            value={form.login}
          ></input>
        </div>
        <div className="auth-second-row">
          <span>password</span>
          <input
            name="password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
            value={form.password}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="auth-third-row">
          <div>
           {showInvPass&&<span>Invalid username or password</span>}
          </div>
          <button type="submit">Login</button>
        </div>
        
      </form>
      {/* {error ? "ошибка" : ""} */}
      </div>
      
    </div>
  );
};

export default Auth;
