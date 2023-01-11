import { back } from "../../config/config";

const deleteNews = async (id) => {
    const jwt = localStorage.getItem("jwt");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${jwt}`);

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
    };

    let funcRes = fetch(`${back}/news/${id}`, requestOptions)
    .then(response => response.json())
    .then(
        result => {
            console.log(result)
            return result
        }
    )
    .catch(error => console.log('error', error));

    return funcRes
  
};

export default deleteNews;



//   ----------------
//   // console.log("getAllNews works");
//   const jwt = localStorage.getItem("jwt");

//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", `Bearer ${jwt}`);

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   let funcRes = await fetch(`${back}/news/all`, requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       return result.data.news.reverse()
//     })
//     .catch((error) => console.log("error", error));
  
//   return funcRes