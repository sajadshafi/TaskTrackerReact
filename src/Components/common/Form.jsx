import React from "react";
import "./styles.css";

const Input = ({label, name, inputtype, placeholder, OnChange, value_text}) => {
    return ( 
        <React.Fragment>
            <div className="form-group add-task-input">
                { label && <label htmlFor={name} className="form-label">{label}</label> }
                <input value={value_text} onChange={OnChange} type={inputtype} placeholder={placeholder} name={name} className="form-control" id={name}/>
            </div>
        </React.Fragment> 
    );
}

const SelectType = ({label, name, options}) => {
    return ( 
        <React.Fragment>
            <div className="form-group">
                { label && <label htmlFor={name} className="form-label">{label}</label> }
                <select name={name} className="form-control" id={name}>
                    {options.forEach(option => {
                       <option id={option.id} key={option.id}>option.value</option> 
                    })}
                </select>
            </div>
        </React.Fragment> 
    );
}
 
export default Input;
export {SelectType};