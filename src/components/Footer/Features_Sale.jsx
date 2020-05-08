import React, { useState } from "react";

function Features_Sale() {
  const [data, useData] = useState([
    {
      h6: "Smooth, Rich & Loud Audio",
      h4: "Branded Headphones",
      p: "Sale up to 25% off all in store",
      src: "./images/off1.png"
    },
    {
      h6: "A Bigger Phone",
      h4: "Smart Phones 5",
      p: "Free shipping order over $100",
      src: "./images/off2.png"
    }
  ]);
  return (
    <div>
      <div className="join-w3l1 py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <div className="row">
            {data.map((v, k) => {
              return (
                <React.Fragment key={k}>
                  <div className="col-lg-6 mt-lg-0 mt-5">
                    <div className="join-agile text-left p-4">
                      <div className="row ">
                        <div className="col-sm-7 offer-name">
                          <h6>{v.h6}</h6>
                          <h4 className="mt-2 mb-3">{v.h4}</h4>
                          <p>{v.p}</p>
                        </div>
                        <div className="col-sm-5 offerimg-w3l">
                          <img src={v.src} alt="" className="img-fluid" />
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
