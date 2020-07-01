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
        name: "Samsung Galaxy J7 Prime",
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
      },{
        img: "images/b3.jpg",
        name: "Samsung Galaxy J7 Prime",
        price: "259",
      },
      {
        img: "images/a4.jpg",
        name: "Cordless Trimmer",
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
            <div className="container-fluid">
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
          <div className="container-fluid py-xl-4 py-lg-2">
            <div className="wishlist-detail">
              <h4 className="mb-sm-4 mb-3">
                Your wishlist contains:
                <span> 4</span> Products
              </h4>
              <div className="table-responsive-md w-100">
                <table className="table table-hover table-responsive-lg bg-light m-0">
                  <thead>
                    <tr className="head">
                      <th className="lg text-center" scope="col">
                        #
                      </th>
                      <th className="lg text-center" scope="col">
                        Product Image
                      </th>
                      <th
                        className="lg text-left px-3 name"
                        scope="col"
                        colSpan="2"
                      >
                        Product Name
                      </th>
                      <th className="lg text-center" scope="col">
                        Price
                      </th>
                      <th className="lg text-center" scope="col">
                        Available
                      </th>
                      <th className="lg text-center" scope="col">
                        View
                      </th>
                      <th className="lg text-center" scope="col">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((v, k) => {
                      return (
                        <React.Fragment key={k}>
                          <tr className="products alert show fade border-bottom rounded-0">
                            <td className="py-3 text-center" scope="row">
                              {k + 1}
                            </td>
                            <td className="py-2 text-center">
                              <Link to="/postdetail">
                                <img
                                  src={v.img}
                                  alt=" "
                                  className="img-responsive"
                                />
                              </Link>
                            </td>
                            <td className="py-3 text-left name" colSpan="2">
                              {v.name}
                            </td>
                            <td className="py-3 text-center">Rs {v.price}</td>
                            <td className="py-3 text-center text-success">In_Stock</td>
                            <td className="py-2 text-center">
                              <Link
                                to="/postdetail"
                                type="button"
                                className="btn rounded-0"
                              >
                                View
                              </Link>
                            </td>
                            <td className="py-3 text-center text-danger font-weight-bold">
                              <span
                              className="p-3"
                                data-dismiss="alert"
                                style={{ cursor: "pointer" }}
                              >
                                &times;
                              </span>
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
