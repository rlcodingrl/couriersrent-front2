import { back } from "../../config/config";

const sendCourierMessage = async (courierId, userId, textMsg) => {
  const jwt = localStorage.getItem("jwt");

  console.log("getCourierMessages works");
  console.log(courierId)

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "courier_id": courierId,
    "user_id": userId,
    "text": textMsg
    });
    
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

  console.log('before fetch')
  const resFunc = fetch(`${back}/sendMessage`, requestOptions)
  .then(response => {
    return response.json()
})
  .then(result => {
    console.log(result)
    return result
})
  .catch(error => console.log('error', error));

  return resFunc
};

export default sendCourierMessage;