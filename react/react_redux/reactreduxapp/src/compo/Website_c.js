import React from "react";
import { connect } from "react-redux";
const Website_c = (props) => {
  console.log(props);
  return (
    <div>
      <h1>website component acccessed website is :: {props.website}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    website: state.website,
  };
};

export default connect(mapStateToProps)(Website_c);
