import React, { Component } from "react";
import NavHeader from "./NavHeader";
import NavBody from "./NavBody";
import NavEnd from "./NavEnd";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavHeader />
        <NavBody />
        {/* <NavEnd /> */}
      </React.Fragment>
    );
  }
}
export default Navbar;
