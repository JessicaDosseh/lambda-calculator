import React from "react";

{/* Display a button element rendering the data being passed down from the parent container on props */}

const SpecialButton = props => {
  return <button className="btn special-btn">{props.specials}</button>;
};

export default SpecialButton;