import React, { Component } from 'react'
import Home from './svg/emartHome.svg'
import CartIcon from './svg/cartIcon.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


export class Header extends Component {
    static contextType = DataContext;

    render() {
        // eslint-disable-next-line no-unused-vars
        const { cart, cartLen } = this.context;

        var currentCustID;
        var isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        if (isLoggedIn) {
            // eslint-disable-next-line no-unused-vars
            currentCustID = JSON.parse(localStorage.getItem('currentCustID'));
        }


        return (
            <div>
                {/* <Navbar className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}} expand="lg"> */}
                <Navbar fixed="top" bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link href="/"><img width="70" src={Home} alt="emart" /></Nav.Link>

                            <Nav.Link href="/Electronics">Electronics</Nav.Link>
                            <Nav.Link href="/Home Furniture">Home Furniture</Nav.Link>
                            <Nav.Link href="/Fashion">Fashion</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            {isLoggedIn === false ? <Nav.Link href="/Signup">Signup</Nav.Link> : <Nav.Link href="/Logout">Logout</Nav.Link>}

                            {isLoggedIn === true ? <Nav.Link href="/Profile">Profile</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
                        </Nav>
                        <Nav className="colr">


                            {isLoggedIn === true ? <Link to="/cart"><img src={CartIcon} alt="" width="20" /></Link> : " "}
                            {isLoggedIn === true ? <span>{cart.length}</span> : " "}

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default Header
