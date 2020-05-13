import React, { Component } from "react";

export default class Team extends Component {
  render() {
    return (
      <div>
        <div className="team">
          <div className="container py-5 text-center">
            <h1 className="p-5 font-weight-bold">Our Teams</h1>
            <div className="row py-3 pb-5 d-flex align-items-start justify-content-center">
              <div className="col-8 col-sm-4 col-md-4 col-lg-2 col-xl-2 w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="img w-100 pb-3">
                  <img
                    className="rounded-circle w-100"
                    src="./images/team2.jpg"
                    alt="Team"
                  />
                </div>
                <h6 className="text-center font-weight-bold">
                  Muhammad Tayyab Mughal
                </h6>
                <p className="text-center">CEO/Founder</p>
              </div>
              <div className="col-8 col-sm-4 col-md-4 col-lg-2 col-xl-2 w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="img w-100 pb-3">
                  <img
                    className="rounded-circle w-100"
                    src="./images/team2.jpg"
                    alt=""
                  />
                </div>
                <h6 className="text-center font-weight-bold">
                  Muhammad Abubakar
                </h6>
                <p className="text-center">Client Care</p>
              </div>
              <div className="col-8 col-sm-4 col-md-4 col-lg-2 col-xl-2 w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="img w-100 pb-3">
                  <img
                    className="rounded-circle w-100"
                    src="./images/team2.jpg"
                    alt=""
                  />
                </div>
                <h6 className="text-center font-weight-bold">
                  Muhammad Ali Mughal
                </h6>
                <p className="text-center">Delivery Driver</p>
              </div>{" "}
              <div className="col-8 col-sm-4 col-md-4 col-lg-2 col-xl-2 w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="img w-100 pb-3">
                  <img
                    className="rounded-circle w-100"
                    src="./images/team2.jpg"
                    alt=""
                  />
                </div>
                <h6 className="text-center font-weight-bold">
                  Muhammad Razi Nazam
                </h6>
                <p className="text-center">Packaking Boy</p>
              </div>
              <div className="col-8 col-sm-4 col-md-4 col-lg-2 col-xl-2 w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="img w-100 pb-3">
                  {" "}
                  <img
                    className="rounded-circle w-100"
                    src="./images/team2.jpg"
                    alt=""
                  />
                </div>
                <h6 className="text-center font-weight-bold">Muhammad Hamza</h6>
                <p className="text-center">Delivery Driver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
