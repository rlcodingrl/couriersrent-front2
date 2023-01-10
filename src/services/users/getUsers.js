import { back } from "../../config/config";

const getUsers = async () => {
    const jwt = localStorage.getItem('jwt')

    var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${jwt}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let res = await fetch(`${back}/users`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return result
        })
        .catch(error => console.log('error', error));
    
    return res
}

export default getUsers