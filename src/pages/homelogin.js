
import { useState, Fragment, useEffect } from 'react';
import {Dropdown} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom';
import Search from '../component/search'
import '../component/component.css';
import axios from 'axios';
import Content from "../component/content";
import Navbar from "../component/nav";
import Footer from "../component/footer"
import './pages.css';
import { useCookies } from 'react-cookie';

export default function Homepage() {
    const [authenticated, setAuthenticated] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [cookie,setCookie,removeCookie] = useCookies(['token','data'])

    const checkAuth = () => {
        const token = cookie.token
        const dataParse = cookie.data
        setData(dataParse)
        console.log(dataParse)
        if(token) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
            navigate('/login')
        }
    }

    const logout = () => {
        removeCookie('token')
        removeCookie('data')
        setAuthenticated(false)
        navigate('/login')
    }
    

    useEffect(() => {
        document.title = 'Home'
        checkAuth()
    }, [])

    return(
        <Fragment>        
        <div className="section banner-bg">
            <div className='d-flex justify-content-between pt-4 mx-3 sticky'>
                <div className='d-flex justify-content-between nav-side' style={{paddingLeft:"5em"}}>
                    <Link to='/home'>Letitgo-game</Link>
                    <p >| home</p>
                </div>
                <div className='search'>
                    <Search />
                </div>
                <div className='d-flex justify-content-between nav-side' style={{paddingRight:"2em"}}>
                    <>
                    <Dropdown>
                        <Dropdown.Toggle className='profile' id="dropdown-basic">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className='text-center mx-3'>
                                { <p className='no-space'>{data?.username}</p> }
                                { <p>{data?.email}</p> }
                            </div>
                            <div className='bottom-line'></div>
                            <Dropdown.Item><Link to='/profile'>Setting</Link></Dropdown.Item>
                            <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </>   
                </div>
            </div>
            <div className="banner">
                <h1 style={{fontSize:'64px', letterSpacing: "3px"}}>Play Free HD Games <br/> And Many Videos</h1>
                <p>Enjoy your unlimited games and entertain post videos collection. We re the definitive source for the best curated games. playable on laptop, pc, wooden pc, anymore</p>
            </div>
        </div>
        <div className="section">
            <Content />
        </div>
        <div className="section">
            <Footer />
        </div>
        </Fragment>
    )
}