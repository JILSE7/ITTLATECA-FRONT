//Peticiones con token y sin token
//const baseURL = "http://localhost:8081/ITTLATECA";
const baseURL ="https://ittlateca-backend-nodejs.herokuapp.com/ITTLATECA";

const fetchSinToken = (endpoint, data, method = 'GET') =>{

    const url = `${baseURL}/${endpoint}`;
    console.log(url);

    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url, {
            method,
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

const fetchConToken = (endpoint, data, method = 'GET') =>{

    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if(method === 'GET'){
        return fetch(url, {
            method,
            headers: {
                'x-token' : token
            }
        });
    }else{
        return fetch(url, {
            method,
            headers: {
                'Content-type' : 'application/json',
                'x-token' : token
            },
            body: JSON.stringify(data)
        })
    }
}




export  {
    fetchSinToken,
    fetchConToken
}
