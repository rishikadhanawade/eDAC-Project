import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'
import './css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 
export class Footer extends Component {
    static contextType = DataContext;
    render() {
        return (
            <header>
                <div className="footer-container" style={{backgroundColor: '#343a40'}} >
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-">
                        <li className="nav-item" ><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">ContactUs</a></li>
                        <li className="nav-item"><a href="/About" className="nav-link px-2 text-muted">About</a></li>
                        </ul>
                        <p className="text-center text-muted">© 2021 Company, Inc</p>
                    </footer>
                    </div>
            </header>
        )
    }
} 

export default Footer
