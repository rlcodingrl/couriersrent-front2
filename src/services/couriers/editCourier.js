import { back } from "../../config/config";

const jwt = localStorage.getItem('jwt')  

const editCourier = (data, courierId) => {

    console.log(data);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${jwt}`);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name": data.firstName,
      "holderName": data.holderName,
      "dob": data.dob,
      "cellPhone": data.cellPhone,
      "address": data.address,
      "bank": data.bank,
      "accountingNumber": data.accountingNumber,
      "routingNumber": data.routingNumber,
      "wireroutingNumber": data.wireroutingNumber,
      "ssn": data.ssn,
      "ein": data.ein,
      "type": data.type,
      "amount": data.amount,
      "used_banks": data.used_banks,
      "startedDay": data.startedDay,
      "status": data.status,
      "comment": data.comment
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const resFunc = fetch(`${back}/couriers/${courierId}`, requestOptions)
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

  return resFunc
};

export default editCourier;


