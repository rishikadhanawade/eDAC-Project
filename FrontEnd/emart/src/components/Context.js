import React, { Component } from 'react'


export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        totalpts:0,
        cartLen:[],                 //cart logo lenght
        count:1,
        product:[],
        cart: [],
        total: 0,
        Customer:[]
    };


    addCart = (id) =>{
        console.log(id);
        const {product, cart} = this.state;
        const check = cart.every(item =>{
            return item.prodID !== id
        })
        if(check){
            const data = product.filter(product =>{
                return product.prodID === id
            })
            // const x=cartLen+1;
            // localStorage.setItem('cartLen',x);
            this.setState({cart: [...cart,...data]})

        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart,cartLen } = this.state;
        cart.forEach(item =>{
            if(item.prodID === id){
                item.qty === 1 ? item.qty = 1 : item.qty  -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        const cnt=this.state.count;
        cart.forEach(item =>{
            console.log(item);
            if(item.prodID === id){
                item.qty += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart,cartLen} = this.state;
            cart.forEach((item, index) =>{
                if(item.prodID === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart,Dely,Discount} = this.state;
        const res = cart.reduce((prev, item) => {
            return (prev + (item.mrpPrice * item.qty));
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(previousProps, previousState) {
        const{cart,count,Dely,Discount,total,Customer,cartLen} = this.state;
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total));
        
        localStorage.setItem('custData', JSON.stringify(this.state.Customer));

        console.log(cart);
        
    };
    async componentWillMount() {
        fetch("http://localhost:8080/eMart/Product/AllProducts")
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    this.setState({
                        product: result
                    });
                    
                }
                
            );
            console.log();
            fetch("http://localhost:8080/eMart/Customer/AllCustomers")
            .then(res => res.json())
            .then(
                (result1) => {
                    console.log(result1)
                    this.setState({
                        Customer: result1
                    });
                    
                }
                
            );
            

    }
    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }        
    }
   
    onDel= async (c,qty,ttb)=>{
        const {cart,total,Dely,Discount,cartLen} = this.state;
        //this.setState({cartLen:cart});
        //console.log(cartLen);
        //const y=((cart[c-1].mrpPrice)+Dely)-Discount;
        //const y=((ttb+Dely)-Discount);
        //console.log(y);
        const x=(total-ttb);     
        //console.log(x);
        this.setState({total:x});
        //console.log(c-1);
        //const l=cartLen.splice(c-1,1);
        cart.splice(c-1,1);    //For invoice
        
        
        const inv = await fetch("http://localhost:8080/eMart/Invoice/DeleteData/" +c, { method: "DELETE" });
        const car = await fetch("http://localhost:8080/eMart/Cart/DeleteItem/" +c, { method: "DELETE" });
        
        this.setState({cart:cart});
        window.location.reload();
    }
    

    render() {
        const {cart,total,product,count,Dely,Discount,Customer,cartLen,totalpts} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,onDel} = this;
        return (
            <DataContext.Provider 
            value={{addCart, cart, reduction,increase,removeProduct,total,getTotal,product,count,Dely,Discount,Customer,onDel,cartLen,totalpts}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


