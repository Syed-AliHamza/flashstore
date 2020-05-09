import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };
  return (
    <div>
      <div className="form-wrapper">
        <div id="customer-login" className="content">
          <h4 className="border-bottom">
            Login <p className="line"></p>
          </h4>
          <p>Welcome back! Sign in to your account</p>

          <form
            method="post"
            action="/account/login"
            id="customer_login"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
                className="rounded-0"
                type="email"
                required=""
                name="email"
                id="customer_email"
              />
              <p>{errors.email && errors.email.message}</p>
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
                ref={register({ required: true })}
                className="rounded-0 password error"
                minLength="8"
                required=""
              />
              <p> {errors.password && "Password is required"}</p>
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
