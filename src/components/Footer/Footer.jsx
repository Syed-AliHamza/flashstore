import React, { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
  const [offer, useOffer] = useState([
    { i: "fa fa-dolly", h3: "Free Shipping", p: "on orders over $10" },
    { i: "fa fa-shipping-fast", h3: "Fast Delivery", p: "World Wide" },
    { i: "fa fa-thumbs-up", h3: "Big Choice", p: "of Products" },
  ]);
  return (
    <div>
      <footer>
        <div className="categories py-5">
          <div className="container-fluid py-md-5 py-sm-4 py-3">
            <div className="row footer-info">
              <div className="col-md-4 col-sm-6 footer-grids mt-md-0 mt-4">
                <h2 className="text-white mb-3">Electronics :</h2>
                <p className="m-0 p-0 footer-main">
                  If you're considering a new laptop, looking for a powerful new
                  car stereo or shopping for a new HDTV, we make it easy to find
                  exactly what you need at a price you can afford. We offer
                  Every Day Low Prices on TVs, laptops, cell phones, tablets and
                  iPads, video games, desktop computers, cameras and camcorders,
                  audio, video and more.
                </p>
              </div>
              <div className="col-md-2 col-sm-6 footer-grids mt-sm-0 mt-4">
                <h3 className="text-white mb-3">Information</h3>
                <ul className="m-0 p-0">
                  {/* <li className="mb-3">
                    <Link to="/faq">Faqs</Link>
                  </li> */}
                  <li className="mb-3">
                    <Link to="/term">Terms & conditions</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/help">Help</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/checkout">Shopping Cart</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                <h3 className="text-white mb-3">Get in Touch</h3>
                <ul className="m-0 p-0">
                  <li className="mb-3">
                    <i className="fa fa-map-marker"></i> Daroghawala Chowk
                    <br /> Near Qadri Auto Shop <br /> 54000 LAHORE
                  </li>
                  <li className="mb-3">
                    <Link to="/" href="mailto:0307-4190145">
                      <i className="fa fa-mobile"></i> (+92) 307-4190145
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/" href="mailto:0307-4190145">
                      <i className="fa fa-phone"></i> (+92) 307-4190145
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/" href="mailto:flashstore8563@gmail.com">
                      <i className="fa fa-envelope-open"></i>{" "}
                      flashstore8563@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 mt-md-0 mt-4">
                <h3 className="text-white mb-3">Newsletter</h3>
                <p className="mb-3 text-white">
                  Free Delivery on orders over Rs.2,000/-
                </p>
                <form action="/" method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control rounded-0"
                      placeholder="Email"
                      name="email"
                      required
                    />
                    <input type="submit" value="Go" className="rounded-0" />
                  </div>
                </form>
                <div className="footer-grids mt-3">
                  <h3 className="text-white  mb-3">Follow Us on</h3>
                  <div className="social d-flex">
                    <a
                      href="https://www.facebook.com/flashstorepk/"
                      className="icon fb"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>{" "}
                    <a href="#" className="icon tw">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="icon in">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right py-3">
        <div className="container-fluid">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-12 col-md-6 py-2 text-center text-md-left">
              <p className="p-0 m-0">© 2020 Flash Store. All rights reserved</p>
            </div>
            <div className="col-12 col-md-6 py-2 text-md-right text-center sub-some child-momu">
              <img src="./images/pay2.png" alt="" />
              <img src="./images/pay1.png" alt="" />
              <img src="./images/pay3.png" alt="" />
              <img src="./images/pay8.png" alt="" />
              <img src="./images/pay9.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
