import React from "react";
import { connect } from "react-redux";
const Name_c = (props) => {
  console.log(props);
  return <div>
<h1>Name_c accessed ---- name is :: {props.name}</h1>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    name: state.name1,
  };
};

export default connect(mapStateToProps)(Name_c);
