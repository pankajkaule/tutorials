import React from "react";

import { connect } from "react-redux";
const Email_c = (props) => {
  return (
    <div>
      <h1>email component accessed email is :: {props.email}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

export default connect(mapStateToProps)(Email_c);
