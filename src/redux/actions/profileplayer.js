import axios from "axios";
export const GET_PROFILEPLAYER = "GET_PROFILEPLAYER";

export const getProfilePlayer = (data) => {
  return (dispatch) => { 
    console.log("2 masuk", dispatch); 
      dispatch({
          type: GET_PROFILEPLAYER,
          payload: {
              email: "loading",
              username: "loading",
          }
      })
      console.log("4", dispatch)
      const id = data
      let token = localStorage.getItem('token') 
      console.log("token",token)
      const config = {
        headers: { Authorization: `Bearer ${token}`}
    }

      axios.get(`https://challenge-chapter-9.herokuapp.com/profile/${id}`, config)
          .then((res) => {
              console.log("11. masuk data", res);
              dispatch({
                type: GET_PROFILEPLAYER,
                payload: {
                  email: res.data.data.email,
                  username: res.data.data.username
                }
              })       
          })
          .catch((err) => {
              console.log("3. masuk error")
              dispatch({
                  type: GET_PROFILEPLAYER,
                  payload: {
                    email: false,
                    username: false,
                    Error: err.message
                  }
              })
          })
  }
}