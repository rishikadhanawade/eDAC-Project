import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'
import { Footer } from 'react-bootstrap'
import './css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 
export class Footer1 extends Component {
    static contextType = DataContext;
    render() {
        return (
            <header>
                <footer className="footer-container fixed-bottom">
                 <div className="container-fluid" style={{backgroundColor: '#343a40'}}>
                <ul className="nav justify-content-center footer-ul">
                        <li className=""><a href="/"  className="nav-link px-2 text-light">Home</a></li>
                        <li className=""><a href="/contact" className="nav-link px-2 text-light">ContactUs</a></li>
                        <li className=""><a href="/About" className="nav-link px-2 text-light">About</a></li>
                        <li className=""><p className="nav-link px-2 text-light">© 2021 eMART.com</p></li>
                </ul>
                </div>
                </footer>
            </header>
           
        )
    }
} 

export default Footer1
