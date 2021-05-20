import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Myname_a } from '../actions/Myname_a';

const Changenamec = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.changename();     
        }}
      >
        Change Name
      </Button>
    </div>
  );
};    

const mapDispatchToProps = (dispatch) => {
  return {
    changename: () => {
      dispatch(Myname_a());
    },
  };
};
export default connect(null, mapDispatchToProps)(Changenamec);
