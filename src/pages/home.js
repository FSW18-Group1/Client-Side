
import { useState, Fragment, useEffect } from 'react';
import {Dropdown} from 'react-bootstrap'
import { Link} from 'react-router-dom';
import Search from '../component/search'
import '../component/component.css';
import axios from 'axios';
import Content from "../component/content";
import Navbar from "../component/nav";
import Footer from "../component/footer"
import './pages.css';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/', true);
xhr.withCredentials = true;
xhr.send(null);


export default function Home() {
    const [user, setUser] = useState(null)

    const getUser= () => {
        let url = 'https://challenge-chapter-9.herokuapp.com/login';
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.get(url, config)
            .then((res) => {
                setUser({
                    user: res.data
                })
                console.log(res)

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        document.title = 'Home'
        getUser();
    }, []);

    return(
        <Fragment>        
        <div className="section banner-bg">
        {user &&
            <div className='d-flex justify-content-between pt-4 mx-3 sticky'>
                <div className='d-flex justify-content-between nav-side' style={{paddingLeft:"5em"}}>
                    <Link to='/'>Letitgo.game</Link>
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
                                <p className='no-space'>{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                            <div className='bottom-line'></div>
                            <Dropdown.Item><Link to='/profile'>Setting</Link></Dropdown.Item>
                            <Dropdown.Item>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </>   
                </div>
            </div>
        }
        {!user &&
            <Navbar />
        }
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