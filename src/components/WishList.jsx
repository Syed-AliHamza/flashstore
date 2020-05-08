import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

export default class WishList extends Component {
  state = {
    count: 0,
    id: 0,
    data: [
      {
        img: "images/b3.jpg",
        name: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "259",
      },
      {
        img: "images/a4.jpg",
        name: "Cordless Trimmer",
        price: "259",
      },
      {
        img: "images/a3.jpg",
        name: "Nikon Camera",
        price: "259",
      },
      {
        img: "images/b2.jpg",
        name: "Headphone",
        price: "259",
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
                <li>WishList</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wishlist py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <div className="wishlist-detail">
              {/* <h4 className="mb-sm-4 mb-3">
                Your wishlist contains:
                <span> 4</span> Products
              </h4> */}
              <div className="table-responsive w-100">
                <table className="w-100">
                  <thead>
                    <tr className="row p-2 border-bottom">
                      <th className="col-3 col-md-1">Delete</th>
                      <th className="col-3 col-md-2">Product Image</th>
                      <th className="col-5 col-md-4 text-left pl-4">
                        Product Name
                      </th>
                      <th className="col-4 col-md-2">Product Price</th>
                      <th className="col-1">Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((v, k) => {
                      return (
                        <React.Fragment key={k}>
                          <tr className="products row alert show fade border-bottom rounded-0 d-flex align-items-center">
                            <td className="col-2 col-md-1 d-flex align-items-center justify-content-center">
                              <span
                                data-dismiss="alert"
                                style={{ cursor: "pointer" }}
                              >
                                &times;
                              </span>
                            </td>
                            <td className="col-4 col-md-2 d-flex align-items-center justify-content-center">
                              <Link to="/postdetail">
                                <img
                                  src={v.img}
                                  alt=" "
                                  className="img-responsive"
                                />
                              </Link>
                            </td>
                            <td className="d-flex align-items-center col-6 col-md-4 text-left">
                              {v.name}
                            </td>
                            <td className="d-flex align-items-center justify-content-center col-3 col-md-2">
                              Rs {v.price}
                            </td>
                            <td className="d-flex align-items-center justify-content-center col-3 col-md-1">
                              In Stock
                            </td>
                            <td className="d-flex align-items-center justify-content-center col-3 col-md-2">
                              <Link
                                to="/postdetail"
                                type="button"
                                className="btn p-2 px-3 rounded-0"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Products />
      </div>
    );
  }
}
