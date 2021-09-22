import React from "react";
import "./css/Contact.css";
import { Form , Button} from "react-bootstrap";


export default class Contact extends React.Component {
  render() {
    
    return (
      <div id="contact">
        
        <section className="form-section">
        <h2 align="center">Contact Us</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-6">       
                    <Form action="">
                        <div className="row mb-2 g-5">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Full name*"/>
                            </div>
                            <div className="col-6">
                                <input type="email" className="form-control" placeholder="Email Address*"/>
                            </div>
                        </div>

                        <div className="row mb-2 g-2">
                            <div className="col-6">
                                <input type="number" className="form-control" placeholder="Contact Number *"/>
                            </div>
                            <div className="col-6">
                                <input type="city" className="form-control" placeholder="City*"/>
                            </div>

                        </div>
                        <div className="row my-2">
                            <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Subject*"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-12 text-center">
                                <Button type="submit" className="btn btn-primary">Send
                                    Message</Button>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="col-md-6">
                    <h5>Call Us / WhatsApp</h5>
                    <p>tel:+918465552010</p>
                    <h5>Email / Website</h5>
                    <p>
                        <a href="mailto:wondermartinfo@gmail.com">emartinfo@gmail.com</a><br/>
                        <a href="https://wondermartinfo.com/">www.emartinfo.com</a>
                    </p>
                    <h5>Working hours</h5>
                    <p>
                        Mon - Fri : 9am - 6pm(IST)
                    </p>
                    <h5>Address</h5>
                    <p>
                        VITA edac course , Mumbai - 400104, Maharashtra
                    </p>
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  }
}
