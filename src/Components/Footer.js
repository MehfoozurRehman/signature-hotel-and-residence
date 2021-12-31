import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo-dark.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__col">
          <Link to="/" className="header__logo">
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              className="header__logo__img"
            />
          </Link>
          <div className="footer__wrapper__col__content">
            A PLACE WHERE HOSPITALITY WELCOMES YOU.
          </div>
        </div>
        <div className="footer__wrapper__col footer__wrapper__col__reverse">
          <div className="footer__wrapper__col__heading">Pages</div>
          <div className="footer__wrapper__col__links">
            <Link to="/about-us" className="footer__wrapper__col__links__entry">
              About Signature
            </Link>
            <Link to="/location" className="footer__wrapper__col__links__entry">
              Location
            </Link>
            <Link to="/features" className="footer__wrapper__col__links__entry">
              Features
            </Link>
            <Link
              to="/construction_update"
              className="footer__wrapper__col__links__entry"
            >
              Construction Updates
            </Link>
          </div>
        </div>
        <div className="footer__wrapper__col footer__wrapper__col__reverse">
          <div className="footer__wrapper__col__heading">Socials</div>
          <div className="footer__wrapper__col__links">
            <a href="#" className="footer__wrapper__col__links__entry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.91"
                height="17.063"
                viewBox="0 0 8.91 17.063"
              >
                <path
                  id="Path_2301"
                  data-name="Path 2301"
                  d="M85.782,17.062V9.29h2.654l.379-3.033H85.782V4.36c0-.853.284-1.517,1.517-1.517H88.91V.095C88.531.095,87.583,0,86.541,0a3.659,3.659,0,0,0-3.886,3.981V6.256H80V9.29h2.654v7.773Z"
                  transform="translate(-80)"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              Facebook
            </a>
            <a href="#" className="footer__wrapper__col__links__entry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.063"
                height="13.84"
                viewBox="0 0 17.063 13.84"
              >
                <path
                  id="Path_2302"
                  data-name="Path 2302"
                  d="M43.4,15.84a9.865,9.865,0,0,0,9.953-9.953V5.413a7.705,7.705,0,0,0,1.706-1.8,7.869,7.869,0,0,1-1.991.569,3.688,3.688,0,0,0,1.517-1.9,8.7,8.7,0,0,1-2.18.853A3.385,3.385,0,0,0,49.849,2a3.561,3.561,0,0,0-3.507,3.507,1.848,1.848,0,0,0,.095.758,9.8,9.8,0,0,1-7.2-3.7,3.63,3.63,0,0,0-.474,1.8,3.766,3.766,0,0,0,1.517,2.939,3.2,3.2,0,0,1-1.611-.474h0a3.464,3.464,0,0,0,2.844,3.412,2.922,2.922,0,0,1-.948.095,1.613,1.613,0,0,1-.664-.095,3.591,3.591,0,0,0,3.318,2.465,7.157,7.157,0,0,1-4.36,1.517A2.624,2.624,0,0,1,38,14.133a8.947,8.947,0,0,0,5.4,1.706"
                  transform="translate(-38 -2)"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              Twitter
            </a>
            <a href="#" className="footer__wrapper__col__links__entry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.063"
                height="17.063"
                viewBox="0 0 17.063 17.063"
              >
                <path
                  id="Path_2303"
                  data-name="Path 2303"
                  d="M8.531,1.517a26.159,26.159,0,0,1,3.413.095,4.4,4.4,0,0,1,1.611.284,3.329,3.329,0,0,1,1.611,1.611,4.4,4.4,0,0,1,.284,1.611c0,.853.095,1.138.095,3.413a26.158,26.158,0,0,1-.095,3.413,4.4,4.4,0,0,1-.284,1.611,3.329,3.329,0,0,1-1.611,1.611,4.4,4.4,0,0,1-1.611.284c-.853,0-1.137.095-3.413.095a26.158,26.158,0,0,1-3.413-.095,4.4,4.4,0,0,1-1.611-.284A3.329,3.329,0,0,1,1.9,13.555a4.4,4.4,0,0,1-.284-1.611c0-.853-.095-1.137-.095-3.413a26.159,26.159,0,0,1,.095-3.413A4.4,4.4,0,0,1,1.9,3.507a3.4,3.4,0,0,1,.664-.948A1.6,1.6,0,0,1,3.507,1.9a4.4,4.4,0,0,1,1.611-.284,26.159,26.159,0,0,1,3.413-.095M8.531,0A28.008,28.008,0,0,0,5.024.095,5.852,5.852,0,0,0,2.939.474a3.711,3.711,0,0,0-1.517.948A3.711,3.711,0,0,0,.474,2.939,4.319,4.319,0,0,0,.095,5.024,28.008,28.008,0,0,0,0,8.531a28.008,28.008,0,0,0,.095,3.507,5.852,5.852,0,0,0,.379,2.085,3.711,3.711,0,0,0,.948,1.517,3.711,3.711,0,0,0,1.517.948,5.852,5.852,0,0,0,2.085.379,28.008,28.008,0,0,0,3.507.095,28.008,28.008,0,0,0,3.507-.095,5.852,5.852,0,0,0,2.085-.379,3.977,3.977,0,0,0,2.465-2.465,5.852,5.852,0,0,0,.379-2.085c0-.948.095-1.232.095-3.507a28.008,28.008,0,0,0-.095-3.507,5.852,5.852,0,0,0-.379-2.085,3.711,3.711,0,0,0-.948-1.517A3.711,3.711,0,0,0,14.124.474,5.852,5.852,0,0,0,12.039.095,28.008,28.008,0,0,0,8.531,0m0,4.171a4.29,4.29,0,0,0-4.36,4.36,4.36,4.36,0,1,0,4.36-4.36m0,7.2A2.793,2.793,0,0,1,5.688,8.531,2.793,2.793,0,0,1,8.531,5.688a2.793,2.793,0,0,1,2.844,2.844,2.793,2.793,0,0,1-2.844,2.844m4.55-8.436a1.043,1.043,0,1,0,1.043,1.043,1.052,1.052,0,0,0-1.043-1.043"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              Instagram
            </a>
            <a href="#" className="footer__wrapper__col__links__entry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.316"
                height="17.316"
                viewBox="0 0 17.316 17.316"
              >
                <path
                  id="iconmonstr-linkedin-3"
                  d="M13.709,0H3.608A3.608,3.608,0,0,0,0,3.608v10.1a3.608,3.608,0,0,0,3.608,3.608h10.1a3.608,3.608,0,0,0,3.608-3.608V3.608A3.608,3.608,0,0,0,13.709,0ZM5.772,13.709H3.608V5.772H5.772ZM4.69,4.857A1.273,1.273,0,1,1,5.953,3.584,1.268,1.268,0,0,1,4.69,4.857Zm9.74,8.852H12.266V9.665c0-2.43-2.886-2.246-2.886,0v4.043H7.215V5.772H9.38V7.046A2.744,2.744,0,0,1,14.43,8.832Z"
                  fill="currentColor"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer__wrapper__col ">
          <div className="footer__wrapper__col__heading">
            Subscribe to Newsletter
          </div>
          <form className="footer__wrapper__col__form">
            <input
              type="text"
              className="footer__wrapper__col__form__input"
              placeholder="Enter Email"
            />
            <button className="footer__wrapper__col__form__button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
