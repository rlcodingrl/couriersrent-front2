import React, { useState, useContext } from "react";
import { loginHandler } from "../../services/auth/loginHandler";
import { UserContext } from "../app/app";

//redux
import { setSpinnerFalse,setSpinnerTrue } from "../../store/spinnerReducer";
import { setAuthTrue, setAuthFalse } from "../../store/ifAuthReducer";
import { setUserDataAction } from "../../store/userReducer";
import {useDispatch} from "react-redux";


import "./Auth.css";

const Auth = () => {
  let { user, setUser } = useContext(UserContext);
  const dispatch = useDispatch()

  const [form, setForm] = useState({ login: "", password: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="auth">
      <h1>Couriers rent service</h1>
      <form
        action=""
        onSubmit={async (e) => {
          dispatch(setSpinnerTrue())     
          e.preventDefault();
          let res = await loginHandler(form, dispatch, setAuthTrue, setUser, setUserDataAction);
          if (res.success) {
            dispatch(setSpinnerFalse())
          }
        }}
      >
        <div>
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
        <div>
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
        <button type="submit">Login</button>
      </form>
      {/* {error ? "ошибка" : ""} */}
    </div>
  );
};

export default Auth;
