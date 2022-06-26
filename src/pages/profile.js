import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import './pages.css';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

export default function Profile() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return(
        <Fragment>        
            <div className="section">
                <Form className="container profile-form" onSubmit={handleSubmit}>
                    <div className='profile-picture'></div>
                    <h1 className="py-4">Edit Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                    </Form.Group>
                    <div className="d-flex justify-content-start">
                        <Link to='/'><button className="me-4 btn btn-danger">&laquo; back</button></Link>
                        <Button variant="primary" type="submit">
                            Edit data
                        </Button>
                    </div>               
                    
                </Form>
            </div>
        </Fragment>
    )
}