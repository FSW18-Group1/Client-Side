import { combineReducers } from "redux";
import authenticatedReducer from "./reducers/authenticated";
import leaderboardReducer from "./reducers/leaderboard"

export default combineReducers(
    {
        authenticatedReducer,
        leaderboardReducer
        
    }
)