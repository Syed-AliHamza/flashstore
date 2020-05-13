import React, { Component } from "react";

export default class WhatWeDo extends Component {
  render() {
    return (
      <div className="whatwedo">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="img">
                <img src="./images/whatwedo1.jpg" alt="" />
              </div>
              <h4 className="text-center">What we really do?</h4>
              <p className="text-center">
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>

            <div className="col-md-4">
              <div className="img">
                <img src="./images/whatwedo2.jpg" alt="" />
              </div>
              <h4 className="text-center">What we really do?</h4>
              <p className="text-center">
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>

            <div className="col-md-4">
              <div className="img">
                <img src="./images/whatwedo3.jpg" alt="" />
              </div>
              <h4 className="text-center">What we really do?</h4>
              <p className="text-center">
                Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
                tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
                nisi faucibus magna, vitae ultrices lacus purus vitae metus.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
