import React from "react";

{/* Display a button element rendering the data being passed down from the parent container on props */}

const OperatorButton = props => {
    return <button className="btn operator-btn">{props.operators.value}</button>;
};

export default OperatorButton;; 