import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Product_Modal from "../Product_Modal";
export default class TAbs extends Component {
  state = {
    tab1: [
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
    ],
    tab2: [
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
    tab3: [
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
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
    ],
  };
  componentDidMount() {
    Axios.get("/postdata").then((resp) => {
      console.log(resp.data);
      let tab1 = resp.data.filter((cate) => cate.categeory == "Features");
      this.setState({
        tab1: tab1,
      });
      let tab2 = resp.data.filter((cate) => cate.categeory == "onsale");
      this.setState({
        tab2: tab2,
      });
      let tab3 = resp.data.filter((cate) => cate.categeory == "TopRated");
      this.setState({
        tab3: tab3,
      });
    });
  }

  render() {
    return (
      <section id="tabs" className="project-tab border-top m-0 p-2 py-5">
        <div className="container m-auto">
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div
                  className="nav nav-tabs nav-fill"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Featured
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    On Sale
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Top Sale
                  </a>
                </div>
              </nav>
              <div className="tab-content w-100 py-1" id="nav-tabContent">
                <div
                  className="tab-pane fade show active w-100"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row product w-100 m-auto">
                    <div className="row col-12 m-0 p-0 w-100">
                      {/* {res} */}
                      {this.state.tab1.map((v, k) => {
                        return (
                          <React.Fragment key={k}>
                            <div className="card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-0">
                              <div className="border bg-white cardss m-1">
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
                                <div className="p-2 d-flex justify-content-between">
                                  <span
                                    type="button"
                                    className="btn p-0 text-uppercase rounded-0"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                  >
                                    <i className="fa fa-eye"></i>
                                    Quik View
                                  </span>
                                  <span
                                    type="button"
                                    className="btn p-0 text-uppercase rounded-0"
                                    // data-toggle="modal"
                                    // data-target="#myModal"
                                  >
                                    <i className="fa fa-heart"></i>
                                    Wishlist
                                  </span>
                                </div>
                                <Link
                                  to="/checkout"
                                  type="button"
                                  className="btn m-2 text-uppercase rounded-0"
                                >
                                  Add to Cart
                                </Link>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade w-100"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row product w-100 m-auto">
                    <div className="row col-12 m-0 p-0 w-100">
                      {this.state.tab2.map((v, k) => {
                        return (
                          <React.Fragment key={k}>
                            <div className="card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-0">
                              <div className="border bg-white cardss m-1">
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
                                <div className="p-2 d-flex justify-content-between">
                                  <span
                                    type="button"
                                    className="btn p-0 text-uppercase rounded-0"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                  >
                                    <i className="fa fa-eye"></i>
                                    Quik View
                                  </span>
                                  <span
                                    type="button"
                                    className="btn p-0 text-uppercase rounded-0"
                                    // data-toggle="modal"
                                    // data-target="#myModal"
                                  >
                                    <i className="fa fa-heart"></i>
                                    Wishlist
                                  </span>
                                </div>
                                <Link
                                  to="/checkout"
                                  type="button"
                                  className="btn m-2 text-uppercase rounded-0"
                                >
                                  Add to Cart
                                </Link>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade w-100"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="row product w-100 m-auto">
                    <div className="row col-12 m-0 p-0 w-100">
                      {this.state.tab3.map((v, k) => {
                        return (
                          <React.Fragment key={k}>
                            <div className="card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-0">
                              <div className="border bg-white cardss m-1">
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
                                <div className="p-2 d-flex justify-content-between">
                                  <span
                                    type="button"
                                    className="btn p-0 text-uppercase rounded-0"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                  >
                                    <i className="fa fa-eye"></i>
                                    Quik View
                                  </span>
                                  <span
                                    type="button"
                                    className="btn p-0 text-uppercase rounded-0"
                                    // data-toggle="modal"
                                    // data-target="#myModal"
                                  >
                                    <i className="fa fa-heart"></i>
                                    Wishlist
                                  </span>
                                </div>
                                <Link
                                  to="/checkout"
                                  type="button"
                                  className="btn m-2 text-uppercase rounded-0"
                                >
                                  Add to Cart
                                </Link>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Product_Modal />
      </section>
    );
  }
}
