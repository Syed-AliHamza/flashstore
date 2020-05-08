import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="form-wrapper">
          <div id="customer-login" className="content">
            <h4 className="border-bottom">
              Login <p className="line"></p>
            </h4>
            <p>Welcome back! Sign in to your account</p>

            <form method="post" action="/account/login" id="customer_login">
              {/* <input type="hidden" name="form_type" value="customer_login" />
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="checkout_url" value="/checkout" /> */}

              {/* <div className="alert alert-error rounded-0 border-danger">
                <button
                  type="button"
                  className="close"
                  title="Close"
                  data-dismiss="alert"
                >
                  ×
                </button>
                <div className="errors">Password can't be blank.</div>
              </div> */}

              <div className="control-wrapper">
                <label for="customer_email">
                  Email Address<span className="req">*</span>
                </label>
                <input
                  className="rounded-0"
                  type="email"
                  required=""
                  name="email"
                  id="customer_email"
                />
              </div>

              <div className="control-wrapper">
                <label for="customer_password">
                  Password<span className="req">*</span>
                </label>
                <input
                  type="password"
                  required=""
                  name="password"
                  id="customer_password"
                  className="password rounded-0"
                />
              </div>

              <div className="control-wrapper last mb-4">
                <div className="action mb-2 d-flex justify-content-between">
                  <Link to="/" className="return-store">
                    Return to Store
                  </Link>
                  <Link to="/reset" className="forgot-pass">
                    Forgotten Password?
                  </Link>
                </div>
                <button className="btn btn-1 rounded-0" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
