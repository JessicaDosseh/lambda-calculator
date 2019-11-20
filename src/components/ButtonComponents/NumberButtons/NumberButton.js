import React from "react";

const NumberButton = props => {
  // console.log(props.numbers);
  return <button className="btn number-btn" onClick={() => props.addNumber(props.text)}>{props.button}</button>;
};

export default NumberButton;