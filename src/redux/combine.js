import { combineReducers } from "redux";
import authenticatedReducer from "./reducers/authenticated";
import leaderboardReducer from "./reducers/leaderboard"
import ProfilePlayerReducer from "./reducers/profileplayer";

export default combineReducers(
    {
        authenticatedReducer,
        leaderboardReducer,
        ProfilePlayerReducer
        
    }
)