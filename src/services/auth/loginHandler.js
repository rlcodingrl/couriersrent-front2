import { back } from "../../config/config";
import { transformUserData } from "./transformUserData";

export const loginHandler = async (
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
    .then((response) => response.json())
    .then((result) => {
      if (result.user) {
        // console.log(result);
        // console.log("login success");
        // console.log(result.data.access_token);
        // console.log(result.user);

        let userData = transformUserData(result);
        // console.log(userData);

        // setUser(userData);
        dispatch(setUserDataAction(userData));
        // console.log("login hadnler works");
        localStorage.setItem("jwt", userData.jwt);
        dispatch(setAuthTrue());
      }
      return result;
    })
    .catch((error) => console.log("error", error));

  return res;
};
