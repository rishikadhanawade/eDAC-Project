import React from 'react'
import { useEffect } from 'react'
import { DataContext } from './components/Context'

// export default class Trial extends React.Component{
//     static contextType = DataContext;
//     render(){
//         const { products } = this.context;
//         return(
//             <div id="product">
//                 {
//                     products.map(data => (
//                         <h4>{data.color}</h4>
//                     ))
//                 }
//             </div>
//         )
//     }
// }
export default function Trial(){
    useEffect=()=>{
        fetchitems()
    }

    const fetchitems=()=>{
        
    }
}
