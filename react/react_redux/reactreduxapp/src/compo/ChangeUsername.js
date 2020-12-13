import React from "react";
import { Button } from "@material-ui/core";
import { Myusernamea } from "../actions/Myusername_a";
import { connect } from "react-redux";

const ChangeUsername = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.ChangeUsernamef();
        }}
      >
        Change username
      </Button>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ChangeUsernamef: () => {
      dispatch(Myusernamea());
    },
  };
};

export default connect(null, mapDispatchToProps)(ChangeUsername);
