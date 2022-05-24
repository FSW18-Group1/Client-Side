import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import './pages.css';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'


export default function Profile() {
    const [authenticated, setAuthenticated] = useState(false)
    const [data, setData] = useState({})
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [id, setId] = useState('')
    const navigate = useNavigate()

    const checkAuth = () => {
        const token = localStorage.getItem('token')
        const dataParse = JSON.parse(localStorage.getItem('data')) 
        setData(dataParse)
        setId(data.id)
        setA(data.email)
        setB(data.username)
        console.log(id)
        if(token) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
            navigate('/login')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let url = 'https://challenge-chapter-9.herokuapp.com/profile'
        const form = {
            username: b,
            email: a,
        }
        axios.put(`https://challenge-chapter-9.herokuapp.com/profile/${id}`, form)
        .then(res => {
            navigate('/home')
        })
        .catch(
            err => console.log(err)
        )

    }

    useEffect(() => {
        checkAuth()
    }, [])

    return(
        <Fragment>        
            <div className="section">
                <Form className="container" onSubmit={handleSubmit}>
                    <h1 className="py-4">Edit Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={a} onChange={(e) => {setA(e.target.value)}}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={b} onChange={(e) => {setB(e.target.value)}} />
                    </Form.Group>               
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Fragment>
    )
}