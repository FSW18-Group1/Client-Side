import { GET_PROFILEPLAYER } from "../actions/profileplayer"

const initialState = {
  getProfilePlayerEmail: ' ',
  getProfilePlayerUsername: ' '
}
// console.log("5", initialState)

const ProfilePlayerReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_PROFILEPLAYER:
          // console.log('4. masuk reducer', action)
          return{
              ...state,
              getProfilePlayerEmail: action.payload.email,
              getProfilePlayerUsername: action.payload.username
          }
      default:
          return state
  }
}

export default ProfilePlayerReducer