import { back } from "../../config/config";
import { transformUserData } from "./transformUserData";

export const loginService = async (
  { login, password },
  dispatch,
  setAuthTrue,
  // setUser,
  setUserDataAction
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: login,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  let res = await fetch(`${back}/auth/login`, requestOptions)
    .then((response) => {
      // if (!response.ok) {
      //   throw Error("server response !ok ");
      // }
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        let userData = transformUserData(result);
        dispatch(setUserDataAction(userData));
        localStorage.setItem("jwt", userData.jwt);
        dispatch(setAuthTrue());
      }
      return result;
    })
    .catch((error) => console.log("error", error));

  return res;
};
