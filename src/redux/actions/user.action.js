import axios from 'axios';

export const loginUser = (dispatch) => (email, password) => {

    return axios.post(`http://localhost:8080/auth`, {
            email: email,
            password: password
        })
        .then(res => {
            // console.log(res.data)
            localStorage.setItem("token", res.data)
          

        })
}
export const userEmail =(dispatch)=>(email)=>{
    console.log('haciendo axios userEmail')
  axios.get(`http://localhost:8080/auth/users/${email}`
    )
    .then(res=>{
              console.log('Dentro de RES userEmail'+ JSON.stringify(res.data));

        dispatch({
            type: 'GET_USER',
            payload:{
            user:res.data.user,
            email:res.data.email,
        }
        })
    })
    .catch(error =>{
        console.log('GET_USER '+ error)
    }
    )
}