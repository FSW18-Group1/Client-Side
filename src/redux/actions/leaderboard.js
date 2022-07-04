import axios from "axios";
export const GET_LEADERBOARD = "GET_LEADERBOARD";

export const getLeaderboard = () => {
    return (dispatch) => {
        console.log("2. masuk action");
        
        dispatch({
            type: GET_LEADERBOARD,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios.get('https://challenge-chapter-9.herokuapp.com/games/1')
            .then((res) => {
                console.log("3. masuk data", res);
                const array = res.data.data
                const arrayMap = array.map((player) =>{
                    return{
                        game: player.Game.gamesname,
                        id: player.Player.id,
                        username: player.Player.username,
                        score: player.points
                    }
                })
                arrayMap.sort((a,b)=> {
                    return b.score - a.score
                })
                dispatch({
                    type: GET_LEADERBOARD,
                    payload: {
                        loading: false,
                        data: arrayMap,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                console.log("3. masuk error")
                dispatch({
                    type: GET_LEADERBOARD,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}