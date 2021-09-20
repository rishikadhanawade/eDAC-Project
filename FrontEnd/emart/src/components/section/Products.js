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

                <Container><Row className="justify-content-md-center">
                    {
                        this.state.cate.map(prod => (

                            //<Container className="details cart" key={prod.prodID} >
							<div className="card mb-3" style={{width: '550px', height:'auto'}} key={prod.prodID}>
                                {/* <Row > */}
								<div className="row g-0">
                                    {/* //<Col md-5> */}
									<div className="col-md-5">
                                        {/* //<Figure >
                                        //    <Figure.Image className="shadow p-3 mb-5 bg-white rounded border border-light"
                                        //        src={prod.productImagePath} alt="" />
                                        //</Figure> */}
										<img src={prod.productImagePath} className="img-fluid rounded-start" alt="..."/>
                                    {/* </Col> */}
									</div>
                                    {/* <Col md-7> */}
									<div className="col-md-7">
                                    <div className="row g-0">
                                        {/* //<div> */}
										<div className="card-body">
                                            {/* //<h2>{prod.prodName}</h2> */}
											<h5 className="card-title">{prod.prodName}</h5>
                                        {/* //</div>
										//<p STYLE="font-size:18px">{prod.prodShortDesc}</p> */}
                                        <p className="card-text">{prod.prodShortDesc}</p>
                                        <span STYLE="font-size:15px">Price:  ₹ {prod.mrpPrice}</span>
										</div>
                                        <div className="row mx-3 g-0">
                                        <Button style={{marginTop: '10px'}}variant="info" onClick={() => addCart(prod.prodID)}>Add to cart</Button>
										</div>
										</div>
										
									</div>
								</div>
							</div>
                                    //</Col>
                                //</Row>

                            //</Container>

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
