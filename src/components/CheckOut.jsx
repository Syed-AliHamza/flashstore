import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

export default class CheckOut extends Component {
  state = {
    count: 0,
    id: 0,
    total: 0,
    data: [
      {
        img: "images/b3.jpg",
        name: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "259",
        total_price: "3000",
      },
      {
        img: "images/a4.jpg",
        name: "Cordless Trimmer",
        price: "259",
        total_price: "3000",
      },
      {
        img: "images/a3.jpg",
        name: "Nikon Camera",
        price: "259",
        total_price: "3000",
      },
      {
        img: "images/b2.jpg",
        name: "Headphone",
        price: "259",
        total_price: "3000",
      },
    ],
    form: [
      {
        name: "name",
        placeholder: "First Name",
        label: "First Name",
      },
      {
        name: "name",
        placeholder: "Last Name",
        label: "Last Name",
      },
      {
        name: "email",
        placeholder: "Email Address",
        label: "Email Address",
      },
      {
        name: "number",
        placeholder: "Mobile Number",
        label: "Mobile Number",
      },
      {
        name: "address",
        placeholder: "Address",
        label: "Address",
      },
      {
        name: "city",
        placeholder: "Town/City",
        label: "Town/City",
      },
    ],
  };
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
        <div className="page-head_agile_info_w3l"></div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>CheckOut</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="checkout py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="text-center">Shopping Cart</h3>
            <div className="checkout-detail alert">
              <h4 className="mb-sm-4 mb-3">
                Your shopping cart contains:
                <span> 4</span> Products
              </h4>
              <div className="table-responsive-lg w-100">
                <table className="table table-hover table-responsive-sm">
                  <thead>
                    <tr scope="row">
                      <th className="lg px-2" scope="col">
                        #
                      </th>
                      <th className="lg px-2" scope="col">
                        Product Image
                      </th>
                      <th className="lg px-2 text-left" scope="col">
                        Product Name
                      </th>
                      <th className="lg px-2" scope="col">
                        Price
                      </th>
                      <th className="lg px-2" scope="col">
                        Quantity
                      </th>
                      <th className="lg px-2 text-center" scope="col">
                        Cart Total
                      </th>
                      <th className="lg px-2" scope="col">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((v, k) => {
                      return (
                        <React.Fragment key={k}>
                          <tr className="products alert show fade border-bottom rounded-0">
                            <td className="px-2 py-3" scope="row">
                              {k + 1}
                            </td>
                            <td className="px-2 py-2">
                              <Link to="/postdetail">
                                <img
                                  src={v.img}
                                  alt=" "
                                  className="img-responsive"
                                />
                              </Link>
                            </td>
                            <td className="px-2 py-3 text-left">{v.name}</td>
                            <td className="px-2 py-3">Rs {v.price}</td>
                            <td className="px-0 py-3">
                              <span className="" onClick={this.decrementCount}>
                                <i className="fa fa-minus"></i>
                              </span>
                              <span className="px-1 px-lg-3 py-1">
                                {this.state.count}
                              </span>
                              <span className="" onClick={this.incrementCount}>
                                <i className="fa fa-plus"></i>
                              </span>
                            </td>
                            <td className="px-2 py-3 text-center">
                              Rs. {v.total_price}/-
                            </td>
                            <td className="px-2 py-3 text-center">
                              <span
                                data-dismiss="alert"
                                style={{ cursor: "pointer" }}
                              >
                                &times;
                              </span>
                            </td>
                          </tr>
                          {/* <tr className="products p-0 py-2 m-0 row alert show fade border-bottom rounded-0 d-flex align-items-center">
                            <td className="col-4 col-md-2 p-0 d-flex align-items-center justify-content-center">
                              <Link to="/postdetail">
                                <img
                                  src={v.img}
                                  alt=" "
                                  className="img-responsive"
                                  style={{ width: "100px", height: "80px" }}
                                />
                              </Link>
                            </td>
                            <td className="d-flex align-items-center col-6 col-md-4 text-left">
                              {v.name}
                            </td>
                            <td className="d-flex align-items-center justify-content-center col-1 col-md-2">
                              Rs. {v.price}
                            </td>
                            <td className="p-0 d-flex align-items-center justify-content-center col-3 col-md-1">
                              <div className="p-2 d-flex align-items-cneter border justify-content-between flex-row w-100">
                                <span style={{ cursor: "pointer" }}>
                                  <i
                                    className="fa fa-minus flex-start"
                                    onClick={this.decrementCount}
                                  ></i>
                                </span>
                                <span className="">{this.state.count}</span>
                                <span style={{ cursor: "pointer" }}>
                                  <i
                                    className="fa fa-plus"
                                    onClick={this.incrementCount}
                                  ></i>
                                </span>
                              </div>
                            </td>
                            <td className="d-flex align-items-center justify-content-center col-4 col-md-2">
                              Rs. {this.calculateTotal}/-
                            </td>
                            <td className="col-1 col-md-1 d-flex align-items-center justify-content-center">
                              <span
                                data-dismiss="alert"
                                style={{ cursor: "pointer" }}
                              >
                                &times;
                              </span>
                            </td>
                          </tr> */}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
                <div className="row py-3 m-auto d-flex justify-content-end">
                  {/* <div className="col col-md-4 m-0 p-0 d-flex justify-content-between"> */}
                  <Link to="/" className="btn rounded-0">
                    Continue Shipping
                  </Link>
                  {/* <button
                        className="btn clear rounded-0"
                        data-dismiss="alert"
                      >
                        Clear Cart
                      </button> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="address m-auto">
          <div className="container py-5">
            <h4 className="mb-sm-4 mb-3">Add a new Details</h4>
            <form action="/payment" className="form row">
              {this.state.form.map((v, k) => {
                return (
                  <React.Fragment key={k}>
                    <div className="col-md-6 col-sm-6 px-lg-3 pl-md-3 form-group">
                      <label>
                        {v.label}
                        <span className="req">*</span>
                      </label>
                      <input
                        className="form-control rounded-0"
                        type="text"
                        name={v.name}
                        placeholder={v.placeholder}
                        required=""
                      />
                    </div>
                  </React.Fragment>
                );
              })}
              <div className="col-12 px-lg-3 pl-md-3 form-group">
                <button type="submit" className="btn rounded-0">
                  Delivery to this Address
                </button>
              </div>
            </form>
          </div>
        </div>
        <Products />
      </div>
    );
  }
}
