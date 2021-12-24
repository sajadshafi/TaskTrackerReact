import React from "react";
import "./styles.css";

const Button = ({type, btntype, text}) => {

    return ( 
        <React.Fragment>
            <button type={type} className={"btn btn-"+btntype}>{text}</button>
        </React.Fragment>
     );
}
 
export default Button;