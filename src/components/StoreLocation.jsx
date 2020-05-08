import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StoreLocation extends Component {
  render() {
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
                <li>Store location</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="main-content">
          <div className="container py-5">
            <div className="row">
              <div className="col-panel col-xl-3 col-lg-4 col-12 mb-3">
                <h4 className="border-bottom h2 mb-4">
                  Store Locations<p className="line"></p>
                </h4>
                <div className="list-loca-stores mb-3">
                  <i className="flaticon-placeholder"></i>
                  <b>DAROGHAWALA @ LAHORE</b>
                  <div className="address">
                    Daroghawala Chowk
                    <br /> Near Qadri Auto Shop <br /> 54000 LAHORE
                  </div>
                </div>
                <div className="list-loca-stores mb-3">
                  <i className="flaticon-placeholder"></i>
                  <b>SALAMATPURA @ LAHORE</b>
                  <div className="address">
                    1 Minar Wali Masjid
                    <br /> Near 7 Hills Grammer School <br /> 54000 LAHORE
                  </div>
                </div>
                {/* <div id="panel" className="storelocator-panel"> */}
                {/* <form className="storelocator-filter">
                    <div className="location-search">
                      <h2>Where are you?</h2>
                      <input
                        className="pac-target-input"
                        placeholder="Enter a location"
                        autocomplete="off"
                      />
                    </div>
                    <div className="feature-filter"></div>
                  </form> */}
                {/* <p>There are one store in this Daroghawala area. However, stores closest
                      to you are listed below.</p> */}
                {/* <ul className="store-list">
                    <li className="no-stores">
                      There are no stores in this area. However, stores closest
                      to you are listed below.
                    </li>
                    <li className="store" id="store-store-4">
                      <div className="list-loca-stores">
                        <i className="demo-icon icon-location-1"></i>
                        <b>Store 4</b>
                        <br />
                        <div className="address">Arenatheme</div>
                      </div>
                    </li>
                    <li className="store" id="store-store-2">
                      <div className="list-loca-stores">
                        <i className="demo-icon icon-location-1"></i>
                        <b>Store 2</b>
                        <br />
                        <div className="address">
                          102580 Santa Monica BLVD Los Angeles
                        </div>
                      </div>
                    </li>
                    <li className="store" id="store-galleria-dallas">
                      <div className="list-loca-stores">
                        <i className="demo-icon icon-location-1"></i>
                        <b>GALLERIA @ DALLAS</b>
                        <br />
                        <div className="address">
                          13350 Dallas Parkway
                          <br /> Suite 2715A Dallas <br /> 75240 USA
                        </div>
                      </div>
                    </li>
                    <li className="store" id="store-store-3">
                      <div className="list-loca-stores">
                        <i className="demo-icon icon-location-1"></i>
                        <b>Store 3</b>
                        <br />
                        <div className="address">Popayan</div>
                      </div>
                    </li>
                  </ul> */}
                {/* </div> */}
              </div>
              <div className="map col-xl-9 col-lg-8 col-12">
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
}
