import { Link} from 'react-router-dom';
import Search from './search'
import './component.css';
import {Dropdown} from 'react-bootstrap'
import { useState, Fragment } from 'react';

export default function Navbar() {
    const [login, setLogin] = useState(false)

    return(
        <div className='d-flex justify-content-between pt-4 mx-3 sticky'>
            <div className='d-flex justify-content-between nav-side' style={{paddingLeft:"5em"}}>
                <Link to='/'>Woku.co</Link>
                <p >| home</p>
            </div>
            <div className='search'>
                <Search />
            </div>
            <div className='d-flex justify-content-between nav-side' style={{paddingRight:"2em"}}>
                {!login && 
                    <>
                        <Link to='/login'>SIGN IN</Link> 
                        <Link to='/signup'>CREATE ACCOUNT</Link> 
                    </>
                }
                {login &&
                    <Dropdown>
                        <Dropdown.Toggle className='profile' id="dropdown-basic">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className='text-center mx-3'>
                                <p className='no-space'>name user here</p>
                                <p>emailplace@mail.com</p>
                            </div>
                            <div className='bottom-line'></div>
                            <Dropdown.Item><Link to='/profile'>Setting</Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                }
            </div>
        </div>
    )
}