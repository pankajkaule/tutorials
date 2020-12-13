import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { changecart } from '../actions/cart_a';

const Changecartvalue = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.changename();     
        }}
      >
        Change cartvalue
      </Button>
    </div>
  );
};    

const mapDispatchToProps = (dispatch) => {
  return {
    changename: () => {
      dispatch(changecart());
    },
  };
};
export default connect(null, mapDispatchToProps)(Changecartvalue);
