import React, { Component } from "react";
import map_img from "../Assets/map_img.png";
import services__background__Img1 from "../Assets/services__background__Img1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
      servicesCarouselHeading: "Transport",
      servicesCarouselContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      services__background__Img: services__background__Img1,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="map__container">
          <div className="side__panel" style={{ right: "-220px" }}>
            <a href="#" className="side__panel__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.032"
                height="16.037"
                viewBox="0 0 14.032 16.037"
              >
                <g id="brochure" transform="translate(-32)">
                  <path
                    id="Path_133"
                    data-name="Path 133"
                    d="M251.33,79h4.657v1.722H251.33Z"
                    transform="translate(-212.46 -76.526)"
                    fill="#530934"
                  />
                  <path
                    id="Path_134"
                    data-name="Path 134"
                    d="M179.8,0h-7.265a1.2,1.2,0,0,0-1.2,1.2V12.421a.47.47,0,0,0,.47.47h8a1.2,1.2,0,0,0,1.2-1.2V1.2A1.2,1.2,0,0,0,179.8,0Zm-5.034,11.714h-1.4a.47.47,0,0,1,0-.94h1.4a.47.47,0,0,1,0,.94Zm3.49-1.566h-4.887a.47.47,0,1,1,0-.94h4.887a.47.47,0,1,1,0,.94ZM172.9,8.112a.47.47,0,0,1,.47-.47h4.343a.47.47,0,1,1,0,.94h-4.343A.47.47,0,0,1,172.9,8.112Zm6.066-1.1h-5.6a.47.47,0,1,1,0-.94h5.6a.47.47,0,1,1,0,.94Zm.47-2.349a.47.47,0,0,1-.47.47h-5.6a.47.47,0,0,1-.47-.47V2a.47.47,0,0,1,.47-.47h5.6a.47.47,0,0,1,.47.47Z"
                    transform="translate(-134.966)"
                    fill="#530934"
                  />
                  <path
                    id="Path_135"
                    data-name="Path 135"
                    d="M35.424,90.351v-9.9H33.2a1.2,1.2,0,0,0-1.2,1.2V92.765a1.2,1.2,0,0,0,1.2,1.2h7.122L36.2,91.61A1.411,1.411,0,0,1,35.424,90.351Z"
                    transform="translate(0 -77.93)"
                    fill="#530934"
                  />
                  <path
                    id="Path_136"
                    data-name="Path 136"
                    d="M240.249,443.373a.482.482,0,0,0,.008-.086V441.55H237.01Z"
                    transform="translate(-198.589 -427.72)"
                    fill="#530934"
                  />
                </g>
              </svg>
              Download Brouchure
            </a>
            <a
              href="#"
              className="side__panel__link side__panel__link__primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.375"
                height="14.375"
                viewBox="0 0 14.375 14.375"
              >
                <g id="call" opacity="0.89">
                  <g id="Group_71" data-name="Group 71">
                    <path
                      id="Path_132"
                      data-name="Path 132"
                      d="M13.221,9.435a8.162,8.162,0,0,1-2.563-.408,1.172,1.172,0,0,0-1.139.24L7.9,10.488A8.932,8.932,0,0,1,3.887,6.472L5.071,4.9a1.162,1.162,0,0,0,.286-1.177,8.174,8.174,0,0,1-.41-2.567A1.155,1.155,0,0,0,3.793,0H1.153A1.155,1.155,0,0,0,0,1.153,13.236,13.236,0,0,0,13.221,14.375a1.155,1.155,0,0,0,1.153-1.153V10.589A1.155,1.155,0,0,0,13.221,9.435Z"
                      fill="#530934"
                    />
                  </g>
                </g>
              </svg>
              Contact Us
            </a>
          </div>
          <div className="map__container__content">
            <img src={map_img} alt="map_img" className="map__container__img" />
            <div className="map__container__details">
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  New Airport
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__container contact__container__second">
          <div className="contact__container__content">
            <form action="" className="contact__container__content__form">
              <div className="contact__container__content__form__left">
                <div className="contact__container__content__form__sub__heading heading">
                  Contact Us
                </div>
                <div className="contact__container__content__form__sub__heading__line"></div>
                <div className="contact__container__content__form__heading heading">
                  Get <span>in touch</span>
                </div>
                <div className="contact__container__content__form__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry, when an unknown printer took a galley of
                  1500.
                </div>
                <div className="contact__container__content__form__row">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact__container__content__form__input"
                  />
                  <div className="contact__container__content__form__row__spacer"></div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="contact__container__content__form__input"
                  />
                </div>
                <div className="contact__container__content__form__col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="contact__container__content__form__input"
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    className="contact__container__content__form__textarea"
                  ></textarea>
                </div>
                <button className="heading contact__container__content__form__button">
                  Send
                </button>
              </div>
              <div className="contact__container__content__form__right">
                <div className="contact__container__content__form__right__map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.48983069125!2d74.1943041387545!3d31.483156883765346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1633512469580!5m2!1sen!2s"
                    loading="lazy"
                  ></iframe>
                  <div className="contact__container__content__form__right__bottom__content">
                    <div className="contact__container__content__form__right__phone">
                      Phone
                      <div className="contact__container__content__form__right__phone__number">
                        354 454 5344 343
                      </div>
                      <div className="contact__container__content__form__right__phone__number">
                        354 454 5344 343
                      </div>
                    </div>
                    <div className="contact__container__content__form__right__bottom__content__social__links">
                      <a className="social__links">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10.001"
                          height="20"
                          viewBox="0 0 12.001 24"
                        >
                          <path
                            id="facebook"
                            d="M16,3.985h2.191V.169A28.292,28.292,0,0,0,15,0C11.837,0,9.673,1.987,9.673,5.639V9H6.187v4.266H9.673V24h4.274V13.267h3.345L17.823,9H13.946V6.062c0-1.233.333-2.077,2.051-2.077Z"
                            transform="translate(-6.187)"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                      <a className="social__links">
                        <svg
                          id="instagram_1_"
                          data-name="instagram (1)"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="Path_148"
                            data-name="Path 148"
                            d="M215.219,213.109A2.109,2.109,0,1,1,213.109,211,2.109,2.109,0,0,1,215.219,213.109Zm0,0"
                            transform="translate(-201.109 -201.109)"
                            fill="#fff"
                          />
                          <path
                            id="Path_149"
                            data-name="Path 149"
                            d="M129.938,120h-7.125A2.816,2.816,0,0,0,120,122.813v7.125a2.816,2.816,0,0,0,2.813,2.813h7.125a2.816,2.816,0,0,0,2.813-2.812v-7.125A2.816,2.816,0,0,0,129.938,120Zm-3.562,9.891a3.516,3.516,0,1,1,3.516-3.516A3.52,3.52,0,0,1,126.375,129.891Zm4.031-6.844a.7.7,0,1,1,.7-.7A.7.7,0,0,1,130.406,123.047Zm0,0"
                            transform="translate(-114.375 -114.375)"
                            fill="#fff"
                          />
                          <path
                            id="Path_150"
                            data-name="Path 150"
                            d="M17.672,0H6.328A6.335,6.335,0,0,0,0,6.328V17.672A6.335,6.335,0,0,0,6.328,24H17.672A6.335,6.335,0,0,0,24,17.672V6.328A6.335,6.335,0,0,0,17.672,0Zm2.109,15.562a4.224,4.224,0,0,1-4.219,4.219H8.438a4.224,4.224,0,0,1-4.219-4.219V8.437A4.224,4.224,0,0,1,8.438,4.219h7.125a4.224,4.224,0,0,1,4.219,4.219Zm0,0"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                      <a className="social__links">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21.846"
                          height="18"
                          viewBox="0 0 25.846 21"
                        >
                          <path
                            id="twitter"
                            d="M23.19,7.487a10.577,10.577,0,0,0,2.656-2.75h0a11.066,11.066,0,0,1-3.053.837,5.271,5.271,0,0,0,2.332-2.928,10.6,10.6,0,0,1-3.36,1.283A5.3,5.3,0,0,0,12.6,7.55a5.456,5.456,0,0,0,.123,1.208A15,15,0,0,1,1.8,3.215,5.3,5.3,0,0,0,3.428,10.3a5.238,5.238,0,0,1-2.394-.653V9.7a5.324,5.324,0,0,0,4.245,5.207,5.269,5.269,0,0,1-1.389.174,4.677,4.677,0,0,1-1-.09,5.351,5.351,0,0,0,4.951,3.692,10.651,10.651,0,0,1-6.57,2.259A10.022,10.022,0,0,1,0,20.872,14.922,14.922,0,0,0,8.129,23.25,14.978,14.978,0,0,0,23.19,7.487Z"
                            transform="translate(0 -2.25)"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                      <a className="social__links">
                        <svg
                          id="google"
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 25 25"
                        >
                          <g
                            id="Group_81"
                            data-name="Group 81"
                            transform="translate(0 6.969)"
                          >
                            <g id="Group_80" data-name="Group 80">
                              <path
                                id="Path_144"
                                data-name="Path 144"
                                d="M5.547,145.175l-4.258-2.458a12.418,12.418,0,0,0,.018,11.053l4.24-2.448a7.535,7.535,0,0,1,0-6.147Z"
                                transform="translate(0 -142.717)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_83"
                            data-name="Group 83"
                            transform="translate(2.106 0)"
                          >
                            <g id="Group_82" data-name="Group 82">
                              <path
                                id="Path_145"
                                data-name="Path 145"
                                d="M61.721,3.065A12.5,12.5,0,0,0,43.127,5.558l4.261,2.46A7.574,7.574,0,0,1,58.353,6.634a.808.808,0,0,0,1.087-.053L61.761,4.26A.819.819,0,0,0,61.721,3.065Z"
                                transform="translate(-43.127 0)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_85"
                            data-name="Group 85"
                            transform="translate(13.044 10.326)"
                          >
                            <g id="Group_84" data-name="Group 84">
                              <path
                                id="Path_146"
                                data-name="Path 146"
                                d="M279,212.207a.82.82,0,0,0-.813-.727H267.946a.815.815,0,0,0-.815.815v3.258a.815.815,0,0,0,.815.815h5.74a7.666,7.666,0,0,1-2.616,3.419l2.438,4.223a12.766,12.766,0,0,0,5.141-7.145A12.031,12.031,0,0,0,279,212.207Z"
                                transform="translate(-267.131 -211.479)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_87"
                            data-name="Group 87"
                            transform="translate(2.123 16.982)"
                          >
                            <g id="Group_86" data-name="Group 86">
                              <path
                                id="Path_147"
                                data-name="Path 147"
                                d="M56.936,350.271a7.562,7.562,0,0,1-9.206-2.47l-4.243,2.45a12.487,12.487,0,0,0,10.377,5.568,12.244,12.244,0,0,0,5.512-1.322Z"
                                transform="translate(-43.487 -347.801)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
