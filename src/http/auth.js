import axios from 'axios';

axios.defaults.withCredentials = true






export async function onRegistr(registrationData){
    return await axios.post(
        'http://localhost:4444/api/registr',
        registrationData
    )
}

export async function onLogin(loginData) {
    return await axios.post(
        'http://localhost:4444/api/login',
        loginData
    )
}

export async function onLogout() {
    return await axios.get(
        'http://localhost:4444/api/logout',
        
    )
}

export async function fetchProtectedInfo() {
    return await axios.get(
        'http://localhost:4444/api/protected',
        
    )
}