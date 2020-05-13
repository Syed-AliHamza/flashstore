import React, { Component } from "react";
import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import Team from "./Team";
import OurVision from "./OurVision";

export default class Index extends Component {
  render() {
    return (
      <div className="about">
        <Header />
        <WhatWeDo />
        <Team />
        <OurVision />
      </div>
    );
  }
}
