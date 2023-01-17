import { back } from "../config/config";

const getCouriers = async (courierStatus, user) => {

    const jwt = localStorage.getItem('jwt')  

    if (courierStatus === "reserved") {
      courierStatus = "res";
    }

  const filterCouriers = (courierList)=> {
    if ((courierStatus==='res')&&(user.role==='user')) {
        return courierList.filter((el) => el.status === user.name )
    }
    return courierList
  }




  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${jwt}`
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let path = `${back}/couriers/${courierStatus}`;
//   if (id !== 'none') {
//     path = `${back}/couriers/${id}`
//   }



  const resThisFunc = fetch(path, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw Error("server response !ok ");
      }
      return response.json();
    })
    .then((result) => {
      //   console.log(result)
      //   console.log(result.data.couriers);
      //   if (id !== 'none') { setCouriersData(result.data); return }
      return filterCouriers(result.data.couriers);
      // setCouriersData(filterCouriers(result.data.couriers));
    })
    .catch((error) => console.log("error", error));
  // console.log(`resThisFunc ${resThisFunc}`);
  return resThisFunc
};

export default getCouriers;
