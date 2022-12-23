import React, { useState, useContext } from "react";
import { loginHandler } from "../../services/auth/loginHandler";
import { UserContext } from "../app/app";
import { spinnerContext } from "../AuthOrApp/AuthOrApp";

import "./Auth.css";

const Auth = ({ setIfAuthenticated }) => {
  let { user, setUser } = useContext(UserContext);
  let setSpinner = useContext(spinnerContext);

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
          setSpinner(true);
          e.preventDefault();
          await loginHandler(form, setIfAuthenticated, user, setUser);
          // console.log(res);
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
