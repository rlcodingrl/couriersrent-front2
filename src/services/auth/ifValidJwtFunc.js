import { back } from "../../config/config";
import { transformUserData } from "./transformUserData";

export const ifValidJwtFunc = async (jwt, dispatch, setAuthTrue, setUser) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwt}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let res = await fetch(`${back}/user/me`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      if (result.success === true) {
        let userData = transformUserData(result);
        setUser(userData);
        dispatch(setAuthTrue());
        return true;
      }
      return result;
    })
    .catch((error) => console.log("error", error));
  return res;
};
