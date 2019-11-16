import axios from 'axios';

export const loginUser =  (email, password) =>(dispatch)=>{
   alert('antes de axios auth'+email+password)
    axios.post(`http://localhost:8080/auth`, {email: email, password: password})
    .then(res =>{
    localStorage.setItem("token",res.data)
    })
    
    .catch(error=>{
        console.log(error)
    })
}

