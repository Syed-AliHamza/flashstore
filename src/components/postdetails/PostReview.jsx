import React, { Component } from "react";

export default class PostReview extends Component {
  render() {
    return (
      <div className="">
        <div className="container m-auto pt-1 pb-5 postreview">
          <div className="row m-auto p-4 border">
            <div className="col-12">
              <h2 className="border-bottom pb-3">Customer Reviews</h2>
              <h5 className="py-3">Write a Reviews</h5>
              <form method="post" action="/">
                <div id="register-form">
                  <div className="control-wrapper">
                    <label for="full-name">Name</label>
                    <input
                      className="rounded-0"
                      type="text"
                      name="full_name"
                      id="full-name"
                      placeholder="Enter your name"
                      autoCapitalize="words"
                      autoFocus=""
                    />
                  </div>
                  <div className="control-wrapper">
                    <label for="customer_email">Email</label>
                    <input
                      className="rounded-0"
                      type="email"
                      required=""
                      name="email"
                      placeholder="john.smith@example.com"
                      id="customer_email"
                    />
                  </div>
                  <div className="control-wrapper d-flex">
                    <label for="customer_rating">Rating</label>
                    <div className="rating p-0 m-0 d-flex flex-row-reverse">
                      <input type="radio" id="star5" name="rating" value="5" />
                      <label htmlFor="star5">5 stars</label>
                      <input type="radio" id="star4" name="rating" value="4" />
                      <label htmlFor="star4">4 stars</label>
                      <input type="radio" id="star3" name="rating" value="3" />
                      <label htmlFor="star3">3 stars</label>
                      <input type="radio" id="star2" name="rating" value="2" />
                      <label htmlFor="star2">2 stars</label>
                      <input type="radio" id="star1" name="rating" value="1" />
                      <label htmlFor="star1">1 star</label>
                    </div>
                  </div>
                  <div className="control-wrapper">
                    <label for="review-title">Review Title</label>
                    <input
                      className="rounded-0"
                      type="text"
                      id="review-title"
                      placeholder="Give your review a title"
                      autoCapitalize="words"
                      autoFocus=""
                    />
                  </div>
                  <div className="control-wrapper d-flex">
                    <label for="message" className="textarea">
                      Boday of Reviews
                    </label>
                    <textarea
                      required=""
                      id="text"
                      className="rounded-0"
                      placeholder="Write your comments here"
                      cols="20"
                      rows="7"
                    ></textarea>
                  </div>
                  <div className="control-wrapper mt-3 d-flex justify-content-center">
                    <button className="btn rounded-0" type="submit">
                      Submit Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
