import React from "react";
import { connect } from "react-redux";
const cart = (props) => {
  console.log(props);
  return <div>
<h1>products in the cart are :: {props.cart}</h1>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(cart);
