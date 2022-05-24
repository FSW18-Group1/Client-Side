import { useState, Fragment, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import poster from '../assets/paperockscissor.jpg'
import Table from 'react-bootstrap/Table'
import axios from 'axios';


function GameDetail() {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  let count = 1

  const checkAuth = () => {
      const token = localStorage.getItem('token')
      if(token) {
          setAuthenticated(true)
      } else {
          setAuthenticated(false)
          navigate('/login')
      }
  }
  useEffect(() => {
    document.title = 'Pingsut'
  }, []);

  const getUser= () => {
      let url = 'https://challenge-chapter-9.herokuapp.com/games/1';
      axios.get(url)
          .then((response) => {
            console.log(response.data.data)

            const array = response.data.data
            const arrayMap = array.map((player)=>{
              return{
                game: player.Game.gamesname,
                id: player.Player.id,
                username : player.Player.username,
                score: player.points
              }
            })
            arrayMap.sort((a, b)=>{
              return  b.score - a.score 
            })

            console.log(arrayMap)
              setUser(
                arrayMap
              )

          })
          .catch(err => console.log(err))
  }

    useEffect(() => {
        checkAuth()
        getUser();
    }, []);

    // console.log(user)
  return (
    <div className="section">
      <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={poster}
                alt="foto ini"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">This is games for kid</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="d-flex justify-content-start">
                <Link to='/home'><button className="me-4 btn btn-danger">&laquo; back</button></Link>
                <Link to='/game'><button className="ms-2 px-4 btn btn-primary">play</button></Link>
              </div>
            </div>
          </div>
            <div className="mx-auto" style={{width:'500px'}}>
                <h2 className='text-center mb-4'>Leader Board</h2>
            <Table striped bordered hover className='leaderboard'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                  {user.map((player) =>{
                      return(
                        <tr key={player.id}>
                          <td className='text-white'>{count++}</td>
                          <td className='text-white'><Link to='/profile'>{player.username}</Link></td>
                          <td className='text-white'>{player.score}</td>
                        </tr>
                      )
                    })}
                </tbody>
            </Table>
            </div>
      </div>
    </div>
  );
}

export default GameDetail;