import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row } from 'react-bootstrap';
import "react-bootstrap/dist/react-bootstrap.min.js";



export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { cate: [] };
    }
    async componentWillMount() {
        const response = await fetch("http://localhost:8080/eMart/Category/DistinctCategories");
        const res = await response.json();
         console.log(res);
        this.setState({cate:res});
    };
    
    static contextType = DataContext;
    

    render() {
        const { category, addCart } = this.context;
        return (
            
            <div id="Home">
                <Carousel style={{ width: '50%' }} >
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="./Images/camerabanner3.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption style={{ color: 'black' }}>
                            <h3></h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="./Images/banner-casio-watches.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption style={{ color: 'black' }}>
                            <h3></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./Images/homefurniturebanner4.jpg"
                            alt=""
                        />
                        <Carousel.Caption style={{ color: 'black' }}>
                            <h3></h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <Container >
                    <Row className="justify-content-md-center">
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
                

                <div>

                </div>
            </div>

        )
    }
}

export default Home
