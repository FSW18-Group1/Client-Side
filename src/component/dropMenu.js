import {  Fragment } from 'react';
import {Dropdown} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom';
import Search from '../component/search'
import '../component/component.css';
import anonim from '../assets/anonim.jpg'

export default function DropMenu(props) {
    const {user} = props
    const Navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        Navigate('/login')
    }
    console.log('drop Menu',user)
    const src = localStorage.getItem('src')

    return(
        <div className='d-flex justify-content-between pt-4 mx-3 sticky'>
                <div className='d-flex justify-content-between nav-side' style={{paddingLeft:"5em"}}>
                    <Link to='/'>Letitgo-game</Link>
                    <p >| home</p>
                </div>
                <div className='search'>
                    <Search />
                </div>
                <div className='d-flex justify-content-between nav-side' style={{paddingRight:"2em"}}>
                    <>
                    <Dropdown>
                        <Dropdown.Toggle className='profile-button' id="dropdown-basic">
                            <img className="profile" src={src} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className='text-center mx-3'>
                                { <p className='no-space'>{user?.username}</p> }
                                { <p>{user?.email}</p> }
                            </div>
                            <div className='bottom-line'></div>
                            <Dropdown.Item><Link to='/profile'>Setting</Link></Dropdown.Item>
                            <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </>   
                </div>
            </div>
    )
}