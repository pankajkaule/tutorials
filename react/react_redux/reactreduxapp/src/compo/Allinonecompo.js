import React, { useState } from "react";
import { connect } from "react-redux";
import { Myname_a } from "../actions/Myname_a";
import Button from "@material-ui/core/Button";
const axios = require("axios");

function Allinonecompo(props) {
  const [token, setoken] = useState(null);

  const getdata = () => {
    const article = {
      password: "pankaj1234",
      email: "pankaj@gmail.com",
      is_logged: "true",
    };
    axios
      .post("http://localhost:3333/users/login", article)
      .then((response) => setoken(response.data.token))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  let str1="Bearer"
const token1=str1.concat(' ', token);
  return (
    <div>
      {"token ::" + token1}
      <br />
      <br />
      Accessed data from store : {props.name}
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.Myname_a();
          getdata();
        }}
      >
        Change Name
      </Button>
    </div>
  );
}

export default connect((state) => ({ name: state.name }), { Myname_a })(
  Allinonecompo
);
