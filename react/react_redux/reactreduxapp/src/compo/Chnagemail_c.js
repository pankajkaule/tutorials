import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import {Emaila} from "../actions/Email_a";
const Changemailc = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          props.changemail();
        }}
      >
        Change Email
      </Button>
    </div>
  );
};
const mapDispatchToProps = (dispatch ) => {
  return {
    changemail: () => {
      dispatch(Emaila());
    },
  };
};

export default connect(null , mapDispatchToProps)(Changemailc);
