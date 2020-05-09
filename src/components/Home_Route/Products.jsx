import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  state = {
    Products: [
      {
        src: "./images/m1.jpg",
        title: "Samsung Galaxy J7",
        amount: "$200.00",
        del: "$280.00",
        button: "Add to cart",
        value: "Samsung Galaxy J7"
      },
      {
        src: "./images/m1.jpg",
        title: "Samsung Galaxy J7",
        amount: "$200.00",
        del: "$280.00",
        button: "Add to cart",
        value: "Samsung Galaxy J7"
      },
      {
        src: "./images/m1.jpg",
        title: "Samsung Galaxy J7",
        amount: "$200.00",
        del: "$280.00",
        button: "Add to cart",
        value: "Samsung Galaxy J7"
      },
      {
        src: "./images/m1.jpg",
        title: "Samsung Galaxy J7",
        amount: "$200.00",
        del: "$280.00",
        button: "Add to cart",
        value: "Samsung Galaxy J7"
      }
    ]
  };
  render() {
    return (
      <div id="product">
        <div className="ads-grid py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              Our <span>New</span> Products
            </h3>
            <div className="row">
              <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                <div className="side-bar p-sm-4 p-3">
                  <div className="search-hotel border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                    <form action="#" method="post">
                      <input
                        type="search"
                        placeholder="Product name..."
                        name="search"
                        required=""
                      />
                      <input type="submit" value=" " />
                    </form>
                  </div>
                  <div className="range border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Price</h3>
                    <div className="w3l-range">
                      <ul>
                        <li>
                          <Link to="/SelectedProduct" href="#">
                            Under $1,000
                          </Link>
                        </li>
                        <li className="my-1">
                          <Link to="/SelectedProduct" href="#">
                            $1,000 - $5,000
                          </Link>
                        </li>
                        <li>
                          <Link to="/SelectedProduct" href="#">
                            $5,000 - $10,000
                          </Link>
                        </li>
                        <li className="my-1">
                          <Link to="/SelectedProduct" href="#">
                            $10,000 - $20,000
                          </Link>
                        </li>
                        <li>
                          <Link to="/SelectedProduct" href="#">
                            $20,000 $30,000
                          </Link>
                        </li>
                        <li className="mt-1">
                          <Link to="/SelectedProduct" href="#">
                            Over $30,000
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Discount</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">5% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">10% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">20% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">30% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">50% or More</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">60% or More</span>
                      </li>
                    </ul>
                  </div>
                  <div className="customer-rev border-bottom left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                    <ul>
                      <li>
                        <Link to="/SelectedProduct" href="#">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>5.0</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/SelectedProduct" href="#">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>4.0</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/SelectedProduct" href="#">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                          <span>3.5</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/SelectedProduct" href="#">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>3.0</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/SelectedProduct" href="#">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                          <span>2.5</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Electronics</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Cameras & Photography</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Car & Vehicle Electronics</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Computers & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">GPS & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Headphones</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Home Audio</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Home Theater, TV & Video</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Mobiles & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Portable Media Players</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Tablets</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Telephones & Accessories</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Wearable Technology</span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">
                      Cash On Delivery
                    </h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">
                          Eligible for Cash On Delivery
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 30 days</span>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 90 days</span>
                      </li>
                    </ul>
                  </div>
                  <div className="f-grid py-2">
                    <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                    <div className="box-scroll">
                      <div className="scroll">
                        <div className="row">
                          <div className="col-lg-3 col-sm-2 col-3 left-mar">
                            <img
                              src="./images/k1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                            <Link to="/SelectedProduct" href="">
                              Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB
                              Memory)
                            </Link>
                            <Link
                              to="/SelectedProduct"
                              href=""
                              className="price-mar mt-2"
                            >
                              $12,990.00
                            </Link>
                          </div>
                        </div>
                        <div className="row my-4">
                          <div className="col-lg-3 col-sm-2 col-3 left-mar">
                            <img
                              src="./images/k2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                            <Link to="/SelectedProduct" href="">
                              Haier 195 L 4 Star Direct-Cool Single Door
                              Refrigerator
                            </Link>
                            <Link
                              to="/SelectedProduct"
                              href=""
                              className="price-mar mt-2"
                            >
                              $12,499.00
                            </Link>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-sm-2 col-3 left-mar">
                            <img
                              src="./images/k3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                            <Link to="/SelectedProduct" href="">
                              Ambrane 13000 mAh Power Bank (P-1310 Premium)
                            </Link>
                            <Link
                              to="/SelectedProduct"
                              href=""
                              className="price-mar mt-2"
                            >
                              $1,199.00{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agileinfo-ads-display col-lg-9">
                <div className="wrapper">
                  <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <h3 className="heading-tittle text-center font-italic">
                      New Brand Mobiles
                    </h3>
                    <div className="container">
                      <div className="row blog">
                        <div className="col-md-12">
                          <div
                            id="blogCarousel"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <ol className="carousel-indicators">
                              <li
                                data-target="#blogCarousel"
                                data-slide-to="0"
                                className="active"
                              ></li>
                              <li
                                data-target="#blogCarousel"
                                data-slide-to="1"
                              ></li>
                              <li
                                data-target="#blogCarousel"
                                data-slide-to="2"
                              ></li>
                              <li
                                data-target="#blogCarousel"
                                data-slide-to="3"
                              ></li>
                            </ol>

                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <div className="row">
                                  <div className="col-md-4 product-men mt-5 mb-5">
                                    {this.state.Products.map((v, k) => {
                                      return (
                                        <div className="men-pro-item simpleCart_shelfItem">
                                          <div className="men-thumb-item text-center">
                                            <img src={v.src} alt="" />
                                            <div className="men-cart-pro">
                                              <div className="inner-men-cart-pro">
                                                <Link
                                                  to="/SelectedProduct"
                                                  className="link-product-add-cart"
                                                >
                                                  Quick View
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="item-info-product text-center border-top mt-4">
                                            <h4 className="pt-1">
                                              <Link to="/SelectedProduct">
                                                {v.title}
                                              </Link>
                                            </h4>
                                            <div className="info-product-price my-2">
                                              <span className="item_price">
                                                {v.amount}
                                              </span>
                                              <del>{v.del}</del>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                              <form action="#" method="post">
                                                <fieldset>
                                                  <input
                                                    type="hidden"
                                                    name="item_name"
                                                    value={v.value}
                                                  />
                                                  <input
                                                    type="submit"
                                                    name="submit"
                                                    value={v.button}
                                                    className="button btn"
                                                  />
                                                </fieldset>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m1.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">
                                Samsung Galaxy J7
                              </Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$200.00</span>
                              <del>$280.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="Samsung Galaxy J7"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="200.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m2.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">OPPO A37f</Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$230.00</span>
                              <del>$250.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="OPPO A37f"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="230.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m3.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">Apple iPhone X</Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$280.00</span>
                              <del>$300.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="Apple iPhone X"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="280.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <h3 className="heading-tittle text-center font-italic">
                      Tv & Audio
                    </h3>
                    <div className="row">
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m4.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">
                                Sony 80 cm (32 inches)
                              </Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$320.00</span>
                              <del>$340.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="Sony 80 cm (32 inches)"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="320.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m5.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">Artis Speaker</Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$349.00</span>
                              <del>$399.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="Artis Speaker"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="349.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m6.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">
                                Philips Speakers
                              </Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$249.00</span>
                              <del>$300.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="Philips Speakers"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="249.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-sec1 product-sec2 px-sm-5 px-3">
                    <div className="row">
                      <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                      <p className="w3l-nut-middle">Get Extra 10% Off</p>
                      <div className="col-md-8 bg-right-nut">
                        <img src="./images/image1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                    <h3 className="heading-tittle text-center font-italic">
                      Large Appliances
                    </h3>
                    <div className="row">
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m7.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <span className="product-new-top">New</span>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">Whirlpool 245</Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$230.00</span>
                              <del>$280.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="Whirlpool 245"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="230.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m8.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">
                                BPL Washing Machine
                              </Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$180.00</span>
                              <del>$200.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="BPL Washing Machine"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="180.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 product-men mt-5">
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <img src="./images/m9.jpg" alt="" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to="/SelectedProduct"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <Link to="/SelectedProduct">Microwave Oven</Link>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">$199.00</span>
                              <del>$299.00</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <form action="#" method="post">
                                <fieldset>
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="business"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="item_name"
                                    value="Microwave Oven"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="199.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="discount_amount"
                                    value="1.00"
                                  />
                                  <input
                                    type="hidden"
                                    name="currency_code"
                                    value="USD"
                                  />
                                  <input
                                    type="hidden"
                                    name="return"
                                    value=" "
                                  />
                                  <input
                                    type="hidden"
                                    name="cancel_return"
                                    value=" "
                                  />
                                  <input
                                    type="submit"
                                    name="submit"
                                    value="Add to cart"
                                    className="button btn"
                                  />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
