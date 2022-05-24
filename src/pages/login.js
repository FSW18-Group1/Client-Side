import { Fragment, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './pages.css';
import Navbar from "../component/nav";
import Footer from "../component/footer"
import Submit from "../component/submit";
import NoSubmit from "../component/submitNo";
import axios from "axios";

// class Response extends String{ json = () => JSON.parse(this)}

// const mockFetch = (url, {body}) => {
//     const {email, password} = body
//     if(email !== 'admin@mail.com' || password !== 'admin') {
//         return Promise.reject(new Response('{"error": "invalid user"}', {status:401}))
//     }
//     return Promise.resolve(new Response('{"accessToken": "00-000-21-32314"}', {status:200}))
// }

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = 'https://challenge-chapter-9.herokuapp.com/login';
        const body = {
            username : username,
            email: email,
            password: password
        }
        axios.post(url, body)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.cookie)
                localStorage.setItem('data', JSON.stringify(res.data.data))
                navigate('/home')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        document.title = 'Login'
    }, []);

    return(
        <Fragment>        
        <div className="section banner-bg">
            <Navbar />
            <div className='container ' >
                <div className="form-border mx-auto ">
                    <h1 className="text-center mt-5 fw-bold">Letitgo-games</h1>
                    <h3 className="text-center mb-5 fw-light">Sign In</h3>
                    <form onSubmit={(e) => handleSubmit(e)} > 
                        <div className="mb-4">
                            <input type="text" className="form-input" id="InputEmail1" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-input" id="InputEmail1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <Submit command="SIGN IN" />
                    </form>
                    {/* <NoSubmit command="FORGET PASSWORD ?" /> */}
                </div>
                <div className="form-bottom mx-auto py-2">
                    <p className="text-center py-2" style={{fontSize:'14px'}}>New to Wuci.co?</p>
                    <Link to='/signup'><NoSubmit command="CREATE AN ACCOUNT"  /></Link>
                </div>
            </div> 
        </div>
        <div className="section">
            <Footer />
        </div>
        </Fragment>
    )
}