import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate, useParams} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { authenticatedAction } from "../redux/actions/authenticated";
import { getProfilePlayer } from '../redux/actions/profileplayer';
import axios from 'axios'
import './pages.css';

export default function ProfilePlayer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id
    const {token, data} = useSelector((state) => state.authenticatedReducer)
    const { getProfilePlayerEmail, getProfilePlayerUsername } = useSelector((state) => state.ProfilePlayerReducer)

    useEffect(()=> {
        document.title='profile'
        dispatch(authenticatedAction())
        dispatch(getProfilePlayer(id))
      }, [])
    return(
        <Fragment>        
            <div className="section">
                <Form className="container profile-form">
                    <div className='profile-picture'></div>
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