import { Fragment } from "react";
import { Link} from 'react-router-dom';
import './pages.css';
import Navbar from "../component/nav";
import Footer from "../component/footer"
import Submit from "../component/submit";
import NoSubmit from "../component/submitNo";

export default function Login() {
    return(
        <Fragment>        
        <div className="section banner-bg">
            <Navbar />
            <div className='container ' >
                <div className="form-border mx-auto ">
                    <h1 className="text-center mt-5 fw-bold">Woku.co</h1>
                    <h3 className="text-center mb-5 fw-light">Create Account</h3>
                    <form > 
                        <div className="mb-4">
                            <input type="text" className="form-input" id="InputUsername" placeholder="Username" required />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-input" id="InputEmail1" placeholder="Email" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassword" placeholder="Password" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassworConfirmation" placeholder="Password Confirmation" required />
                        </div>
                        <Submit command="CREATE ACCOUNT" />
                    </form>
                </div>
                <div className="form-bottom mx-auto py-2">
                    <p className="text-center py-2" style={{fontSize:'14px'}}>Already a member?</p>
                    <Link to='/login'><NoSubmit command="SIGN IN"  /></Link> 
                </div>
            </div> 
        </div>
        <div className="section">
            <Footer />
        </div>
        </Fragment>
    )
}