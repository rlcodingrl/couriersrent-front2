import { back } from "../../config/config";

const getAllNews = async () => {
  // console.log("getAllNews works");
  const jwt = localStorage.getItem("jwt");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwt}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let funcRes = await fetch(`${back}/news/all`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw Error("server response !ok ");
      }
      return response.json();
    })
    .then((result) => {
      return result.data.news.reverse();
    })
    .catch((error) => console.log("error", error));

  return funcRes;
  
};

export default getAllNews;
