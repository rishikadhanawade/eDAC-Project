export default function validatelogin(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    const custData = JSON.parse(localStorage.getItem('custData'));
    console.log(custData);
    custData.forEach(data => {
        //console.log("Hii");
        if (data.cust_Email_ID === values.email && data.cust_Password === values.password) {
            localStorage.setItem('currentCust', JSON.stringify(data));
            console.log("cust id is: "+JSON.stringify(data.custid));
           localStorage.setItem('currentCustID', JSON.stringify(data.custid));
            errors={};
            custData.length=0;
        }
        else if (data.cust_Email_ID !== values.email || data.cust_Password !== values.password) {
            errors.password = 'Invalid username or Password';
            //console.log('false')
        }

    })
    return errors;
}
