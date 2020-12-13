import React from "react";
import { connect } from "react-redux";
const Usernamec = (props) => {
  return (
    <div>
      <h1>username component  accessed username is :: {props.username}</h1>
    </div>
  );
}; 

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(Usernamec);
