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
              <div className="table-responsive-lg w-100">
                <table className="table table-hover table-responsive-sm">
                  <thead>
                    <tr className="">
                      <th className="lg" scope="col">
                        #
                      </th>
                      <th className="lg" scope="col">
                        Product Image
                      </th>
                      <th className="lg" scope="col" colspan="2">
                        Product Name
                      </th>
                      <th className="lg" scope="col">
                        Price
                      </th>
                      <th className="lg" scope="col">
                        Available
                      </th>
                      <th className="lg" scope="col">
                        View
                      </th>
                      <th className="lg" scope="col">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((v, k) => {
                      return (
                        <React.Fragment key={k}>
                          <tr className="products alert show fade border-bottom rounded-0">
                            <td className="pl-0 py-3" scope="row">
                              {k + 1}
                            </td>
                            <td className="pl-0 py-2">
                              <Link to="/postdetail">
                                <img
                                  src={v.img}
                                  alt=" "
                                  className="img-responsive"
                                />
                              </Link>
                            </td>
                            <td className="pl-0 py-3 text-left" colspan="2">
                              {v.name}
                            </td>
                            <td className="pl-0 py-3">Rs {v.price}</td>
                            <td className="pl-0 py-3">In Stock</td>
                            <td className="pl-0 py-2">
                              <Link
                                to="/postdetail"
                                type="button"
                                className="btn rounded-0"
                              >
                                View
                              </Link>
                            </td>
                            <td className="pl-0 py-3 text-center">
                              <span
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
