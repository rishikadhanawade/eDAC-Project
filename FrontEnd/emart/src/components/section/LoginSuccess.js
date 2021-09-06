import React,{ useState, useEffect } from 'react';
import '../css/Form.css';

class LoginSuccess extends React.Component{
 
    componentWillMount(){
        localStorage.setItem('isLoggedIn',true);
        window.location.href='/';


    };
    
    render(){
    return(
            <div></div>
    )
}

}

export default LoginSuccess;
