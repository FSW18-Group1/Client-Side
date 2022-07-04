import { Fragment, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import poster from '../assets/paperockscissor.jpg'
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import Video from '../component/video';
import { authenticatedAction } from '../redux/actions/authenticated';
import { getLeaderboard } from "../redux/actions/leaderboard";
import { useDispatch, useSelector } from "react-redux";

function GameDetail() {
  const { token, data } = useSelector((state) => state.authenticatedReducer);
  const {getLeaderboardResult, getLeaderboardLoading,getLeaderboardError} = useSelector((state) => state.leaderboardReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let count = 1

  const getUser= () => {
      let url = 'https://challenge-chapter-9.herokuapp.com/games/1';
      axios.get(url)
          .then((response) => {
            const array = response.data.data
            const arrayMap = array.map((player)=>{
              return{
                game: player.Game.gamesname,
                id: player.Player.id,
                username : player.Player.username,
                score: player.points,
              }
            })
            const id = data.id
            const points = array.find((o)=> o.playerId === id).points
            localStorage.setItem('score', points)
            arrayMap.sort((a, b)=>{
              return  b.score - a.score 
            })
          })
          .catch(err => console.log(err))
  }

    useEffect(() => {
        document.title = 'Pingsut'
        dispatch(authenticatedAction());
        dispatch(getLeaderboard())
        getUser();
    }, [dispatch]);

  return (
    <>
    {!token && navigate('/login')}
    <div className="section">
      <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-7">
              <Video poster/>
              {/* <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={poster}
                alt="foto ini"
              /> */}
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">This is games for kid</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the company standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="d-flex justify-content-start">
                <Link to='/'><button className="me-4 btn btn-danger">&laquo; back</button></Link>
                <Link to='/game'><button className="ms-2 px-4 btn btn-primary">play</button></Link>
              </div>
            </div>
          </div>
            <div className="mx-auto" style={{width:'500px'}}>
                <h2 className='text-center mb-4'>Leader Board</h2>
                {getLeaderboardLoading && 
                  <h4 className='text-center'>loading...</h4>
                }
                {getLeaderboardError && 
                  <h4 className="text-center">No data</h4>
                }
                {getLeaderboardResult &&
                <Table striped bordered hover className='leaderboard'>
                    <thead>
                        <tr>
                            <th className='text-white'>Rank</th>
                            <th className='text-white'>Username</th>
                            <th className='text-white'>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                      {getLeaderboardResult.map((player) =>{
                          return(
                            <tr key={player.id}>
                              <td className='text-white'>{count++}</td>
                              <td className='text-white'><Link to={`playerprofile/${player.id}`}>{player.username}</Link></td>
                              <td className='text-white'>{player.score}</td>
                            </tr>
                          )
                        })}
                    </tbody>
                </Table>
                }
            </div>
      </div>
    </div>
    </>
  );
}

export default GameDetail;