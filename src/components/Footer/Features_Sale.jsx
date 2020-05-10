import React, { useState } from "react";

function Features_Sale() {
  const [data, useData] = useState([
    {
      i: "flaticon-shopping-cart",
      h3: "Free Shipping",
      p: "on orders over Rs.2,000/-",
    },
    { i: "flaticon-fast-delivery", h3: "Fast Delivery", p: "World Wide" },
    { i: "fa fa-thumbs-up", h3: "Big Choice", p: "of Products" },
  ]);
  return (
    <div>
      <div className="features-sale py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <div className="row m-0 p-0">
            {data.map((v, k) => {
              return (
                <React.Fragment key={k}>
                  <div className="col-lg-4 my-3">
                    <div className="text text-left p-4">
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-3 offer-name">
                          <i className={v.i}></i>
                        </div>
                        <div className="col-9 pt-3 text-form-footer">
                          <h3>{v.h3}</h3>
                          <p>{v.p}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features_Sale;
