import React from "react";
import "./css/Contact.css";
import { Form , Button} from "react-bootstrap";


export default class Contact extends React.Component {
  render() {
    
    return (
      <div id="contact">
        
       <Form onSubmit={this.gotEmail}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Form.Text className="text-muted">
                       Please enter your message for us
                    </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit"  onClick={this.onSubmit}>
                    Submit
                </Button>
        </Form>
      </div>
    );
  }
}
