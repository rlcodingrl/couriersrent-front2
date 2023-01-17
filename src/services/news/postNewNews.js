import { back } from "../../config/config";

const postNewNews = (data) => {''
  const jwt = localStorage.getItem("jwt");

  console.log(data.message)

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwt}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    text: data.message,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const resFunc = fetch(`${back}/news`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw Error("server response !ok ");
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.log("error", error));

  return resFunc;

};

export default postNewNews