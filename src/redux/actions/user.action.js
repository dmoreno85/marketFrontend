import axios from 'axios';

export const loginUser = (dispatch) => (email, password) => {

    return axios.post(`http://localhost:8080/auth`, {
            email: email,
            password: password
        })
        .then(res => {
            localStorage.setItem("token", res.data)
          

        })
}