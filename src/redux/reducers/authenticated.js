import { AUTHENTICATED } from "../actions/authenticated";

const initialState = {
    token: false,
    data: false
}

const authenticatedReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATED:
            // console.log('4. masuk reducer'+ action)
            return{
                ...state,
                token: action.payload.token,
                data: action.payload.data
            }
        default:
            return state
    }
}

export default authenticatedReducer;