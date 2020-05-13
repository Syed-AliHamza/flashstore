import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class help extends Component {
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
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="faqs-w3l py-sm-5 py-4">
          <div className="container-fluid py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>Help</span> Page
            </h3>

            {/* <div className="wthree-help mb-sm-5 mb-4">
              <div className="agile-left-help">
                <h3 className="w3-head">How Can We help you</h3>
                <form action="#" method="get">
                  <textarea
                    placeholder="Your Query"
                    required=""
                    className="form-control rounded-0"
                    cols="40"
                    rows="7"
                    name="message"
                  ></textarea>
                  <input type="submit" value="Submit" className="rounded-0 mb-3" />
                </form>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div> */}

            <h3 className="mb-2">Top 10 Frequently asked questions</h3>
            <div className="container-fluid py-lg-2 p-0">
              <p className="font-weight-light mb-2">
                Welcome to Flashstore.com.pk also hereby known as “we", "us" or
                "Flash Store". We are an online marketplace and these are the
                terms and conditions governing your access and use of Flash
                Store along with its related sub-domains, sites, mobile app,
                services and tools (the "Site"). By using the Site, you hereby
                accept these terms and conditions (including the linked
                information herein) and represent that you agree to comply with
                these terms and conditions (the "User Agreement"). This User
                Agreement is deemed effective upon your use of the Site which
                signifies your acceptance of these terms. If you do not agree to
                be bound by this User Agreement please do not access, register
                with or use this Site.
              </p>

              <h6 className="my-md-4 my-3">License & Site access</h6>
              <p className="font-weight-light mb-2">
                We require that by accessing the Site, you confirm that you can
                form legally binding contracts and therefore you confirm that
                you are at least 18 years of age or are accessing the Site under
                the supervision of a parent or legal guardian. We grant you a
                non-transferable, revocable and non-exclusive license to use the
                Site, in accordance with the Terms and Conditions described
                herein, for the purposes of shopping for personal items and
                services as listed to be sold on the Site. Commercial use or use
                on behalf of any third party is prohibited, except as explicitly
                permitted by us in advance. If you are registering as a business
                entity, you represent that you have the authority to bind that
                entity to this User Agreement and that you and the business
                entity will comply with all applicable laws relating to online
                trading. No person or business entity may register as a member
                of the Site more than once. Any breach of these Terms and
                Conditions shall result in the immediate revocation of the
                license granted in this paragraph without notice to you.
                <br />
                <br />
                Content provided on this Site is solely for informational
                purposes. Product representations including price, available
                stock, features, add-ons and any other details as expressed on
                this Site are the responsibility of the vendors displaying them
                and is not guaranteed as completely accurate by us. Submissions
                or opinions expressed on this Site are those of the
                individual(s) posting such content and may not reflect our
                opinions.
                <br />
                <br />
                We grant you a limited license to access and make personal use
                of this Site, but not to download (excluding page caches) or
                modify the Site or any portion of it in any manner. This license
                does not include any resale or commercial use of this Site or
                its contents; any collection and use of any product listings,
                descriptions, or prices; any derivative use of this Site or its
                contents; any downloading or copying of account information for
                the benefit of another seller; or any use of data mining,
                robots, or similar data gathering and extraction tools.
                <br />
                <br />
                This Site or any portion of it (including but not limited to any
                copyrighted material, trademarks, or other proprietary
                information) may not be reproduced, duplicated, copied, sold,
                resold, visited, distributed or otherwise exploited for any
                commercial purpose without express written consent by us as may
                be applicable.
                <br />
                <br />
                You may not frame or use framing techniques to enclose any
                trademark, logo, or other proprietary information (including
                images, text, page layout, or form) without our express written
                consent. You may not use any meta tags or any other text
                utilizing our name or trademark without our express written
                consent, as applicable. Any unauthorized use terminates the
                permission or license granted by us to you for access to the
                Site with no prior notice. You may not use our logo or other
                proprietary graphic or trademark as part of an external link for
                commercial or other purposes without our express written
                consent, as may be applicable.
                <br />
                <br />
                You agree and undertake not to perform restricted activities
                listed within this section; undertaking these activities will
                result in an immediate cancellation of your account, services,
                reviews, orders or any existing incomplete transaction with us
                and in severe cases may also result in legal action
              </p>
              <br />
              <ul className="ml-3">
                <li className="font-weight-light mb-2">
                  Refusal to comply with the Terms and Conditions described
                  herein or any other guidelines and policies related to the use
                  of the Site as available on the Site at all times.
                </li>
                <li className="font-weight-light mb-2">
                  Impersonate any person or entity or to falsely state or
                  otherwise misrepresent your affiliation with any person or
                  entity.
                </li>
                <li className="font-weight-light mb-2">
                  Use the Site for illegal purposes.
                </li>
                <li className="font-weight-light mb-2">
                  Attempt to gain unauthorized access to or otherwise interfere
                  or disrupt other computer systems or networks connected to the
                  Platform or Services.{" "}
                </li>
                <li className="font-weight-light mb-2">
                  Interfere with another’s utilization and enjoyment of the
                  Site;
                </li>
                <li className="font-weight-light mb-2">
                  Post, promote or transmit through the Site any prohibited
                  materials as deemed illegal by The Islamic Republic of
                  Pakistan.
                </li>
                <li className="font-weight-light mb-2">
                  Use or upload, in any way, any software or material that
                  contains, or which you have reason to suspect that contains,
                  viruses, damaging components, malicious code or harmful
                  components which may impair or corrupt the Site’s data or
                  damage or interfere with the operation of another Customer’s
                  computer or mobile device or the Site and use the Site other
                  than in conformance with the acceptable use policies of any
                  connected computer networks, any applicable Internet standards
                  and any other applicable laws.
                </li>
              </ul>
              <h6 className="my-md-4 my-3">Account & Registration</h6>
              <p className="font-weight-light mb-2">
                To access certain services offered by the platform, we may
                require that you create an account with us or provide personal
                information to complete the creation of an account. We may at
                any time in our sole and absolute discretion, invalidate the
                username and/or password without giving any reason or prior
                notice and shall not be liable or responsible for any losses
                suffered by, caused by, arising out of, in connection with or by
                reason of such request or invalidation.
                <br />
                <br />
                You are responsible for maintaining the confidentiality of your
                user identification, password, account details and related
                private information. You agree to accept this responsibility and
                ensure your account and its related details are maintained
                securely at all times and all necessary steps are taken to
                prevent misuse of your account. You should inform us immediately
                if you have any reason to believe that your password has become
                known to anyone else, or if the password is being, or is likely
                to be, used in an unauthorized manner. You agree and acknowledge
                that any use of the Site and related services offered and/or any
                access to private information, data or communications using your
                account and password shall be deemed to be either performed by
                you or authorized by you as the case may be. You agree to be
                bound by any access of the Site and/or use of any services
                offered by the Site (whether such access or use are authorized
                by you or not). You agree that we shall be entitled (but not
                obliged) to act upon, rely on or hold you solely responsible and
                liable in respect thereof as if the same were carried out or
                transmitted by you. You further agree and acknowledge that you
                shall be bound by and agree to fully indemnify us against any
                and all losses arising from the use of or access to the Site
                through your account.
                <br />
                <br />
                Please ensure that the details you provide us with are correct
                and complete at all times. You are obligated to update details
                about your account in real time by accessing your account
                online. For pieces of information you are not able to update by
                accessing Your Account on the Site, you must inform us via our
                customer service communication channels to assist you with these
                changes. We reserve the right to refuse access to the Site,
                terminate accounts, remove or edit content at any time without
                prior notice to you. We may at any time in our sole and absolute
                discretion, request that you update your Personal Data or
                forthwith invalidate the account or related details without
                giving any reason or prior notice and shall not be liable or
                responsible for any losses suffered by or caused by you or
                arising out of or in connection with or by reason of such
                request or invalidation. You hereby agree to change your
                password from time to time and to keep your account secure and
                also shall be responsible for the confidentiality of your
                account and liable for any disclosure or use (whether such use
                is authorised or not) of the username and/or password.
              </p>
              <p className="font-weight-light mb-2">
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum"
              </p>
              <p className="font-weight-light mb-2">
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
              <h6 className="my-md-4 my-3">Copyrights & Trademarks</h6>
              <p className="font-weight-light mb-2">
                {" "}
                Flashstore.com.pk, Flash Store logo, D for Flash Store logo,
                Flash Store, Flash Store Fashion, Flash Store Basics and other
                marks indicated on our Site are trademarks or registered
                trademarks in the relevant jurisdiction(s). Our graphics, logos,
                page headers, button icons, scripts and service names are the
                trademarks or trade dress and may not be used in connection with
                any product or service that does not belong to us or in any
                manner that is likely to cause confusion among customers, or in
                any manner that disparages or discredits us. All other
                trademarks that appear on this Site are the property of their
                respective owners, who may or may not be affiliated with,
                connected to, or sponsored by us.
                <br />
                <br />
                All intellectual property rights, whether registered or
                unregistered, in the Site, information content on the Site and
                all the website design, including, but not limited to text,
                graphics, software, photos, video, music, sound, and their
                selection and arrangement, and all software compilations,
                underlying source code and software shall remain our property.
                The entire contents of the Site also are protected by copyright
                as a collective work under Pakistani copyright laws and
                international conventions. All rights are reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
