import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Axios from "axios";
import { withRouter } from "react-router-dom";
import PostReview from "./PostReview";
class postdetails extends Component {
  state = { postdetails: [], count: 0 };
  // componentDidMount() {
  //   Axios.get("/postdata").then(resp => {
  //     let filter = resp.data.filter(d => d._id == this.props.match.params.id);
  //     this.setState({
  //       postdetails: filter
  //     });
  //   });
  // }
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
    // let res = this.state.postdetails.map((res, i) => {
    //   return (
    //     <React.Fragment key={i}>
    //       <div className="row">
    //         <div className="col-md-5">
    //           <img
    //             style={{ width: "100%" }}
    //             className="maginify"
    //             src={res.image}
    //             alt=""
    //           />
    //         </div>
    //         <div className="col-md-7">
    //           <p>{res.Title}</p>
    //           <h1>{res.Heading}</h1>
    //           <hr /> <br />
    //           <span>
    //             <i className="fa fa-heart"></i> Wishlist{" "}
    //           </span>
    //           <span>
    //             <i className="fa fa-refresh"></i> Compare
    //           </span>
    //           <div className="list">
    //             <ul className="list-unstyled">
    //               <li>
    //                 Products
    //                 <p>{res.Desc}</p>
    //               </li>
    //             </ul>
    //           </div>
    //           <h1 style={{ fontSize: "35px" }}>{res.price}</h1>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   );
    // });
    return (
      <React.Fragment>
        <div className="page-head_agile_info_w3l"></div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>Product Details</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container py-5 postdetails">
          {/* {res} */}
          <div className="row py-5">
            <div className="col-md-6 col-lg-5 pb-3">
              <div className="preview">
                <div className="preview-pic tab-content">
                  <div
                    className="tab-pane pb-3 active d-flex justify-content-center align-items-center border-bottom"
                    id="pic-1"
                  >
                    <img src="/images/b4.jpg" />
                  </div>
                  {/* <div className="tab-pane" id="pic-2">
                    <img src="/images/b1.jpg" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="/images/a3.jpg" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="/images/a.jpg" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="/images/b3.jpg" />
                  </div> */}
                </div>
                <ul className="preview-thumbnail nav nav-tabs d-flex justify-content-between">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="/images/b4.jpg" />
                    </a>
                  </li>
                  {/* <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="/images/b1.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="/images/a3.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="/images/a.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src="/images/b3.jpg" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 right-side">
              <span className="heading">Smartphone</span>
              <h3 className="py-2 m-0">Audionic Reborn RB-110 Home Theatre</h3>
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
                {/* <ul className="p-3 m-0">
                  <li>4.5 inch HD Screen</li>
                  <li>ndroid 4.4 KitKat OS</li>
                  <li>1.4 GHz Quad Core™ Processor</li>
                  <li>ndroid 4.4 KitKat OS</li>
                  <li>1.4 GHz Quad Core™ Processor</li>
                  <li>20 MP front Camera</li>
                </ul> */}
              </div>
              <div className="quantity">
                <div className="row m-auto p-0 d-flex justify-content-between flex-column">
                  <div className="p-0 pt-3 col-lg-6 col-12 d-flex align-items-center justify-content-between flex-row">
                    <div className="w-100">
                      <h6 className="p-0 m-0">Color:</h6>{" "}
                    </div>
                    <select className="form-control custom-select rounded-0 w-100">
                      <option value="0">Choose Color</option>
                      <option value="1">White</option>
                      <option value="2">Black</option>
                    </select>
                  </div>
                  <div className="p-0 my-3 col-lg-6 col-12 d-flex align-items-center justify-content-between flex-row">
                    <div className="w-100">
                      <h6 className="p-0 m-0">Quantity:</h6>{" "}
                    </div>
                    <div className="border w-100 d-flex align-items-center justify-content-between flex-row p-0">
                      <span className="" onClick={this.decrementCount}>
                        <i className="fa fa-minus flex-start"></i>
                      </span>
                      <span className="">{this.state.count}</span>
                      <span className="" onClick={this.incrementCount}>
                        <i className="fa fa-plus"></i>
                      </span>
                    </div>
                  </div>
                  <div className="p-0 w-100 col-lg-6 col-12 text-center d-flex align-items-center justify-content-between flex-row">
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
          <div className="Tabs py-0">
            <div className="container">
              <div className="row">
                <div className="col-12 m-0 p-0">
                  <nav className="d-flex">
                    <div
                      className="nav border-0 nav-tabs nav-fill"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className="nav-item rounded-0 nav-link active"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Description
                      </a>
                      <a
                        className="nav-item rounded-0 nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Specification
                      </a>
                    </div>
                  </nav>
                  <div
                    className="tab-content border border-warning p-0 m-0 rounded-0"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="row m-0 p-4 d-flex">
                        <div className="m-0 col-12 col-md-6 p-0">
                          <span className="font-weight-bold">
                            Product Details:
                          </span>
                          <br />
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
                          <br />
                          Warranty: 1 YEAR
                          <br />
                          Available in Stock.
                          <br />
                          Location: Only in Lahore.
                          <br />
                          Delivery charges: 200
                        </div>
                        <div className="col-6 d-none d-sm-block m-0 p-0">
                          <img
                            src="/images/b4.jpg"
                            className="w-100"
                            alt=""
                            srcset=""
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="row p-4 m-0 d-flex">
                        <div className="list col-12 col-md-6 m-0 p-0">
                          <span className="font-weight-bold">
                            Specifications Details:
                          </span>
                          <br />
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
                        <div className="col-6 d-none d-sm-block m-0 p-0">
                          <img
                            src="/images/b4.jpg"
                            className="w-100"
                            alt=""
                            srcset=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PostReview />
      </React.Fragment>
    );
  }
}
export default withRouter(postdetails);
