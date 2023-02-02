import { back } from "../../config/config";

const createNewUser = (data) => {

  const jwt = localStorage.getItem('jwt');  

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${jwt}`
  );
  myHeaders.append("Content-Type", "application/json");

  console.log('this is data that income')
  console.log(data);

  var raw = JSON.stringify({
    name: data.firstName,
    holderName: data.holderName,
    dob: data.DOB,
    cellPhone: data.cellPhone,
    address: data.streetAddress,
    bank: data.bank,
    accountingNumber: data.accountingNumber,
    routingNumber: data.routingNumber,
    wireroutingNumber: data.wireRoutingNumber,
    ssn: data.ssn,
    ein: data.ein,
    type: data.persOrBus,
    amount: data.sum,
    used_banks: data.usedBanks,
    startedDay: data.startedDay,
    status: data.status,
    comment: data.comment,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const resThisFunc = fetch(`${back}/couriers`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw Error("server response !ok ");
      }
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));

  return resThisFunc;
};

export default createNewUser;
