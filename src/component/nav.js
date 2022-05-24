import { Link} from 'react-router-dom';
import Search from './search'
import './component.css';
import {Dropdown} from 'react-bootstrap'
import { useState, Fragment, useEffect } from 'react';
import axios from 'axios';

export default function Navbar() {

    return(
        <div className='d-flex justify-content-between pt-4 mx-3 sticky'>
            <div className='d-flex justify-content-between nav-side' style={{paddingLeft:"5em"}}>
                <Link to='/'>Wuci.co</Link>
                <p >| home</p>
            </div>
            <div className='search'>
                <Search />
            </div>
            <div className='d-flex justify-content-between nav-side' style={{paddingRight:"2em"}}>
                <>
                    <Link to='/login'>SIGN IN</Link> 
                    <Link to='/signup'>CREATE ACCOUNT</Link> 
                </>   
            </div>
        </div>
    )
}