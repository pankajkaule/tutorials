import React from "react";
import "./App.css";
import Namec from "./compo/Name_c";
import Emailc from "./compo/Email_c";
import Comp6 from "./compo/Changename_c";
import Changemailc from "./compo/Chnagemail_c";
import Websitec from "./compo/Website_c";
import ChangeWebsite from "./compo/ChangeWebsite_c";
import Usernamec from "./compo/Username";
import ChangeUsername from "./compo/ChangeUsername";
import Phonec from "./compo/Phonec";
import ChangePhone from "./compo/ChangePhone";
import Allinonecompo from "./compo/Allinonecompo";
import Cart from "./compo/cart";
import ChangeCartvalue from "./compo/changeCartvalue";
function App(props) {
  return (
    <div className="App">
      <Cart />
      <hr /> 
      <ChangeCartvalue />
      <h1>this props are accessed from the reducers directly</h1>
      <hr />
      <Allinonecompo />
      <Namec />
      <hr />
      <Comp6 />
      <hr />
      <Emailc />
      <hr />
      <Changemailc />
      <hr />
      <Websitec />
      <hr />
      <ChangeWebsite />
      <hr />
      <Usernamec />
      <hr />
      <ChangeUsername />
      <hr />
      <Phonec />
      <hr />
      <ChangePhone />
      <hr />
    </div>
  );
}

export default App;
