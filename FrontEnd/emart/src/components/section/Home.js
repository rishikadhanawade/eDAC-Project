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
                <Carousel style={{ width: '70%' }} >
                    <Carousel.Item interval={3000}>
                    <a href="/Samsung/1">
                        <img
                            className="d-block w-100"
                            src="./Images/electronicsBanner.jpg"
                            alt="First slide"
                        />
                        </a>
                        <Carousel.Caption style={{ color: 'black' }}>
                            {/* <h3></h3> */}

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                    
                    <a href="/Four%20Seater/50">
                        
                        <img
                            className="d-block w-100"
                            src="./Images/homefurniturebanner4.jpg"
                            alt="Second slide"
                        />
                    </a>
                        <Carousel.Caption style={{ color: 'black' }}>
                            {/* <h3></h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href="/LifeStyle/61">
                        <img
                            className="d-block w-100 "
                            src="./Images/horizontal-banner-online-fashion-sale.jpg"
                            alt=""
                        />
                        </a>
                        <Carousel.Caption style={{ color: 'black' }}>
                            {/* <h3></h3> */}

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
