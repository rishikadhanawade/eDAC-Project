import React, { Component } from 'react';
import { Accordion, Card, Button, Container, Row, Col,Nav,Tabs,Tab,Modal} from 'react-bootstrap'

export class Logout extends Component 
{
    constructor(props)
    {
        super(props);
            this.state = {
                         show: false
                      }
        
    }

    onLogout=()=>{
         localStorage.setItem('isLoggedIn',false);
         this.setState({show: true});
         
    }

    onClose=()=>{
        
        this.setState({show: false});
        window.location.href='/';  
    }
    render()
    {
       return(
           <div>
               <Container>
                   <Row className="justify-content-md-center">
               <Card>
                    <Card.Body>
                    <Card.Title> Are you sure you want to logout?</Card.Title>
                    <Button variant="primary" onClick={this.onLogout}>Logout</Button>
                    </Card.Body>
                </Card>
                <Modal
                    show={this.state.show}
                    onHide={this.onClose}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header closeButton>
                <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                         Successfully logged out..!! Come back soon..!! 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.onClose}>Ok</Button>
            </Modal.Footer>
      </Modal>
      </Row>
      </Container>
            </div>
       )
   }
}

export default Logout