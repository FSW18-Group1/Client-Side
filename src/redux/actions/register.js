import axios from 'axios'

export const SIGNUP = "REGISTER";
export const LOGIN = "LOGIN";

export  const signupAction = (data) => {
    return (dispatch) => {
        console.log('2. masuk action');
        //loading
        dispatch({
            type: SIGNUP,
            payload: {
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        //get API
        const urlRegister = 'https://challenge-chapter-9.herokuapp.com/register';
        const bodyRegister = data
        axios.post(urlRegister, bodyRegister)
            .then((res) => {
                console.log('3. berhasil: '+ res.data);
                dispatch({
                    type: SIGNUP,
                    payload: {
                        loading:false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                console.log('3. gagal: '+ err.message)
                dispatch({
                    type: SIGNUP,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export  const loginAction = (data) => {
    
    return (dispatch) => {
        console.log('2. masuk action');
        //loading
        dispatch({
            type: LOGIN,
            payload: {
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        //get API
        const urlLogin = 'https://challenge-chapter-9.herokuapp.com/login';
        const bodyLogin = data
        axios.post(urlLogin, bodyLogin)
            .then((res) => {
                console.log('3. berhasil: '+ res.data);
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('data', JSON.stringify(res.data.data)) 
                dispatch({
                    type: LOGIN,
                    payload: {
                        loading:false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                console.log('3. gagal: '+ err.message)
                dispatch({
                    type: LOGIN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}