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
        .then(response => {
            if(!response.ok) {
                throw Error('server response !ok ')
            }
            return response.json()
        })
        .then(result => {
            return result
        })
        .catch(error => {
            console.log('this is catch error')
            console.log('error', error)
            alert('error', error)
        });
    
    return res
}

export default getUsers