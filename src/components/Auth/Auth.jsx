import React, { useState } from "react";

//redux
import {useDispatch} from "react-redux";

//handler
import onClickLoginHandler from "../../onClickHandlers/onClickLoginHandler";

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
      <h1>Couriers rent service ver 1.0</h1>
      <form
        action=""
        onSubmit={ (e) => {
          onClickLoginHandler(e, dispatch, form, setShowInvPass)     
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
