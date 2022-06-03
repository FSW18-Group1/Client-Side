import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import './pages.css';


export default function Error() {

    useEffect(() => {
        document.title = 'Error'
    }, []);

    return(
        <Fragment>        
            <div className="section">
                <h1>404 NOT FOUND</h1>
            </div>
        </Fragment>
    )
}