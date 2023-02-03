import { back } from "../../config/config";

const setWallet = async (userId, newWallet) => {
  const jwt = localStorage.getItem("jwt");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwt}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": userId,
    "wallet": newWallet
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let res = await fetch(`${back}/user/setWallet`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("this is catch error");
      console.log("error", error);
    });

  return res;
};

export default setWallet;
// 



