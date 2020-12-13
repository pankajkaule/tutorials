import React from "react";
import { Button } from "@material-ui/core";
import { Phonea } from "../actions/Phonea";
import { connect } from "react-redux";

const ChangePhone = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.ChnagePhoneno();
        }}
      >
        Change phone
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ChnagePhoneno: () => {
      dispatch(Phonea());
    },
  };
};

export default connect(null, mapDispatchToProps)(ChangePhone);
