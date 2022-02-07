import React from "react";

function Product(props) {
    return (
        < div className="prodcontainer" >
            <h1> Hallo {props.name}</h1>
            <h4>Job: {props.profession}</h4>
            <h6>leeftijd: {props.age}</h6>
            <img className="pic" src={props.foto} alt={props.alt} />
        </div>)
}

export default Product;