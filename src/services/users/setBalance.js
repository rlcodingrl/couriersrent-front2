import { back } from "../../config/config";

const setBalance = async (userId, newBalance) => {
  const jwt = localStorage.getItem("jwt");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwt}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    amount: newBalance,
    id: userId,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let res = await fetch(`${back}/setBalance`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("this is catch error");
      console.log("error", error);
      alert("error", error);
    });

  return res;
};

export default setBalance;
