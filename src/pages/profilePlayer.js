import { Fragment, useEffect } from "react";
import { Link, useNavigate, useParams} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { authenticatedAction } from "../redux/actions/authenticated";
import { getProfilePlayer } from '../redux/actions/profileplayer';
import './pages.css';

export default function ProfilePlayer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id
    const {token} = useSelector((state) => state.authenticatedReducer)
    const { getProfilePlayerEmail, getProfilePlayerUsername } = useSelector((state) => state.ProfilePlayerReducer)

    useEffect(()=> {
        document.title='profile'
        dispatch(authenticatedAction())
        dispatch(getProfilePlayer(id))
        if(!token){
            navigate('/login')
        }
      }, [])
    return(
        <Fragment>        
            <div className="section">
                <Form className="container profile-form">
                    <div className='profile-picture'>
                        <img 
                            src="https://res.cloudinary.com/alternate-cloud/image/upload/v1656991815/letitimages/stlerdaf9ijhxzqnt7zk.jpg"
                            style={{borderRadius:"50%"}}
                        />
                    </div>
                    <h1 className="py-4">Player Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={getProfilePlayerEmail}  disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={getProfilePlayerUsername} disabled />
                    </Form.Group>
                    <Link to='/gamepage/1'><button className="me-4 btn btn-danger">&laquo; back</button></Link>              
                </Form>
            </div>
        </Fragment>
    )
}