import React, { Component } from 'react'
import Products from './section/Products'
//import ProductDetails from './section/ProductDetails'
import { Route } from "react-router-dom"
import Cart from './section/Cart'
//import Payment from './section/Payment'
import Contact from './Contact'
import About from './About'
//import Login from './Login'
import Home from './section/Home'
//import Category from './section/Category'
import Subcategory from './section/Subcategory'
import FurnitureCategory from './section/FurnitureCategory'
import WatchCategory from './section/WatchCategory'
import Invoice from './section/Invoice'
import ElectronicsCategory from './section/ElectronicsCategory' 
import FashionsCategory from './section/FashionsCategory' 
import Form from './section/Form'
import Form2 from './section/Form2'
import ProfilePage from './section/ProfilePage'
import UserProfile from './section/UserProfile'
import Logout from './section/Logout'
//import Details from './section/Details'


export default class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                {/* <Route path="" component={Products} exact /> */}
                {/* <Route path="/Analog/Fastrack/:id" component={Products} exact /> */}
                
                <Route path="/cart" component={Cart} exact />
                {/* <Route path="/payment" component={Payment} /> */}
                <Route path="/contact" component={Contact} exact />
                <Route path="/about" component={About} exact />
                {/* <Route path="/login" component={Login} exact /npm start
                
                
                {/* <Route path="/payment" component={Invoice} /> */}
                
                <Route path="/Signup" component={Form} exact/>
                <Route path="/login" component={Form2} exact/>

                {/* <Route path="/books" component={Category} exact /> */}
                {/* <Route path="/electronics" component={Category} exact /> */}
                
                {/* <Route path="/sports" component={Category} exact /> */}
                {/* <Route path="/Analog/Fastrack/:id" render={(props) => <Subcategory {...props} key={props.match.params.id} exact />}></Route> */}
                <Route exact path="/Watches" render={() => <WatchCategory greet="Watches" />}></Route>
                <Route path="/Analog" render={() => <Subcategory greet="Analog" exact />}></Route>
                <Route path="/Digital" render={() => <Subcategory greet="Digital" exact />}></Route>
                <Route path="/Smart Watches" render={() => <Subcategory greet="Smart Watches" exact />}></Route>
                <Route path="/Fastrack/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Sonata/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Casio/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Fossil/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Apple/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Armani/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>

                <Route path="/Home Furniture" render={() => <FurnitureCategory greet="Home Furniture" exact />}></Route>
                <Route path="/Bed" render={() => <Subcategory greet="Bed" exact />}></Route>
                <Route path="/Sofa" render={() => <Subcategory greet="Sofa" exact />}></Route>
                <Route path="/Dinning set" render={() => <Subcategory greet="Dinning set" exact />}></Route>
                <Route path="/King/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Queen/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Single Double/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Two Seater/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Four Seater/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Sofa-cum-Bed/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Eight Seater/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                
                {/* <Route exact path="/Electronics" render={() => <ElectronicsCategory greet="Electronics"/>}></Route>  */}
                <Route path="/Mobile" render={() => <Subcategory greet="Mobile" exact />}></Route>
                <Route path="/Samsung/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/iPhone/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Redmi/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Oppo/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Vivo/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Nokia/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>


                <Route path="/TV" render={() => <Subcategory greet="TV" exact />}></Route>
                <Route path="/Sony/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/LG/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Panasonic/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                
                {/* <Route path="//:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route> */}
                

                <Route path="/Camera" render={() => <Subcategory greet="Camera" exact />}></Route>
                <Route path="/Canon/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Nikon/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/SJCAM/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/GoPro/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>


                <Route exact path="/Electronics" render={() => <ElectronicsCategory greet="Electronics"/>}></Route> 
                <Route path="/Customer/GetCustomer/:code" component={UserProfile} exact/>
                <Route path="/Profile" component={ProfilePage} exact/>
                <Route path="/Logout" component={Logout} exact/>
                {/* <Route path="/payment" component={Invoice} /> */}
                <Route exact path="/payment/:id" render={(props) => <Invoice {...props} key={props.match.params.id}/>}></Route>


                {/* <Route path="/Sports" render={() => <SportsCategory greet="Sports" exact />}></Route> */}
                <Route path="/Cricket" render={() => <Subcategory greet="Cricket" exact />}></Route>
                <Route path="/Football" render={() => <Subcategory greet="Football" exact />}></Route>
                <Route path="/Badminton" render={() => <Subcategory greet="Badminton" exact />}></Route>
                <Route path="/Bat/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Ball/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
               

                <Route exact path="/Fashion" render={() => <FashionsCategory greet="Fashion"/>}></Route> 
                <Route path="/Men" render={() => <Subcategory greet="Men" exact />}></Route>
                <Route path="/Women" render={() => <Subcategory greet="Women" exact />}></Route>
                <Route path="/Kids" render={() => <Subcategory greet="Kids" exact />}></Route>

                <Route path="/LifeStyle/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/Zara/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                <Route path="/H&M/:id" exact render={(props) => <Products {...props} key={props.match.params.id}/>}></Route>
                
            </section>
        )
    }
}
