import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/auth/login",
    headers: {
        "Content-Type": "application/json"
    },
});


// const DEFAULT_OPTIONS = {
//     header: {'content-type': 'appliction/json'},
//     body: JSON.stringify(values),
// }

const login = async (values) => {

try {
    const response = await fetch("http://localhost:4000/auth/login",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
} catch (error) {
    console.log(error);
}
}

const logout = async (token) =>{
  
try {
    const response = await fetch("http://localhost:4000/auth/logout",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(token),
    });
    const data = await response.json();
    return data;
} catch (error) {
    console.log(error);
}

}

const authService = {login, logout};
export default authService;