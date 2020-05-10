import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product_Modal extends Component {
  state = { count: 0 };
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <div
          className="modal fade p-3"
          id="myModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content rounded-0">
              <div className="container postdetails">
                {/* <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button> */}
                <div className="row p-4">
                  <div className="col-lg-6 col-md-12 col-12 p-1">
                    <img
                      className="maginify w-100"
                      src="images/b3.jpg"
                      alt="watch"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12 px-3 right-side">
                    <span className="heading">Audio</span>
                    <h3 className="py-2 m-0">
                      Audionic Reborn RB-110 Home Theatre
                    </h3>
                    <p className="border-bottom price pb-3 h4">Rs. 2,299 /-</p>
                    <div className="list">
                      Brand Name: Audionic Reborn RB-110 Home Theatre
                      <br />
                      Speaker Unit: 8" + 3" x 4<br />
                      Color: Black
                      <br />
                      Audio Crossover: Full-Range
                      <br />
                      Feature: Display Visual Information
                      <br />
                      Material: Plastic
                      <br />
                      Waterproof: No
                      <br />
                      Support Memory Card: Yes
                      <br />
                      Remote Control: Yes
                      <br />
                      Voice Control: Yes
                      <br />
                      Built-in Microphone: No
                      <br />
                      Bluetooth: YES
                    </div>
                    <div className="quantity">
                      <div className="row m-auto p-0 d-flex justify-content-between flex-column">
                        <div className="p-0 pt-3 col-lg-8 col-12 d-flex align-items-center justify-content-between flex-row">
                          <div className="w-100">
                            <h6 className="p-0 m-0">Color:</h6>{" "}
                          </div>
                          <select className="form-control custom-select rounded-0 w-100">
                            <option value="0">Choose Color</option>
                            <option value="1">White</option>
                            <option value="2">Black</option>
                          </select>
                        </div>
                        <div className="p-0 my-3 col-lg-8 col-12 d-flex align-items-center justify-content-between flex-row">
                          <div className="w-100">
                            <h6 className="p-0 m-0">Quantity:</h6>{" "}
                          </div>
                          <div className="border p-0 m-0 w-100 d-flex align-items-center justify-content-between flex-row p-0">
                            <span className="p-0" onClick={this.decrementCount}>
                              <i className="fa fa-minus flex-start"></i>
                            </span>
                            <span className="p-0 px-3">{this.state.count}</span>
                            <span className="p-0" onClick={this.incrementCount}>
                              <i className="fa fa-plus"></i>
                            </span>
                          </div>
                        </div>
                        <div className="p-0 w-100 col-lg-8 col-12 text-center d-flex align-items-center justify-content-between flex-row">
                          <Link
                            to="/checkout"
                            type="button"
                            className="btn w-100 p-2 px-3 text-uppercase rounded-0"
                          >
                            <i className="flaticon-shopping-bag pr-2"></i>
                            Add to Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
