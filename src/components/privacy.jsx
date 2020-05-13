import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class privacy extends Component {
  render() {
    return (
      <div>
        <div className="page-head_agile_info_w3l"></div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container-fluid">
              <ul className="w3_short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>PRIVACY</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="terms py-sm-5 py-4">
          <div className="container-fluid py-xl-4 py-lg-2">
            <h3 className="text-center mb-lg-3 mb-sm-4 mb-3">Privacy Policy</h3>
            <h6 className="my-md-4 my-1">Privacy Policy</h6>
            <p className="font-weight-light mb-2">
              Welcome to the flashstore.com.pk website. We respect your privacy
              and want to protect your personal information. To learn more,
              please read this Privacy Policy.
              <br />
              <br />
              This Privacy Policy explains how we collect, use and (under
              certain conditions) disclose your personal information. This
              Privacy Policy also explains the steps we have taken to secure
              your personal information. Finally, this Privacy Policy explains
              your options regarding the collection, use and disclosure of your
              personal information. By visiting the Site directly or through
              another site, you accept the practices described in this Policy.
              <br />
              <br />
              Data protection is a matter of trust and your privacy is important
              to us. We shall therefore only use your name and other information
              which relates to you in the manner set out in this Privacy Policy.
              We will only collect information where it is necessary for us to
              do so and we will only collect information if it is relevant to
              our dealings with you.
              <br />
              <br />
              We will only keep your information for as long as we are either
              required to by law or as is relevant for the purposes for which it
              was collected.
              <br />
              <br />
              You can visit the Site and browse without having to provide
              personal details. During your visit to the Site you remain
              anonymous and at no time can we identify you unless you have an
              account on the Site and log on with your user name and password.
            </p>

            <h6 className="my-md-4 my-2">
              Personally Identifiable Information and other Information
            </h6>
            <p className="font-weight-light mb-2">
              We may use your personal information for opinion and market
              research. Your details are anonymous and will only be used for
              statistical purposes. You can choose to opt out of this at any
              time. Any answers to surveys or opinion polls we may ask you to
              complete will not be forwarded on to third parties. Disclosing
              your email address is only necessary if you would like to take
              part in competitions. We save the answers to our surveys
              separately from your email address.
              <br />
              <br />
              We may also send you other information about us, the Site, our
              other websites, our products, sales promotions, our newsletters,
              anything relating to other companies in our group or our business
              partners. If you would prefer not to receive any of this
              additional information as detailed in this paragraph (or any part
              of it) please click the 'unsubscribe' link in any email that we
              send to you. Within 7 working days (days which are neither (i) a
              Sunday, nor (ii) a public holiday anywhere in Pakistan) of receipt
              of your instruction we will cease to send you information as
              requested. If your instruction is unclear we will contact you for
              clarification.
              <br />
              <br />
              We may further anonymize data about users of the Site generally
              and use it for various purposes, including ascertaining the
              general location of the users and usage of certain aspects of the
              Site or a link contained in an email to those registered to
              receive them, and supplying that anonymized data to third parties
              such as publishers. However, that anonymized data will not be
              capable of identifying you personally.
            </p>

            <h6 className="my-md-4 my-2">Security Precautions</h6>
            <p className="font-weight-light mb-2">
              We have in place appropriate technical and security measures to
              prevent unauthorized or unlawful access to or accidental loss of
              or destruction or damage to your information. When we collect data
              through the Site, we collect your personal details on a secure
              server. We use firewalls on our servers. Our security procedures
              mean that we may occasionally request proof of identity before we
              disclose personal information to you. You are responsible for
              protecting against unauthorized access to your password and to
              your computer.
            </p>

            <h6 className="my-md-4 my-2">Your rights</h6>
            <p className="font-weight-light mb-2">
              {" "}
              If you are concerned about your data you have the right to request
              access to the personal data which we may hold or process about
              you. You have the right to require us to correct any inaccuracies
              in your data free of charge. At any stage you also have the right
              to ask us to stop using your personal data for direct marketing
              purposes.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
