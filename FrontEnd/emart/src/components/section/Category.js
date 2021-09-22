import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';


export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { cate: [] };
    }
    async componentWillMount() {
        console.log(this.props.match.params.id);
        const response = await fetch("http://localhost:8080/eMart/Category/DistinctsubCategories");
        const res = await response.json();
        console.log(res);
        this.setState({ cate: res });
    };
   
    static contextType = DataContext;
    render() {
        // const {} = this.context; 
        return (

            <div id="category">
                <Form inline className="mt-3">
                    <Container fluid>
                        <Row>
                            <Col md={3}>
                                <div className="">
                                    <label>
                                    <h2 id='italic'><b>{this.props.greet}</b></h2>
                                    </label>
                                </div>
                            </Col>
                            {/* <Col xs="auto" className="">
                                <Form.Label htmlFor="brand" srOnly className="">Brand</Form.Label>
                                <Form.Control id="filter1" placeholder="Brand" />
                                <Form.Label htmlFor="price" srOnly className=""> Price </Form.Label>
                                <Form.Control id="filter2" placeholder="Price" />
                                <Button type="submit" className="btn btn-dark"> Apply </Button>
                            </Col> */}
                            {/* <Col md={3}>
                            </Col> */}
                        </Row>
                    </Container>
                </Form> 
                <Container><Row >
                    {
                        this.state.cate.map(category => (
                            <div className="card">
                                <Link to={`/Watches/${category.categoryName}`}>
                                    <img src={category.catImagePath} alt="" width="100%" height="100%" />
                                </Link>
                                <div className="content">
                                    <h4 style={{ marginTop: '50px' }}> 
                                        <Link to={`/Watches/${category.categoryName}`}>{category.categoryName}</Link>
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

export default Category



// const routes = [
//     {
//         path: "/watch/Analog",
//         component: Bus
//     },
//     {
//         path: "/watch/Digital",
//         component: Bus
//     }

// ];
// function RouteWithSubRoutes(route) {
//     return (
//         <Route
//             path={route.path}
//             render={props => (
//                 <route.component {...props} routes={route.routes} />
//             )}
//         />
//     );
// }

