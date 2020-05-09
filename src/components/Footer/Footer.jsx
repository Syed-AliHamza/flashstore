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
        {/* <div className="footer-top-first">
          <div className="container py-md-5 py-sm-4 py-3">
            <h2 className="footer-top-head-w3l font-weight-bold mb-2">
              Electronics :
            </h2>
            <p className="footer-main mb-4">
              If you're considering a new laptop, looking for a powerful new car
              stereo or shopping for a new HDTV, we make it easy to find exactly
              what you need at a price you can afford. We offer Every Day Low
              Prices on TVs, laptops, cell phones, tablets and iPads, video
              games, desktop computers, cameras and camcorders, audio, video and
              more.
            </p>
            <div className="row border-top border-bottom py-sm-4 py-3">
              {offer.map((v, k) => {
                return (
                  <React.Fragment>
                    <div className="col-md-4 offer-footer my-md-0 my-4">
                      <div className="row">
                        <div className="col-4 icon-fot">
                          <i className={v.i}></i>
                        </div>
                        <div className="col-8 text-form-footer">
                          <h3>{v.h3}</h3>
                          <p>{v.p}</p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div> */}
        <div className="categories py-5">
          <div className="container py-md-5 py-sm-4 py-3">
            <div className="row footer-info">
              <div className="col-md-3 col-sm-6 footer-grids">
                <h3 className="text-white font-weight-bold mb-3">Categories</h3>
                <ul className="m-0 p-0">
                  <li className="mb-3">
                    <Link to="/">Mobiles </Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/">Computers</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/">TV, Audio</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/">Smartphones</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/">Washing Machines</Link>
                  </li>
                  <li>
                    <Link to="/">Refrigerators</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">
                  Quick Links
                </h3>
                <ul className="m-0 p-0">
                  <li className="mb-3">
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/help">Help</Link>
                  </li>
                  {/* <li className="mb-3">
                    <Link to="/faq">Faqs</Link>
                  </li> */}
                  <li className="mb-3">
                    <Link to="/term">Terms of use</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">
                  Get in Touch
                </h3>
                <ul className="m-0 p-0">
                  <li className="mb-3">
                    <i className="fa fa-map-marker"></i> 123 Sebastian, USA.
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
                  {/* <li>
                    <Link to="/" href="mailto:example@mail.com">
                    <i className="fa fa-envelope-open"></i>
                      {" "}
                      mail 2@example.com
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 mt-md-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
                <p className="mb-3 text-white">
                  Free Delivery on your first order!
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
                  <h3 className="text-white font-weight-bold mb-3">
                    Follow Us on
                  </h3>
                  <div className="social">
                    <ul className="m-0 p-0 d-flex">
                      <li>
                        <Link to="/" className="icon fb">
                          <i className="fa fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="icon tw">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="icon in">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-md-5 py-sm-4 py-3">
          <div className="container">
            <div className="sub-some">
              <h5 className="font-weight-bold mb-2">Mobile & Tablets :</h5>
              <ul className="m-0 p-0">
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Android Phones
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Smartphones
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Feature Phones
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    {" "}
                    Tablets
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">Computers :</h5>
              <ul className="m-0 p-0">
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Laptops{" "}
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Printers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Routers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Ink & Toner Cartridges
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Monitors
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Video Games
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Unboxed & Refurbished Laptops
                  </Link>
                </li>
                <li>
                  <Link to="/" className="border-right pr-2">
                    Assembled Desktops
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Data Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">
                TV, Audio & Large Appliances :
              </h5>
              <ul className="m-0 p-0">
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    TVs & DTH
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Home Theatre Systems
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Hidden Cameras & CCTVs
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Refrigerators
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Washing Machines
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Air Conditioners
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Cameras
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Speakers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">
                Mobile & Laptop Accessories :
              </h5>
              <ul className="m-0 p-0">
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Headphones
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Power Banks
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Backpacks
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Mobile Cases & Covers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Pen Drives
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    External Hard Disks
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    {" "}
                    Mouse
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Smart Watches & Fitness Bands
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    MicroSD Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">
                Popular on Electro Store
              </h5>
              <ul className="m-0 p-0">
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Offers & Coupons
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Couple Watches
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Gas Stoves
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Air Coolers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Air Purifiers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Headphones
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    {" "}
                    Headsets
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Pressure Cookers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Sandwich Makers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Air Friers
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Irons
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    LED TV
                  </Link>
                </li>
                <li className="m-sm-1">
                  <Link to="/" className="border-right pr-2">
                    Sandwich Makers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </footer>
      <div className="copy-right py-3">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-12 col-md-6 py-2 text-center text-md-left">
              <p className="p-0 m-0">© 2020 Flash Store. All rights reserved</p>
            </div>
            <div className="col-12 col-md-6 py-2 text-md-right text-center sub-some child-momu">
              <ul className="m-0 p-0 align-items-center">
                <li>
                  <Link to="/">
                    <img src="./images/pay2.png" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="./images/pay1.png" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="./images/pay3.png" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="./images/pay8.png" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="./images/pay9.png" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
