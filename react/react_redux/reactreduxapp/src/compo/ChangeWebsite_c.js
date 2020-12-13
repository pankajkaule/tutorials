import React from 'react';
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import {Websitea} from '../actions/Website_a'
const ChangeWebsite = (props) => {
    return (
        <div>
          <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.changewebsiten();
        }}
      >
        Change website
      </Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changewebsiten: () => {
            dispatch(Websitea())
        }
    }
}
 
 
export default connect(null,mapDispatchToProps)(ChangeWebsite);