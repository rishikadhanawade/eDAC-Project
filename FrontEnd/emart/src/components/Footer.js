import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'
import './css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export class Footer extends Component {
    static contextType = DataContext;




    render() {
        return (
            <header>
                <div class="center-block">
               
                        <span>
                            <Link to="/contact">Contact</Link>
                        </span>

                        <span>&nbsp;&nbsp;</span>

                        <span>
                            <Link to="/about">About</Link>
                        </span>
                        <br>
                        </br>
                        <span>
                        <span>© Copyrights and disclaimer statement</span>
                        </span>
                </div>

            </header>
        )
    }
}

export default Footer
