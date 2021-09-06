import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Container, Row, Col,Nav,Tabs,Tab } from 'react-bootstrap'
import UserProfile from './UserProfile';
import Logout from './Logout';
import OrderDetail from './OrderDetail';


export class ProfilePage extends Component {
    
    render() {
   
        return (
            <div>
               

<Tabs defaultActiveKey="UserProfileKey" id="uncontrolled-tab-example">
<button>Logout</button>
  <Tab eventKey="UserProfileKey" title="My Account">
    <UserProfile />
  </Tab>
  <Tab eventKey="InvoiceDataKey" title="My Orders">
  <OrderDetail />
  </Tab>
  <Tab eventKey="LogoutDataKey" title="Logout">
    <Logout/>
  </Tab>
</Tabs>
            </div>
        )
    }
}

export default ProfilePage
