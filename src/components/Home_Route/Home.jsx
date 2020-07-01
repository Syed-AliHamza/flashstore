import React, { Component } from "react";
import Carousel from "./Carousel";
import Products from "../Products";
// import TAbs from "./TAbs";
export default class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Carousel />
        <Products />
        {/* <TAbs /> */}
      </div>
    );
  }
}
