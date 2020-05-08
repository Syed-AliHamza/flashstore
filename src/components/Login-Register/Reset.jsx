import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

export default class Reset extends Component {
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
                <li>Reset Password</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="main-content">
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-6 col-xs-12 px-5">
                <div className="form-wrapper">
                  <div id="customer-login" className="content">
                    <div id="recover-password" style={{ display: "none;" }}>
                      <h4 className="border-bottom">
                        Reset Password <p className="line"></p>
                      </h4>
                      <p className="note">
                        We will send you an email to reset your password.
                      </p>

                      <form
                        method="post"
                        action="/account/recover"
                        acceptCharset="UTF-8"
                      >
                        <input
                          type="hidden"
                          name="form_type"
                          value="recover_customer_password"
                        />
                        <input type="hidden" name="utf8" value="✓" />

                        <div className="control-wrapper">
                          <label for="email">
                            Email Address<span className="req">*</span>
                          </label>
                          <input type="email" name="email" id="recover-email" className="rounded-0" />
                        </div>

                        <div className="control-wrapper">
                          <button className="btn mr-3 rounded-0" type="submit">
                            Reset Password
                          </button>
                          <Link
                            to="account//login"
                            className="cancel btn btn-2 rounded-0"
                          >
                            Cancel
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12 px-5 d-none d-sm-block register-or">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
