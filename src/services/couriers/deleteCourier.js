import { back } from "../../config/config";

const deleteCourier = (courierId, dispatch, funcToUpdateCourierList) => {

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

  fetch(`${back}/couriers/${courierId}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw Error("server response !ok ");
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      dispatch(funcToUpdateCourierList());
    })
    .catch((error) => console.log("error", error));
};

export default deleteCourier
