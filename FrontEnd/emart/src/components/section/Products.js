import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import Figure from 'react-bootstrap/Figure'
import { Container, Row, Form, Col, Button, Card } from 'react-bootstrap';


export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { cate: [] };

    }
    static contextType = DataContext;

    async componentWillMount() {
        console.log(this.props.match.params.id);
        // console.log(this.props.match.params.path);  
        const response = await fetch("http://localhost:8080/eMart/Product/SpecificBrandProd/" + this.props.match.params.id);
        const res = await response.json();
        // console.log(res);
        this.setState({ cate: res });
    }
    render() {
        const { category, addCart } = this.context;

        return (
            <div id="product">
                <Form inline className="mt-3">
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col md={3}>
                                <div className="">
                                    <label>
                                        <h4></h4>
                                    </label>
                                </div>
                            </Col>
                            <Col xs="auto" className="">
                                <Form.Label htmlFor="brand" srOnly className="">Brand</Form.Label>
                                <Form.Control id="filter1" placeholder="Brand" />
                                {/* <Form.Label htmlFor="price" srOnly className=""> Price </Form.Label>
                                <Form.Control id="filter2" placeholder="Price" /> */}
                                <Button type="submit" className="btn btn-dark"> Apply </Button>
                            </Col>
                            <Col md={3}>
                            </Col>
                        </Row>
                    </Container>
                </Form>
                <Container><Row className="justify-content-md-center">
                    {
                        this.state.cate.map(prod => (
                      
                            <Container className="details cart" key={prod.prodID} >
                                <Row >
                                    <Col md={4}>
                                        <Figure >
                                            <Figure.Image className="shadow p-3 mb-5 bg-white rounded border border-light"
                                                src={prod.productImagePath} alt="" />
                                        </Figure>
                                    </Col>
                                    <Col md={7}>

                                        <div>
                                            <h2>{prod.prodName}</h2>
                                        </div>


                                        <span STYLE="font-size:25px">Price:  ₹ {prod.mrpPrice}</span>

                                        <br></br>


                                        <p STYLE="font-size:18px">{prod.prodShortDesc}</p>


                                    </Col>
                                    <Button variant="info" onClick={() => addCart(prod.prodID)}>Add to cart</Button>
                                </Row>

                            </Container>

                            // <Card style={{ width: '18rem' }}>
                            //     {/* <Link to={`/${prod.prodID}`}> */}
                            //     <Card.Img variant="top" src={prod.productImagePath} />
                            //     {/* </Link> */}
                            //     <Card.Body className="text-center">
                            //         {/* <Card.Title> <Link to={`/${prod.prodID}`}>{prod.prodName}</Link></Card.Title> */}
                            //         <Card.Title> {prod.prodName}</Card.Title>
                            //         <Card.Text className='text-muted'> ₹{prod.mrpPrice}</Card.Text>
                            //         {/* <Card.Text>{prod.prodShortDesc}</Card.Text> */}
                            //         <Card.Text style={{ color: "red" }}>
                            //         {/* <input type="checkbox" value="" id="" /> eMcard :  ₹{prod.cardholdersPrice} ePts :  ₹{prod.pointsToBeRedm} */}
                            //         </Card.Text>
                            //         <Button variant="info" onClick={() => addCart(prod.prodID)}>Add to cart</Button>

                            //     </Card.Body>
                            // </Card>
                        ))
                    }
                </Row>
                </Container>
            </div>

        )
    }
}

export default Products
