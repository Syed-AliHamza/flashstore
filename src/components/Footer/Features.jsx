import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { render } from "node-sass";

export default class Features extends Component {
  state = {
    data: [
      {
        src:
          "https://demo2.madrasthemes.com/electro/wp-content/uploads/2016/03/VirtualGogles-330x308.jpg",
        h5:
          "a4 Tech Mouse+Keyboard Wireles a4 Tech Mouse+Keyboard Wireles Original",
        price: "RS 150.00",
      },
      {
        src:
          "https://demo2.madrasthemes.com/electro/wp-content/uploads/2016/03/Smartphone2-330x308.jpg",
        h5: "a4 Tech Mouse+Keyboard Wireles a4 Tech Mouse+Keyboard Wireles",
        price: "RS 150.00",
      },
      {
        src:
          "https://demo2.madrasthemes.com/electro/wp-content/uploads/2016/03/LaptopYoga-330x308.jpg",
        h5: "a4 Tech Mouse+Keyboard Wireles a4 Tech Mouse+Keyboard Wireles",
        price: "RS 150.00",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5" style={{ background: "#EAEAEA" }}>
          <div className="Features container">
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 feature">
                <h4>
                  Featured Products <p></p>
                </h4>
                {this.state.data.map((v, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="row border mb-1 mx-auto p-0">
                        <div className="m-1 d-flex">
                          <div className="col-4 w-100 m-0 p-0">
                            <Link
                              to="/postdetail"
                              style={{ textDecoration: "none" }}
                            >
                              <img className="img-fluid" src={v.src} alt="" />
                            </Link>
                          </div>
                          <div className="col-8 m-0 p-2">
                            <Link
                              to="/postdetail"
                              style={{ textDecoration: "none" }}
                            >
                              <h5>{v.h5}</h5>{" "}
                              <p className="m-0 p-0">{v.price}</p>
                            </Link>
                            <div className="rating p-0 m-0">
                              <input
                                type="radio"
                                id="star10"
                                name="rating"
                                value="10"
                              />
                              <label htmlFor="star10">5 stars</label>
                              <input
                                type="radio"
                                id="star9"
                                name="rating"
                                value="9"
                              />
                              <label htmlFor="star9">4 stars</label>
                              <input
                                type="radio"
                                id="star8"
                                name="rating"
                                value="8"
                              />
                              <label htmlFor="star8">3 stars</label>
                              <input
                                type="radio"
                                id="star7"
                                name="rating"
                                value="7"
                              />
                              <label htmlFor="star7">2 stars</label>
                              <input
                                type="radio"
                                id="star6"
                                name="rating"
                                value="6"
                              />
                              <label htmlFor="star6">1 star</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 feature">
                <h4>
                  Top Selling Products <p></p>
                </h4>
                {this.state.data.map((v, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="row border mb-1 mx-auto p-0">
                        <div className="m-1 d-flex">
                          <div className="col-4 w-100 m-0 p-0">
                            <Link
                              to="/postdetail"
                              style={{ textDecoration: "none" }}
                            >
                              <img className="img-fluid" src={v.src} alt="" />
                            </Link>
                          </div>
                          <div className="col-8 m-0 p-2">
                            <Link
                              to="/postdetail"
                              style={{ textDecoration: "none" }}
                            >
                              <h5>{v.h5}</h5>{" "}
                              <p className="m-0 p-0">{v.price}</p>
                            </Link>
                            <div className="rating p-0 m-0">
                              <input
                                type="radio"
                                id="star10"
                                name="rating"
                                value="10"
                              />
                              <label htmlFor="star10">5 stars</label>
                              <input
                                type="radio"
                                id="star9"
                                name="rating"
                                value="9"
                              />
                              <label htmlFor="star9">4 stars</label>
                              <input
                                type="radio"
                                id="star8"
                                name="rating"
                                value="8"
                              />
                              <label htmlFor="star8">3 stars</label>
                              <input
                                type="radio"
                                id="star7"
                                name="rating"
                                value="7"
                              />
                              <label htmlFor="star7">2 stars</label>
                              <input
                                type="radio"
                                id="star6"
                                name="rating"
                                value="6"
                              />
                              <label htmlFor="star6">1 star</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
                {/* <div className="row m-auto p-0">
                  <div className="col-4 w-100 m-0 p-0">
                    <img
                      className="img-fluid"
                      src="https://demo2.madrasthemes.com/electro/wp-content/uploads/2016/03/VirtualGogles-330x308.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-8 m-0 p-2">
                    <h5>
                      a4 Tech Mouse+Keyboard Wireles a4 Tech Mouse+Keyboard
                      Wireles
                    </h5>
                    <p className="m-0 p-0">RS 150.00</p>
                    <div className="rating p-0 m-0">
                      <input
                        type="radio"
                        id="star10"
                        name="rating"
                        value="10"
                      />
                      <label htmlFor="star10" title="Rocks!">
                        5 stars
                      </label>
                      <input type="radio" id="star9" name="rating" value="9" />
                      <label htmlFor="star9" title="Rocks!">
                        4 stars
                      </label>
                      <input type="radio" id="star8" name="rating" value="8" />
                      <label htmlFor="star8" title="Pretty good">
                        3 stars
                      </label>
                      <input type="radio" id="star7" name="rating" value="7" />
                      <label htmlFor="star7" title="Pretty good">
                        2 stars
                      </label>
                      <input type="radio" id="star6" name="rating" value="6" />
                      <label htmlFor="star6" title="Meh">
                        1 star
                      </label>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 feature">
                <h4>
                  On-sale Products <p></p>
                </h4>
                {this.state.data.map((v, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="row border mb-1 mx-auto p-0">
                        <div className="m-1 d-flex">
                          <div className="col-4 w-100 m-0 p-0">
                            <Link
                              to="/postdetail"
                              style={{ textDecoration: "none" }}
                            >
                              <img className="img-fluid" src={v.src} alt="" />
                            </Link>
                          </div>
                          <div className="col-8 m-0 p-2">
                            <Link
                              to="/postdetail"
                              style={{ textDecoration: "none" }}
                            >
                              <h5>{v.h5}</h5>{" "}
                              <p className="m-0 p-0">{v.price}</p>
                            </Link>
                            <div className="rating p-0 m-0">
                              <input
                                type="radio"
                                id="star10"
                                name="rating"
                                value="10"
                              />
                              <label htmlFor="star10">5 stars</label>
                              <input
                                type="radio"
                                id="star9"
                                name="rating"
                                value="9"
                              />
                              <label htmlFor="star9">4 stars</label>
                              <input
                                type="radio"
                                id="star8"
                                name="rating"
                                value="8"
                              />
                              <label htmlFor="star8">3 stars</label>
                              <input
                                type="radio"
                                id="star7"
                                name="rating"
                                value="7"
                              />
                              <label htmlFor="star7">2 stars</label>
                              <input
                                type="radio"
                                id="star6"
                                name="rating"
                                value="6"
                              />
                              <label htmlFor="star6">1 star</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
