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
                {/* <div className="footer-container" style={{backgroundColor: '#343a40'}} >
                    <footer className>
                        <ul className="nav justify-content-center border-bottom pb-3 mb-">
                        <li className="nav-item" ><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">ContactUs</a></li>
                        <li className="nav-item"><a href="/About" className="nav-link px-2 text-muted">About</a></li>
                        <li className="nav-item"><p className="nav-link px-2 text-muted">© 2021 Company, Inc</p></li>
                        </ul>
                    </footer>
                </div> */}
                 <div className="container-fluid" style={{backgroundColor: '#343a40'}}>
                <ul className="nav justify-content-center border-bottom pb-3 mb-">
                        <li className=""><a href="/"  className="nav-link px-2 text-light">Home</a></li>
                        <li className=""><a href="/contact" className="nav-link px-2 text-light">ContactUs</a></li>
                        <li className=""><a href="/About" className="nav-link px-2 text-light">About</a></li>
                        <li className=""><p className="nav-link px-2 text-light">© 2021 eMART.com</p></li>
                </ul>
                </div>
            </header>
           
        )
    }
} 

export default Footer
