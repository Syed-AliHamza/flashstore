import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Product_Modal from "./Product_Modal";
export default class Musicandheadphones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 30,
      count: 0,
      Headphones: [
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "1,500",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b2.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/b1.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a3.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
        {
          src: "images/a.jpg",
          Title: "Mobile & Tablets",
          Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
          price: "150",
        },
      ],
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 18 };
    });
  }
  // componentDidMount() {
  //   Axios.get("/postdata").then((resp) => {
  //     let Headphone = resp.data.filter(
  //       (cate) => cate.categeory == "Headphones"
  //     );
  //     this.setState({
  //       Headphones: Headphone,
  //     });
  //   });
  // }
  render() {
    return (
      <div id="products">
        <div className="SmartPhone container my-5">
          <h4 className="border-bottom pt-1">
            Just For You<p className="line"></p>
          </h4>
          <div className="row product w-100 m-auto">
            <div className="row col-12 m-0 p-0 w-100">
              {this.state.Headphones.slice(0, this.state.visible).map(
                (v, k) => {
                  return (
                    <React.Fragment key={k}>
                      <div className="card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-0">
                        <div className="border bg-white cardss m-1 mb-2">
                          <Link to={`/postdetail/${v._id}`}>
                            <img
                              className="img-fluid img-responsive w-100"
                              src={v.src}
                              alt=""
                            />
                            <span className="p-2">{v.Title}</span>
                            <h5 className="py-1 px-2 mb-2 m-0">{v.Heading}</h5>
                          </Link>
                          <p className="price m-0 d-flex justify-content-center align-items-center">
                            RS.{v.price}
                          </p>
                          <div className="views p-2 d-flex justify-content-between">
                            <span
                              type="button"
                              className="btn d-none d-lg-block d-sm-block p-0 text-uppercase rounded-0"
                              data-toggle="modal"
                              data-target="#myModal"
                            >
                              <i className="fa fa-eye pr-2"></i>
                              Quik View
                            </span>
                            <Link
                              to="/wishlist"
                              className=" p-0 text-uppercase rounded-0"
                            >
                              <i className="fa fa-heart pr-2"></i>
                              Wishlist
                            </Link>
                          </div>
                          <div className="m-2">
                            <Link
                              to="/checkout"
                              type="button"
                              className="btn w-100 text-uppercase rounded-0"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                }
              )}
              <Product_Modal />
            </div>
          </div>
          <div className="row m-auto p-1 d-flex justify-content-center">
            {this.state.visible < this.state.Headphones.length && (
              <button
                onClick={this.loadMore}
                type="button"
                className="text-uppercase show-btn col-8 col-md-5 col-lg-4 col-xl-4 rounded-0 p-3"
              >
                Show More <i className="pl-1 fa fa-arrow-right"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
