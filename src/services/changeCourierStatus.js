import { back } from "../config/config";

const changeCourierStatus = async (courierId, newStatus, funcToUpdateCourierList) => {
  console.log('changeCourierStatus works')
  const token = localStorage.getItem('jwt')

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "status": `${newStatus}`
  });
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  const funcRes = fetch(
    `${back}/couriers/change/status/${courierId}`,
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw Error("server response !ok ");
      }
      return response.json();
    })
    .then((result) => {
      // console.log(result)
      funcToUpdateCourierList((prev) => prev + 1);
      console.log("func changeCouriersStatus finished");
      return result.status;
    })
    .catch((error) => console.log("error", error));

  return funcRes
}

export default changeCourierStatus
