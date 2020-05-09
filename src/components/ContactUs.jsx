import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };
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
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="main-content">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="form-wrapper">
                <div id="customer-login" className="content">
                  <div id="recover-password" style={{ display: "none;" }}>
                    <h4 className="border-bottom">
                      Leave A Message <p className="line"></p>
                    </h4>
                    <p className="note">
                      We will send you an email to reset your password.
                    </p>
                    <div className="contact-form">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        action="mailto:flashstore8563@gmail.com"
                        method="post"
                        enctype="text/plain"
                        id="contact_form"
                        accept-charset="UTF-8"
                        className="contact-form"
                      >
                        <div class="alert alert-success">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                          >
                            ×
                          </button>
                          Thanks for contacting us. We'll get back to you as
                          soon as possible.
                        </div>
                        <div id="contact-form">
                          <div className="row">
                            <div className="form-group control-wrapper col-lg-6 col-md-12">
                              <label for="name">
                                Name<span className="req">*</span>
                              </label>
                              <input
                                ref={register({ required: true })}
                                className="rounded-0"
                                type="text"
                                name="name"
                                id="name"
                                autoCapitalize="words"
                                autoFocus=""
                              />
                              <p>{errors.name && "Name field is required"}</p>
                            </div>

                            <div className="form-group control-wrapper col-lg-6 col-md-12">
                              <label for="email">
                                Email<span className="req">*</span>
                              </label>
                              <input
                                ref={register({
                                  required: "Email field is required",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                  },
                                })}
                                className="rounded-0"
                                type="email"
                                required=""
                                name="email"
                                id="email"
                              />
                              <p>{errors.email && errors.email.message}</p>
                            </div>
                          </div>

                          <div className="form-group control-wrapper">
                            <label for="phone">Phone</label>
                            <input
                              ref={register({
                                required: "Phone field is required",
                                pattern: {
                                  value: /^[0-9._%+-]{11}$/i,
                                  message: "Invalid phone number",
                                },
                              })}
                              className="rounded-0"
                              type="text"
                              id="phone"
                              name="phone"
                            />
                            <p>{errors.phone && errors.phone.message}</p>
                          </div>

                          <div className="form-group control-wrapper">
                            <label for="message">Message</label>
                            <textarea
                              ref={register({ required: true })}
                              required=""
                              id="message"
                              className="form-control rounded-0"
                              cols="40"
                              rows="7"
                              name="message"
                            ></textarea>
                            <p>
                              {errors.message && "Message field is required"}
                            </p>
                          </div>

                          <div className="control-wrapper">
                            <button
                              type="submit"
                              className="btn btn-1 rounded-0"
                            >
                              Send message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map col-sm-6 col-xs-12">
              <div className="map w-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.923714461706!2d74.39677981476575!3d31.581139751299503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191aa874197143%3A0x2d7617a0ca8796ca!2sDaroghawala%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1587836550326!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
