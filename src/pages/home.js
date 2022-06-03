
import { Fragment } from 'react';
import Search from '../component/search'
import '../component/component.css';
import Content from "../component/content";
import Navbar from "../component/nav";
import Footer from "../component/footer"
import './pages.css';

export default function Home() {

    return(
        <Fragment>        
        <div className="section banner-bg">
            <Navbar />
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