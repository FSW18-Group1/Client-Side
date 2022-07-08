export const AUTHENTICATED = "AUTHENTICATED";

export  const authenticatedAction = (data) => {
    return (dispatch) => {
        // console.log('2. masuk action');
        const token = localStorage.getItem('token')
        const data = JSON.parse(localStorage.getItem('data')) 
        dispatch({
            type: AUTHENTICATED,
            payload: {
                token,
                data
            }
        })
    }
}