import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate, useParams} from 'react-router-dom';
import './pages.css';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { useCookies } from "react-cookie";


export default function ProfilePlayer() {
    const [user, setUser] = useState({})
    const [authenticated, setAuthenticated] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const [cookie, setCookie, removeCookie] = useCookies(['token','data'])

    const token = cookie.token
    const checkAuth = () => {
        const dataParse = cookie.data 
        setData(dataParse)
        if(token) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
            navigate('/login')
        }
    }

    const getUser= () => {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }
        let url = `https://challenge-chapter-9.herokuapp.com/profile/${params.id}`;
        axios.get(url, config)
            .then((response) => {
                setUser(response.data.data)
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {       
        document.title = 'Profile'
        getUser()
        checkAuth()
    }, [params])

    return(
        <Fragment>        
            <div className="section">
                <Form className="container profile-form">
                    <div className='profile-picture'></div>
                    <h1 className="py-4">Player Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={user.email}  disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={user.username} disabled />
                    </Form.Group>
                    <Link to='/gamepage'><button className="me-4 btn btn-danger">&laquo; back</button></Link>              
                </Form>
            </div>
        </Fragment>
    )
}