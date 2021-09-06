// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { DataContext } from '../Context'
// import '../css/Products.css'
// import { Container, Row, Form, Col, Button, Card } from 'react-bootstrap';


// export class ProductDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { pro: [],dtls:[] };

//     }
//     static contextType = DataContext;

//     async componentWillMount() {
//         /*console.log(this.props.match.params.id);
//         // console.log(this.props.match.params.path);  
//         const response = await fetch("http://localhost:8080/eMart/Product/GetProduct/" + this.props.match.params.id);
//         const res = await response.json();
//         // console.log(res);
//         this.setState({ pro: res });*/


//        /* console.log(this.props.match.params.id);
//         // console.log(this.props.match.params.path);  
//         const response1 = await fetch("http://localhost:8080/eMart/ConfigDetails/AllProdDetailsByProdId/" + this.props.match.params.id);
//         const res1 = await response1.json();
//         // console.log(res);
//         this.setState({ dtls: res1 });
// console.log("Details fetched: "+res1);
// console.log("product fetched: "+res);*/

// //var currentCustID = JSON.parse(localStorage.getItem('currentCustID'));
//         const response1=await fetch("http://localhost:8080/eMart/Product/GetProduct/" + this.props.match.params.id);
//         const res1=await response1.json();
//        /* this.setState({cust_Name:res.cust_Name,
//                         cust_PhoneNo:res.cust_PhoneNo,
//                         cust_Address:res.cust_Address,
//                         cust_Email_ID:res.cust_Email_ID,
//                         eMCardNo:res.eMCardNo,
//                         eMartPoints:res.eMartPoints
//                     });*/


//                     const response2=await fetch("http://localhost:8080/eMart/ConfigDetails/AllProdDetailsByProdId/" + this.props.match.params.id);
//                     const res2=await response2.json();


//                     /*this.setState({cust_Name:res.cust_Name,
//                                     cust_PhoneNo:res.cust_PhoneNo,
//                                     cust_Address:res.cust_Address,
//                                     cust_Email_ID:res.cust_Email_ID,
//                                     eMCardNo:res.eMCardNo,
//                                     eMartPoints:res.eMartPoints
//                                 });*/
// console.log("Details fetched: "+res2);
// console.log("product fetched: "+res1);
                    
//     }
//     render() {
//         const { category, addCart } = this.context;

//         return (
//             <div id="product">
//                 <Form inline className="mt-3">
//                     <Container fluid>
//                         <Row className="justify-content-md-center">
//                             <Col md={3}>
//                                 <div className="">
//                                     <label>
//                                         <h4></h4>
//                                     </label>
//                                 </div>
//                             </Col>
//                             <Col xs="auto" className="">
                               
//                             </Col>
//                             <Col md={3}>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Form>
//                 <Container><Row className="justify-content-md-center">
//                     {
//                         this.state.dtls.map(prod => (
//                             // <div className="card" key={prod.prodID}>
//                             //     <Link to={`/${prod.prodID}`}>
//                             //         <img src={prod.productImagePath} alt="" width="60" height="60" />
//                             //     </Link>
//                             //     <div className="content">
//                             //         <h4>
//                             //             <Link to={`/${prod.prodID}`}>{prod.prodName}</Link>
//                             //         </h4>
//                             //         <span>${prod.mrpPrice}</span>
//                             //         <p>{prod.prodShortDesc}</p>
//                             //         <button onClick={() => addCart(prod.prodID)}>Add to cart</button>
//                             //     </div>

//                             // </div>
//                             <Card>
//                                 <Link to={`/${prod.prodID}`}>
//                                     <Card.Img variant="top" src={prod.productImagePath} />
//                                 </Link>
//                                 <Card.Body className="text-center">
//                                     <Card.Title> <Link to={`/${prod.prodID}`}>{prod.prodName}</Link></Card.Title>
//                                     <Card.Text className='text-muted'>${prod.mrpPrice}</Card.Text>
//                                         <Card.Text style={{color:"red"}}>
//                                         <input type="checkbox" value="" id=""  /> eMcard : ${prod.cardholdersPrice} ePts : {prod.pointsToBeRedm}
//                                         </Card.Text>
//                                         <Button variant="info" onClick={() => addCart(prod.prodID)}>Add to cart</Button>
                                    
//                                 </Card.Body>
//                             </Card>
//                         ))
//                     }
//                 </Row>
//                 </Container>
//             </div>

//         )
//     }
// }

// export default ProductDetails;
