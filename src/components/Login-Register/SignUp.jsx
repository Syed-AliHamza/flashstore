import React, { Component } from "react";
import { Link } from "react-router-dom";
import Recaptcha from "../Recaptcha";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="form-wrapper create">
          <h4 className="border-bottom">
            Create New Account <p className="line"></p>
          </h4>
          <p>Create your own Account</p>

          <form
            method="post"
            action="/account"
            id="create_customer"
            acceptCharset="UTF-8"
          >
            <input type="hidden" name="form_type" value="create_customer" />
            <input type="hidden" name="utf8" value="✓" />

            <div id="register-form">
              <div className="control-wrapper">
                <label for="first-name">First Name</label>
                <input
                  className="rounded-0"
                  type="text"
                  name="first_name"
                  id="first-name"
                  autoCapitalize="words"
                  autoFocus=""
                />
              </div>

              <div className="control-wrapper">
                <label for="last-name">Last Name</label>
                <input
                  className="rounded-0"
                  type="text"
                  name="last_name"
                  id="last-name"
                  autoCapitalize="words"
                  autoFocus=""
                />
              </div>

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

              <div className="control-wrapper has-error">
                <label for="password">
                  Password<span className="req">*</span>
                </label>
                <input
                  className="rounded-0 password error"
                  type="password"
                  name="password"
                  id="password"
                  minLength="8"
                  required=""
                />
              </div>
              {/* <Recaptcha /> */}

              <div className="control-wrapper last">
                <button className="btn btn-1 rounded-0" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>

          <h5 className="mt-4">Sign up today and you'll be able to :</h5>
          <p className="m-0">Speed your way through the checkout</p>
          <p className="m-0">Track your orders easily</p>
          <p className="m-0">Keep a record of all your purchases</p>
        </div>
      </div>
    );
  }
}
