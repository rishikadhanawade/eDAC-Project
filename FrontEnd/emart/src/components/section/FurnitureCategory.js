import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';


export class FurnitureCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { cate: [] };
    }
    async componentWillMount() {
        console.log(this.props.greet);
        const response = await fetch("http://localhost:8080/eMart/Category/DistinctsubCategories/"+this.props.greet);
        const res = await response.json();
        console.log(res);
        this.setState({ cate: res });
    };
   
    static contextType = DataContext;
    render() {
        const { category, addCart } = this.context;
        return (

            <div id="category">
                <Form inline className="mt-3">
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col md={3}>
                                <div className="">
                                    <label>
                                    <h2 style={{fontFamily:"Times New Roman"}}><b>{this.props.greet}</b></h2>
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
                        this.state.cate.map(category => (
                            <div className="card">
                                <Link to={`/${category.categoryName}`}>
                                    <img src={category.catImagePath} alt="" width="60" height="60" />
                                </Link>
                                <div className="content">
                                    <h4 style={{ marginTop: '50px' }}> 
                                        <Link to={`/${category.categoryName}`}>{category.categoryName}</Link>
                                    </h4>
                                </div>

                            </div>
                        ))
                    }
                </Row>
                </Container>
                {/* {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))} */}
               
            </div>

        )
    }
}

export default FurnitureCategory
