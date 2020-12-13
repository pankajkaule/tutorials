import React from "react";
import { connect } from "react-redux";
const Phonec = (props) => {
  return (
    <div>
      <h1>Phone component accessed phone is :: {props.phone}</h1>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     prop: state.name,
//   };
// };
const mapStateToProps = (state, ownProps) => {
    return {
      phone: state.phone
    }
}   


export default connect(mapStateToProps)(Phonec);
