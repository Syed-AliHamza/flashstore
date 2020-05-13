import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class payment extends Component {
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
                <li>Payment Page</li>
              </ul>
            </div>
          </div>
        </div>
        <section id="tabs" className="project-tab m-0 py-5">
          <div className="container-fluid m-auto">
            <h3 className="text-center mb-lg-5 mb-sm-4 mb-3">Payment</h3>
            <div className="row border m-auto">
              <div className="col-md-12 py-5">
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
                    <i className="fa fa-credit-card"></i> Credit Card
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
                    <i className="fa fa-money"></i> Cash On Delivery
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
                    <i className="fa fa-university"></i> Bank Transfer
                  </a>
                </div>
                <div
                  className="tab-content w-100 py-4 pt-5"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active w-100"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <form role="form" className="form">
                      <div className="form-group">
                        <label for="username">Full name (on the card)</label>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          name="username"
                          placeholder="Full Name"
                          required=""
                        />
                      </div>

                      <div className="form-group">
                        <label for="cardNumber">Card number</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            name="cardNumber"
                            placeholder="•••• •••• •••• ••••"
                            required=""
                            maxlength="16"
                            pattern="\d{16}"
                          />
                          <div className="input-group-append rounded">
                            <span className="input-group-text muted">
                              <i className="fa fa-cc-visa"></i>  {" "}
                              <i className="fa fa-cc-amex"></i>  
                              <i className="fa fa-cc-mastercard"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-8">
                          <div className="form-group">
                            <label>
                              <span className="hidden-xs">Expiration Date</span>{" "}
                            </label>
                            <div className="input-group">
                              <input
                                className="form-control rounded-0"
                                placeholder="MM"
                                name=""
                                required=""
                                maxlength="2"
                                pattern="\d{2}"
                              />
                              <input
                                className="form-control rounded-0"
                                placeholder="YY"
                                name=""
                                required=""
                                maxlength="2"
                                pattern="\d{2}"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label
                              data-toggle="tooltip"
                              title="3 digits code on back side of the card"
                            >
                              CVV <i className="fa fa-question-circle"></i>
                            </label>
                            <input
                              className="form-control rounded-0"
                              placeholder="•••"
                              required=""
                              maxlength="3"
                              pattern="\d{3}"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="subscribe btn btn-block rounded-0 mt-3"
                        type="button"
                      >
                        {" "}
                        Confirm{" "}
                      </button>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade w-100"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <p>Cash On Delivery</p>
                    <dl className="param">
                      <dt>BANK: </dt>
                      <dd> THE WORLD BANK</dd>
                    </dl>
                    <dl className="param">
                      <dt>Accaunt number: </dt>
                      <dd> 12345678912345</dd>
                    </dl>
                    <dl className="param">
                      <dt>IBAN: </dt>
                      <dd> 123456789</dd>
                    </dl>
                    <p>
                      <strong>Note:</strong> Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.{" "}
                    </p>
                  </div>
                  <div
                    className="tab-pane fade w-100"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <p>Bank accaunt details</p>
                    <dl className="param">
                      <dt>BANK: </dt>
                      <dd> THE WORLD BANK</dd>
                    </dl>
                    <dl className="param">
                      <dt>Accaunt number: </dt>
                      <dd> 12345678912345</dd>
                    </dl>
                    <dl className="param">
                      <dt>IBAN: </dt>
                      <dd> 123456789</dd>
                    </dl>
                    <p>
                      <strong>Note:</strong> Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
