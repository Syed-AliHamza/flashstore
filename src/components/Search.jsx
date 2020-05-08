import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product_Modal from "./Product_Modal";

export default class Search extends Component {
  state = {
    Headphones: [
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
    ],
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
                <li>Search Results</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container p-0 row m-auto">
          <div className="col py-5">
            <p className="pb-4 text-center h5">
              Search Result: 24 items found for "headphones"
            </p>
            <div className="product w-100 m-auto">
              <div className="row col-12 m-0 p-0 w-100">
                {this.state.Headphones.slice(0, this.state.visible).map(
                  (v, k) => {
                    return (
                      <React.Fragment key={k}>
                        <div className="card col-6 col-md-4 col-lg-3 p-0">
                          <div className="border bg-white cardss m-1 mb-3">
                            <Link to={`/postdetail/${v._id}`}>
                              <img
                                className="img-fluid img-responsive w-100"
                                src={v.src}
                                alt=""
                              />
                              <span className="p-2">{v.Title}</span>
                              <h5 className="py-1 px-2 mb-2 m-0">
                                {v.Heading}
                              </h5>
                            </Link>
                            <p className="price m-0 d-flex justify-content-center align-items-center">
                              RS.{v.price}
                            </p>
                            <div className="views p-2 d-flex justify-content-between">
                              <span
                                type="button"
                                className="btn d-none d-lg-block d-sm-block p-0 text-uppercase rounded-0"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                <i className="fa fa-eye pr-2"></i>
                                Quik View
                              </span>
                              <Link
                                to="/wishlist"
                                className="d-none d-lg-block d-sm-block p-0 text-uppercase rounded-0"
                              >
                                <i className="fa fa-heart pr-2"></i>
                                Wishlist
                              </Link>
                            </div>
                            <div className="m-2">
                              <Link
                                to="/checkout"
                                type="button"
                                className="btn w-100 text-uppercase rounded-0"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  }
                )}
                <Product_Modal />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
