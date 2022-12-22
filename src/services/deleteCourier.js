import { back } from "../config/config";

const deleteCourier = (courierId, funcToUpdateCourierList) => {

    const jwt = localStorage.getItem('jwt')  

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${jwt}`
  );

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `${back}/couriers/${courierId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
        console.log(result);
        funcToUpdateCourierList(prev=>prev+1)
    })
    .catch((error) => console.log("error", error));
};

export default deleteCourier
