import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavEnd() {
  const [open, handleopen] = useState(false);
  return (
    <React.Fragment>
      <nav className="navbar bg-white navbar-expand-md navbar-light d-none d-md-block m-0 p-0">
        <div className="container p-0 w-100">
          <div className="row w-100 d-flex align-items-start m-0 p-0">
            <div className="card col-4 col-md-4 d-none d-md-block col-lg-3 col-xl-3 p-0 m-0">
              <div className="card-header">
                <button
                  type="button"
                  className="btn w-100 m-0 p-2 pr-5"
                  onClick={() => handleopen(!open)}
                >
                  <span>
                    {open == true ? (
                      <i className="navbar-toggler-icon"></i>
                    ) : (
                      <i className="navbar-toggler-icon"></i>
                    )}
                  </span>
                  All Departments
                </button>
              </div>
              {open == true ? (
                <div className="w-100 m-0 p-0">
                  <ul className="p-2 d-none d-lg-block m-0">
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">Value of the Day</Link>
                    </li>
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">Top 100 Offers</Link>
                    </li>
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">New Arrivals</Link>
                    </li>
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">TV & Audio</Link>
                    </li>
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">Gadgets</Link>
                    </li>
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">All in one</Link>
                    </li>
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">Accessories</Link>
                    </li>
                    <li className="dropdown-item border-bottom pl-2">
                      <Link to="/">Gaming</Link>
                    </li>
                    <li className="dropdown-item pl-2">
                      <Link to="/">Laptop and Computers</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
            <div className="collapse navbar-collapse navbar col-8 col-lg-6">
              <ul className="navbar-nav nav text-left">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link px-2">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2">
                    Catalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2">
                    Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-2">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link px-2"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contuct Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="free-shipping col-3 pr-0 p-2 w-100 d-flex justify-content-end">
              <span className="d-none d-lg-block">
                Free Shipping on Orders $500+
              </span>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default NavEnd;
