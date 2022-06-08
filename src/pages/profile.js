import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import './pages.css';
import {Form, Button, Dropdown} from 'react-bootstrap'
import axios from 'axios'
import { useCookies } from "react-cookie";


export default function Profile() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [id, setId] = useState('')
    const navigate = useNavigate()
    const [cookie, setCookie, removeCookie] = useCookies(['token','data'])
  

    const getData = () => {
        const dataParse = cookie.data 
        setId(dataParse.id)
        setEmail(dataParse.email)
        setUsername(dataParse.username)
    }

    useEffect(() => {
        document.title = 'Profile'
        getData()
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = cookie.token

        const data = {
            id: id,
            username: username,
            email: email,            
        }
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }
        console.log(data)
        // console.log(config)

        axios.put(`https://challenge-chapter-9.herokuapp.com/profile/${id}`, data, config )
        .then(res => {
            removeCookie('data')
            setCookie('data',data)
            navigate('/home')
        })
        .catch(
            err =>{
                alert(err)
                // if(err.response.status == 403){
                //     localStorage.removeItem('token')
                //     localStorage.removeItem('data')
                //     removeCookie("username")
                //     removeCookie("email")
                //     removeCookie("password")
                //     navigate('/login')
                // }

            } 
        )

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
                        <Link to='/home'><button className="me-4 btn btn-danger">&laquo; back</button></Link>
                        <Button variant="primary" type="submit">
                            Edit data
                        </Button>
                    </div>               
                    
                </Form>
            </div>
        </Fragment>
    )
}