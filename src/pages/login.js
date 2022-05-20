import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import './pages.css';
import Navbar from "../component/nav";
import Footer from "../component/footer"
import Submit from "../component/submit";
import NoSubmit from "../component/submitNo";

class Response extends String{ json = () => JSON.parse(this)}

const mockFetch = (url, {body}) => {
    const {email, password} = body
    if(email !== 'admin@mail.com' || password !== 'admin') {
        return Promise.reject(new Response('{"error": "invalid user"}', {status:401}))
    }
    return Promise.resolve(new Response('{"accessToken": "00-000-21-32314"}', {status:200}))
}

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = 'http://gulugulu/login';
        const body = {body: {
            email,
            password
        }}
        mockFetch(url, body)
            .then(res => {
                return res.json()
            })
            .then(data => {
                if(data.error) {
                    throw(data)
                } else {
                    localStorage.setItem('token', data.accessToken)
                    alert('masuk')
                    // navigate('/game')
                    this.props.history.push('/')
                }
            })
            .catch(err => {
                alert(err.error)
            })
    }
    return(
        <Fragment>        
        <div className="section banner-bg">
            <Navbar />
            <div className='container ' >
                <div className="form-border mx-auto ">
                    <h1 className="text-center mt-5 fw-bold">Woku.co</h1>
                    <h3 className="text-center mb-5 fw-light">Sign In</h3>
                    <form onSubmit={(e) => handleSubmit(e)} > 
                        <div className="mb-4">
                            <input type="email" className="form-input" id="InputEmail1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <Submit command="SIGN IN" />
                    </form>
                    <NoSubmit command="FORGET PASSWORD ?" />
                </div>
                <div className="form-bottom mx-auto py-2">
                    <p className="text-center py-2" style={{fontSize:'14px'}}>New to Woku.co?</p>
                    <NoSubmit command="CREATE AN ACCOUNT"  />
                </div>
            </div> 
        </div>
        <div className="section">
            <Footer />
        </div>
        </Fragment>
    )
}