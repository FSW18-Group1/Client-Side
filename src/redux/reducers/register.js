import { SIGNUP, LOGIN } from '../actions/register';

const initialState = {
    signupLoading: false,
    signupResult: false,
    signupError: false,

    loginLoading: false,
    loginResult: false,
    loginError: false
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            console.log("4. ini reducer: "+ action)
            return{
                ...state,
                signupLoading: action.payload.loading,
                signupResult: action.payload.data,
                signupError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log("4. masuk reducer: "+ action)
            return{
                ...state,
                loginLoading: action.payload.loading,
                loginResult: action.payload.data,
                loginError: action.payload.errorMessage
            }
        default:
            return state;
    }
}