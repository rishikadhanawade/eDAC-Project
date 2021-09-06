import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Products.css'

export class Subcategory extends Component {
    constructor(props) {
        super(props);
        this.state = { categ: [] };
    }
    async componentWillMount() {
        console.log(this.props.greet);
        // console.log(this.props.match.params.path);  
        const response = await fetch("http://localhost:8080/eMart/Category/subCatPro/" + this.props.greet);
        const res = await response.json();
        console.log(res);
        this.setState({ categ: res });
    };

    static contextType = DataContext;


    render() {
        const {} = this.context;
        return (

            <div id="Subcategory">
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
                <Container >
                    <Row className="justify-content-md-center">
                        {
                            this.state.categ.map(category => (
                                <div className="card" key={category.categoryName}>
                                    <Link to={`/${category.categoryName}/${category.catmasterID}`}>
                                        <img src={category.catImagePath} alt="" width="60" height="60" />
                                    </Link>
                                    <div className="content">
                                        <h4 style={{ marginTop: '50px' }}>
                                            <Link to={`/${category.categoryName}/${category.catmasterID}`}>{category.categoryName}</Link>
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

// function Subcategory() {
//     useEffect(() => {
//         fetchSubcat();
//     }, []);

//     const [items, setItems] = useState([]);

//     const fetchSubcat = async () => {
//         const data = await fetch(
//             "http://localhost:8080/eMart/Category/DistinctsubCategories"
//         );

//         const items = await data.json();
//         setItems(items);
//         console.log(items);
//     }
//     return (
//         <div>
//             {
//                 items.map(item => (
//                     <Container >
//                         <Row className="justify-content-md-center">
//                             <div className="card">
//                                 <Link to={`/${item.categoryName}`}>
//                                     <img src={item.catImagePath} alt="" width="60" height="60" />
//                                 </Link>
//                                 <div className="content">
//                                     <h3>
//                                         <Link to={`/${item.categoryName}`}>{item.categoryName}</Link>
//                                     </h3>

//                                 </div>

//                             </div>
//                         </Row>
//                     </Container>
//                 ))
//             }
//         </div>
//     )
// }
export default Subcategory;