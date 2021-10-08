import React, { Component, useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import logo from "../Assets/logo.svg";
import bannerImg from "../Assets/bannerImg.png";
import ring from "../Assets/ring.png";
import contactImg from "../Assets/contactImg.png";
import apartmentPic from "../Assets/apartmentPic.png";
import sorroundingImg from "../Assets/sorroundingImg.png";
import main__backgound from "../Assets/main__backgound.png";
import BuildingDetailPic from "../Assets/BuildingDetailPic.png";
import photoGalleryImg1 from "../Assets/photo-gallery/1.png";
import photoGalleryImg2 from "../Assets/photo-gallery/2.png";
import photoGalleryImg3 from "../Assets/photo-gallery/3.png";
import photoGalleryImg4 from "../Assets/photo-gallery/4.png";
import photoGalleryImg5 from "../Assets/photo-gallery/5.png";
import photoGalleryImg6 from "../Assets/photo-gallery/6.png";
import MultiRangeSlider from "multi-range-slider-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function BuildingDetailsCard({ svg, Heading, subHeading }) {
  return (
    <div className="building__details__container__wrapper__card">
      {svg}

      <div className="building__details__container__wrapper__card__content">
        <div className="building__details__container__wrapper__card__content__top">
          {Heading}
        </div>
        <div className="building__details__container__wrapper__card__content__bottom">
          {subHeading}
        </div>
      </div>
    </div>
  );
}

function BuildingDimensionsEntry({ defaultChecked }) {
  return (
    <div className="apartment__details__container__wrapper__content__middle__entry__wrapper">
      <input
        type="radio"
        defaultChecked={defaultChecked}
        className="apartment__details__container__wrapper__content__middle__entry__input"
        name="apartment__details__container__wrapper__content__middle__entry__input"
      />
      <div className="apartment__details__container__wrapper__content__middle__entry">
        <div className="apartment__details__container__wrapper__content__middle__entry__content">
          <div className="apartment__details__container__wrapper__content__middle__entry__content__value">
            60 m <sup>2</sup>
          </div>
          <div className="apartment__details__container__wrapper__content__middle__entry__content__label">
            Space
          </div>
        </div>
        <div className="apartment__details__container__wrapper__content__middle__entry__bar"></div>
        <div className="apartment__details__container__wrapper__content__middle__entry__content">
          <div className="apartment__details__container__wrapper__content__middle__entry__content__value">
            03
          </div>
          <div className="apartment__details__container__wrapper__content__middle__entry__content__label">
            Rooms
          </div>
        </div>
        <div className="apartment__details__container__wrapper__content__middle__entry__bar"></div>
        <div className="apartment__details__container__wrapper__content__middle__entry__content">
          <div className="apartment__details__container__wrapper__content__middle__entry__content__value">
            Rs 3000
          </div>
          <div className="apartment__details__container__wrapper__content__middle__entry__content__label">
            Per m <sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}
function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    photoGalleryImg1,
    photoGalleryImg2,
    photoGalleryImg3,
    photoGalleryImg4,
    photoGalleryImg5,
    photoGalleryImg6,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="photo__gallery__container__content">
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          alt="photo__gallery__container__content__img"
          className="photo__gallery__container__content__img"
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main__section__container">
          <img
            src={main__backgound}
            alt="main__background"
            className="main__section__container__img"
          />
          <div className="main__section__container__wrap">
            <div className="side__panel">
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
            <div className="main__section__container__wrap__links">
              <a href="#" className="main__section__container__wrap__link">
                <img
                  src={ring}
                  alt="ring"
                  className="main__section__container__wrap__link__img"
                />
                <div className="main__section__container__wrap__link__text">
                  Commercial
                </div>
              </a>
              <a href="#" className="main__section__container__wrap__link">
                <img
                  src={ring}
                  alt="ring"
                  className="main__section__container__wrap__link__img"
                />
                <div className="main__section__container__wrap__link__text">
                  Hotel Services
                </div>
              </a>
              <a href="#" className="main__section__container__wrap__link">
                <img
                  src={ring}
                  alt="ring"
                  className="main__section__container__wrap__link__img"
                />
                <div className="main__section__container__wrap__link__text">
                  Hotel Suites
                </div>
              </a>
              <a href="#" className="main__section__container__wrap__link">
                <img
                  src={ring}
                  alt="ring"
                  className="main__section__container__wrap__link__img"
                />
                <div className="main__section__container__wrap__link__text">
                  Service Apartments
                </div>
              </a>
            </div>
            <div className="main__section__container__wrap__bottom"></div>
          </div>
        </div>
        <div className="youtube__video__container">
          <iframe
            src="https://www.youtube.com/embed/ShcR4Zfc6Dw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="hotel__services__container">
          <div className="hotel__services__container__content">
            <div className="hotel__services__container__content__heading">
              Hotel Services
            </div>
            <div className="hotel__services__container__content__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              reprehenderit obcaecati, assumenda iusto velit aperiam beatae
              necessitatibus repellendus, asperiores rerum nisi est facere
              explicabo recusandae qui dolor quos harum ipsa fugit nemo soluta.
              Sunt quidem molestias perspiciatis sit, pariatur nesciunt aperiam
              deleniti! Magnam vel consequatur fugiat fugit delectus veniam
              quidem.
            </div>
            <div className="hotel__services__container__content__icons">
              <div className="hotel__services__container__content__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.246"
                  height="15.779"
                  viewBox="0 0 26.246 15.779"
                  fill="currentColor"
                >
                  <path
                    id="Path_56"
                    data-name="Path 56"
                    d="M-2890.326,1125.59c.268-.5.515-.967.765-1.43q2.393-4.435,4.783-8.872a.416.416,0,0,1,.429-.257q5.584.01,11.167,0a.4.4,0,0,1,.415.238q2.66,4.954,5.333,9.9c.069.128.131.259.212.419Zm11.167-2.42v2.1h.776v-2.1Zm.714-.509v-2.1h-.661v2.1Zm-.048-2.617v-2.1h-.576c0,.56.007,1.1,0,1.648s.016.558.557.463C-2878.507,1120.055-2878.5,1120.047-2878.493,1120.043Zm-.492-4.7v2.1h.431v-2.1Z"
                    transform="translate(2891.895 -1109.835)"
                  />
                  <path
                    id="Path_57"
                    data-name="Path 57"
                    d="M-2894.2,1075.261v1.547h-1.146v2.784c-.524,0-1.014.008-1.5-.009-.069,0-.155-.115-.2-.2q-.6-1.146-1.187-2.3a.371.371,0,0,0-.379-.246q-8.7.009-17.391,0a.346.346,0,0,0-.363.22c-.387.771-.8,1.531-1.187,2.3a.368.368,0,0,1-.389.235c-.427-.013-.854,0-1.318,0v-2.746h-1.171v-1.588Z"
                    transform="translate(2920.436 -1072.136)"
                  />
                  <path
                    id="Path_58"
                    data-name="Path 58"
                    d="M-2745.079,1018.075h-8.929c.094-.179.173-.333.255-.485.338-.63.682-1.257,1.012-1.891a.337.337,0,0,1,.344-.212c1.9.006,3.8,0,5.695.008a.368.368,0,0,1,.279.113C-2745.971,1016.415-2745.535,1017.231-2745.079,1018.075Zm-4.584-.225c.179.055.27.02.258-.171-.015-.251-.015-.5-.035-.752,0-.055-.069-.1-.106-.157-.039.049-.109.1-.111.146C-2749.667,1017.22-2749.662,1017.526-2749.662,1017.85Zm.2-2.138c-.317.155-.147.412-.189.6-.01.046.076.114.117.172l.071-.043Z"
                    transform="translate(2762.673 -1015.474)"
                  />
                  <path
                    id="Path_59"
                    data-name="Path 59"
                    d="M-2548.116,1115.116c.274,0,.5-.015.716.008a.348.348,0,0,1,.222.163q1.711,2.98,3.41,5.967l2.36,4.136c.045.079.086.16.155.29-.362,0-.682.01-1-.009-.066,0-.142-.11-.184-.185q-2.067-3.755-4.126-7.513-.723-1.317-1.445-2.636C-2548.039,1115.282-2548.064,1115.224-2548.116,1115.116Z"
                    transform="translate(2567.5 -1109.912)"
                  />
                  <path
                    id="Path_60"
                    data-name="Path 60"
                    d="M-2913.616,1114.877c-.412.758-.8,1.475-1.191,2.189q-1.828,3.329-3.661,6.657c-.277.5-.547,1.012-.84,1.507a.471.471,0,0,1-.315.195,8.57,8.57,0,0,1-.864.009c.241-.43.458-.823.68-1.213,1.692-2.965,3.392-5.925,5.068-8.9.2-.357.417-.532.819-.461A2.768,2.768,0,0,0-2913.616,1114.877Z"
                    transform="translate(2920.486 -1109.661)"
                  />
                  <path
                    id="Path_61"
                    data-name="Path 61"
                    d="M-2774.136,1015.288c-.462.84-.907,1.651-1.357,2.458a.212.212,0,0,1-.144.1c-.219.011-.438,0-.707,0,.315-.556.605-1.069.9-1.581.1-.177.205-.352.306-.529C-2774.827,1015.187-2774.827,1015.187-2774.136,1015.288Z"
                    transform="translate(2783.848 -1015.236)"
                  />
                  <path
                    id="Path_62"
                    data-name="Path 62"
                    d="M-2599.784,1018.177c-.271,0-.484.008-.694-.005a.246.246,0,0,1-.169-.11c-.437-.786-.868-1.576-1.3-2.366-.011-.021,0-.053,0-.111.2,0,.388-.009.58.006a.255.255,0,0,1,.169.116C-2600.735,1016.508-2600.278,1017.313-2599.784,1018.177Z"
                    transform="translate(2618.534 -1015.564)"
                  />
                </svg>
              </div>
              <div className="hotel__services__container__content__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.699"
                  height="29.59"
                  viewBox="0 0 29.699 29.59"
                  fill="currentColor"
                >
                  <g
                    id="Group_95"
                    data-name="Group 95"
                    transform="translate(-367.334 -2267.865)"
                  >
                    <path
                      id="Path_34"
                      data-name="Path 34"
                      d="M-1918.507,1025.129a7.854,7.854,0,0,1-7.859,7.867,7.853,7.853,0,0,1-7.851-7.868,7.862,7.862,0,0,1,7.841-7.855A7.861,7.861,0,0,1-1918.507,1025.129Zm-7.866-3.894a3.9,3.9,0,0,0-3.91,3.909,3.91,3.91,0,0,0,3.958,3.894,3.9,3.9,0,0,0,3.877-3.914A3.894,3.894,0,0,0-1926.373,1021.235Zm5.7,6.41a.591.591,0,0,0,.457-.634.3.3,0,0,0-.324-.31c-.22,0-.45.314-.436.619A.3.3,0,0,0-1920.677,1027.645Zm.768-2.354c-.024-.123-.009-.275-.078-.343a.446.446,0,0,0-.355-.124c-.273.074-.269.339-.239.55a.59.59,0,0,0,.241.374c.066.042.261-.041.342-.123S-1919.936,1025.4-1919.91,1025.29Zm-8.675-5.963a.3.3,0,0,0,.34.319c.348,0,.668-.228.6-.433a.5.5,0,0,0-.327-.3C-1928.3,1018.871-1928.592,1019.1-1928.584,1019.328Zm4.435,11.63a.327.327,0,0,0-.329-.339c-.334,0-.641.2-.627.426a.324.324,0,0,0,.321.323C-1924.478,1031.4-1924.155,1031.179-1924.149,1030.957Zm-5.481-.772c0-.33-.405-.667-.627-.617a.3.3,0,0,0-.261.362c.022.185.406.526.579.476A1.007,1.007,0,0,0-1929.63,1030.185Zm-2-8.529a1,1,0,0,0,.313.213c.181.048.518-.342.518-.564a.305.305,0,0,0-.3-.333C-1931.308,1020.952-1931.637,1021.324-1931.634,1021.657Zm10.7.235c0-.33-.3-.713-.494-.694a.335.335,0,0,0-.334.338c-.006.2.357.62.517.573A1.031,1.031,0,0,0-1920.932,1021.892Zm-10.819,1.04a.3.3,0,0,0-.323-.3c-.218-.007-.445.309-.433.62a.3.3,0,0,0,.308.322C-1931.966,1023.584-1931.764,1023.309-1931.751,1022.931Zm7.276-3.939a.324.324,0,0,0-.346.318c0,.219.3.413.628.419a.3.3,0,0,0,.326-.3C-1923.842,1019.213-1924.152,1019-1924.476,1018.992Zm-5.6,1.521c.334,0,.7-.3.688-.5a.32.32,0,0,0-.334-.332c-.217,0-.61.343-.565.518A.971.971,0,0,0-1930.073,1020.513Zm9.607,3.338a.3.3,0,0,0,.32-.333c0-.331-.174-.609-.392-.613s-.345.106-.333.316C-1920.853,1023.515-1920.739,1023.874-1920.465,1023.851Zm-2.041-3.161a.289.289,0,0,0,.287-.316.727.727,0,0,0-.561-.525.3.3,0,0,0-.325.333C-1923.1,1020.383-1922.747,1020.694-1922.506,1020.69Zm.573,8.332a.314.314,0,0,0,.336.287c.2,0,.508-.377.5-.593a.3.3,0,0,0-.319-.312C-1921.612,1028.391-1921.935,1028.762-1921.933,1029.021Zm-.736.739c-.337,0-.695.305-.685.5a.315.315,0,0,0,.312.325c.22.019.634-.336.586-.522A.948.948,0,0,0-1922.668,1029.76Zm-9.677-3.357c-.049.048-.175.121-.222.229a.67.67,0,0,0,.25.673.428.428,0,0,0,.3,0c.213-.118.166-.315.11-.511S-1932.013,1026.416-1932.345,1026.4Zm-.456-1.492c0,.4.113.561.337.553.2-.007.319-.173.322-.467,0-.074.025-.166-.01-.218-.065-.1-.157-.23-.252-.243a.47.47,0,0,0-.341.144C-1932.809,1024.745-1932.8,1024.886-1932.8,1024.911Zm1.212,3.242a.913.913,0,0,0-.2.286c-.053.182.221.561.4.6a.307.307,0,0,0,.4-.208C-1930.91,1028.6-1931.241,1028.145-1931.589,1028.153Zm5.39-8.774a1.139,1.139,0,0,0,.357-.123.286.286,0,0,0,.026-.442.694.694,0,0,0-.774-.035.294.294,0,0,0,0,.464A1.23,1.23,0,0,0-1926.2,1019.379Zm-2.311,11.16c-.219-.007-.352.1-.36.286-.011.259.216.383.6.44.212.031.329-.107.348-.306S-1928.185,1030.55-1928.51,1030.539Zm2.063.386c-.15,0-.251-.03-.291.006-.1.095-.256.223-.251.331.015.31.287.3.515.313s.417-.042.421-.282c0-.117-.13-.251-.229-.349C-1926.327,1030.9-1926.441,1030.926-1926.447,1030.925Z"
                      transform="translate(2308.548 1257.614)"
                    />
                    <path
                      id="Path_35"
                      data-name="Path 35"
                      d="M-2065.424,894.846c-.9,0-1.8,0-2.7,0a.544.544,0,0,1-.295-.044.455.455,0,0,1-.2-.291.466.466,0,0,1,.184-.329.7.7,0,0,1,.374-.065c1.606,0,3.213-.006,4.819,0a.371.371,0,0,0,.421-.277,9.548,9.548,0,0,1,5.694-5.638.337.337,0,0,0,.261-.376c-.01-1.607-.006-3.213-.006-4.82,0-.4.13-.605.382-.6s.351.189.351.592c0,1.783,0,3.566.006,5.349a.322.322,0,0,1-.271.364,8.823,8.823,0,0,0-5.913,5.845.351.351,0,0,1-.4.291C-2063.623,894.837-2064.524,894.846-2065.424,894.846Z"
                      transform="translate(2435.956 1385.456)"
                    />
                    <path
                      id="Path_36"
                      data-name="Path 36"
                      d="M-2062.413,1212.18a9.117,9.117,0,0,0,1.683,3.331,8.821,8.821,0,0,0,4.358,2.951.328.328,0,0,1,.283.381c-.012,1.746-.006,3.492-.008,5.239a.542.542,0,0,1-.039.3.5.5,0,0,1-.311.216.466.466,0,0,1-.321-.2.645.645,0,0,1-.058-.348c0-1.57-.006-3.139,0-4.709a.319.319,0,0,0-.246-.358,9.523,9.523,0,0,1-5.779-5.838.315.315,0,0,0-.358-.244c-1.616.007-3.232,0-4.848,0-.093,0-.21.024-.272-.023-.107-.08-.241-.2-.248-.314a.532.532,0,0,1,.207-.341.485.485,0,0,1,.293-.053q2.744,0,5.489,0C-2062.531,1212.171-2062.476,1212.177-2062.413,1212.18Z"
                      transform="translate(2435.911 1072.862)"
                    />
                    <path
                      id="Path_37"
                      data-name="Path 37"
                      d="M-1728.763,894.892c-.919,0-1.839,0-2.758,0a.256.256,0,0,1-.294-.209,8.892,8.892,0,0,0-6.055-6.028.218.218,0,0,1-.186-.25c0-1.848,0-3.7,0-5.545,0-.29.149-.471.365-.474s.366.178.366.494c0,1.644,0,3.288,0,4.932a.318.318,0,0,0,.246.358,9.547,9.547,0,0,1,5.76,5.752.353.353,0,0,0,.4.267c1.579-.008,3.157,0,4.736,0a.753.753,0,0,1,.355.025c.116.07.259.212.26.324s-.139.256-.252.333c-.078.053-.216.021-.327.021Z"
                      transform="translate(2122.598 1385.476)"
                    />
                    <path
                      id="Path_38"
                      data-name="Path 38"
                      d="M-1738.087,1223.16c0-.892,0-1.783,0-2.675a.256.256,0,0,1,.213-.292,8.839,8.839,0,0,0,6.033-6.042.231.231,0,0,1,.263-.18q2.772.005,5.545,0c.065,0,.154-.016.189.019.1.1.252.224.25.337s-.144.259-.261.324a.868.868,0,0,1-.384.021c-1.579,0-3.158,0-4.737,0a.321.321,0,0,0-.363.242,9.56,9.56,0,0,1-5.8,5.789.285.285,0,0,0-.219.32c.007,1.579,0,3.158,0,4.737,0,.093.026.212-.021.272-.087.113-.211.251-.333.265-.1.011-.25-.119-.328-.223a.583.583,0,0,1-.049-.322C-1738.089,1224.888-1738.087,1224.024-1738.087,1223.16Z"
                      transform="translate(2122.631 1071.156)"
                    />
                    <path
                      id="Path_39"
                      data-name="Path 39"
                      d="M-1789.742,936.42c0,.259-.153.44-.363.439a.408.408,0,0,1-.37-.442.406.406,0,0,1,.386-.453C-1789.878,935.977-1789.74,936.157-1789.742,936.42Z"
                      transform="translate(2172.289 1334.69)"
                    />
                    <path
                      id="Path_40"
                      data-name="Path 40"
                      d="M-1789.739,972.713c0,.271-.13.44-.348.447a.4.4,0,0,1-.385-.449.384.384,0,0,1,.372-.427C-1789.873,972.285-1789.74,972.443-1789.739,972.713Z"
                      transform="translate(2172.285 1300.26)"
                    />
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M-1983.477,1160.437c-.262,0-.437-.145-.438-.359a.408.408,0,0,1,.461-.374.39.39,0,0,1,.421.383C-1983.039,1160.3-1983.212,1160.438-1983.477,1160.437Z"
                      transform="translate(2355.659 1122.596)"
                    />
                    <path
                      id="Path_42"
                      data-name="Path 42"
                      d="M-1789.743,1359.669c0,.27-.127.442-.343.449a.385.385,0,0,1-.39-.413.409.409,0,0,1,.367-.469C-1789.9,1359.232-1789.747,1359.408-1789.743,1359.669Z"
                      transform="translate(2172.29 933.451)"
                    />
                    <path
                      id="Path_43"
                      data-name="Path 43"
                      d="M-1789.737,900.489c0,.268-.139.422-.368.42a.381.381,0,0,1-.365-.431.393.393,0,0,1,.363-.441C-1789.878,900.031-1789.734,900.207-1789.737,900.489Z"
                      transform="translate(2172.284 1368.747)"
                    />
                    <path
                      id="Path_44"
                      data-name="Path 44"
                      d="M-1789.743,1395.746c0,.26-.139.444-.349.455a.409.409,0,0,1-.384-.456.4.4,0,0,1,.372-.438C-1789.889,1395.307-1789.745,1395.482-1789.743,1395.746Z"
                      transform="translate(2172.29 899.258)"
                    />
                    <path
                      id="Path_45"
                      data-name="Path 45"
                      d="M-2055.574,1160.437c-.265,0-.44-.132-.449-.347a.392.392,0,0,1,.419-.386.407.407,0,0,1,.466.369C-2055.137,1160.286-2055.314,1160.434-2055.574,1160.437Z"
                      transform="translate(2424.015 1122.597)"
                    />
                    <path
                      id="Path_46"
                      data-name="Path 46"
                      d="M-2019.366,1160.44c-.275,0-.431-.126-.434-.353a.381.381,0,0,1,.42-.379c.272-.007.451.144.447.378S-2019.088,1160.44-2019.366,1160.44Z"
                      transform="translate(2389.676 1122.593)"
                    />
                    <path
                      id="Path_47"
                      data-name="Path 47"
                      d="M-1789.741,1432.1c0,.281-.116.419-.355.421s-.384-.158-.378-.436a.376.376,0,0,1,.379-.415C-1789.865,1431.675-1789.741,1431.826-1789.741,1432.1Z"
                      transform="translate(2172.288 864.787)"
                    />
                    <path
                      id="Path_48"
                      data-name="Path 48"
                      d="M-1603.745,1161.573c.281.008.434.131.436.35s-.182.359-.493.35c-.248-.008-.4-.15-.392-.365S-1604.016,1161.565-1603.745,1161.573Z"
                      transform="translate(1995.704 1120.825)"
                    />
                    <path
                      id="Path_49"
                      data-name="Path 49"
                      d="M-1531.6,1161.563c.247,0,.408.135.412.344s-.157.357-.426.357c-.291,0-.463-.135-.457-.357S-1531.9,1161.562-1531.6,1161.563Z"
                      transform="translate(1927.34 1120.834)"
                    />
                    <path
                      id="Path_50"
                      data-name="Path 50"
                      d="M-1567.551,1161.555c.3,0,.451.118.447.359,0,.222-.141.338-.406.342-.314.005-.457-.1-.46-.343S-1567.831,1161.558-1567.551,1161.555Z"
                      transform="translate(1961.366 1120.842)"
                    />
                  </g>
                </svg>
              </div>
              <div className="hotel__services__container__content__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.642"
                  height="16.234"
                  viewBox="0 0 29.642 16.234"
                  fill="currentColor"
                >
                  <g
                    id="Group_96"
                    data-name="Group 96"
                    transform="translate(-445.95 -2274.576)"
                  >
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M-1187.051,1020.994c-1.429.547-2.8,1.01-4.119,1.59a3.969,3.969,0,0,1-4.383-.661q-2.636-2.11-5.245-4.254c-.567-.463-.521-.746.152-1a5.432,5.432,0,0,1,3.081-.686,7.151,7.151,0,0,1,2.044.757c.925.53,1.767,1.2,2.658,1.794a.665.665,0,0,0,.527.112c1.627-.774,3.24-1.576,4.939-2.41-.245-.168-.428-.3-.618-.423-1.176-.761-2.355-1.517-3.529-2.281-.613-.4-.6-.634.025-1.029,1.711-1.075,1.709-1.07,3.6-.36,1.551.581,3.1,1.16,4.665,1.708a1.114,1.114,0,0,0,.763-.046c1.137-.528,2.25-1.109,3.381-1.649a7.972,7.972,0,0,1,6.133-.407,1.893,1.893,0,0,1,1.422,1.718,1.891,1.891,0,0,1-1.269,1.832c-2.337.941-4.685,1.853-7.018,2.8a1.566,1.566,0,0,0-.721.6q-2.428,4.118-4.8,8.269a.984.984,0,0,1-1.008.586c-.756-.033-1.514,0-2.272-.011-.618-.007-.768-.217-.555-.791.673-1.809,1.355-3.615,2.033-5.422C-1187.128,1021.246-1187.106,1021.164-1187.051,1020.994Zm-1.288,5.744c.626,0,1.144-.03,1.656.009a.776.776,0,0,0,.819-.483c.8-1.426,1.633-2.837,2.453-4.254l2.617-4.526c-.218.07-.335.1-.446.144-1.3.512-2.6,1.011-3.888,1.554a1.174,1.174,0,0,0-.57.58c-.466,1.137-.885,2.294-1.318,3.445S-1187.876,1025.5-1188.339,1026.738Zm4.492-12.26c-1.745-.637-3.41-1.164-5-1.86a1.678,1.678,0,0,0-1.965.441c1.363.88,2.688,1.743,4.026,2.585a.6.6,0,0,0,.491.029C-1185.512,1015.314-1184.744,1014.921-1183.847,1014.478Z"
                      transform="translate(1647.14 1263.26)"
                    />
                  </g>
                </svg>
              </div>
              <div className="hotel__services__container__content__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.179"
                  height="24.486"
                  viewBox="0 0 24.179 24.486"
                  fill="currentColor"
                >
                  <g
                    id="Group_97"
                    data-name="Group 97"
                    transform="translate(-528.11 -2268.501)"
                  >
                    <path
                      id="Path_54"
                      data-name="Path 54"
                      d="M-275.037,902.21c-.25-1.475.8-1.261,1.671-1.281,0-1.291,0-2.533,0-3.774a1.828,1.828,0,0,1,1.777-2.064,60.426,60.426,0,0,1,9.727-.44c1.961.075,3.918.239,5.875.385a3.516,3.516,0,0,1,1.1.254A1.7,1.7,0,0,1-253.805,897c-.008,1.159.014,2.318-.01,3.477-.008.384.12.514.485.463a2.329,2.329,0,0,1,.381,0c.558.016.8.251.818.8,0,.14,0,.281,0,.414.639.238.639.238.639.943,0,.721-.009,1.442,0,2.163.007.408-.158.607-.575.586-.282-.014-.564-.016-.847-.015a.378.378,0,0,1-.417-.424q-.011-1.357,0-2.714c0-.375.285-.445.653-.479-.034-.222-.014-.585-.108-.617a2.847,2.847,0,0,0-.909-.069c-.037,0-.1.128-.106.2a3.306,3.306,0,0,0-.009.423q0,7.145,0,14.291c0,.81-.119.983-.886,1.279,0,.265.007.545,0,.824-.009.307-.134.514-.481.514-.633,0-1.267.008-1.9.008-.384,0-.508-.243-.513-.582,0-.251,0-.5,0-.773H-269.6c0,.288,0,.553,0,.818a.476.476,0,0,1-.5.556c-.621.016-1.243.013-1.865,0a.482.482,0,0,1-.511-.508,6.021,6.021,0,0,0-.018-.634.431.431,0,0,0-.2-.3,1,1,0,0,1-.674-1.1q.009-7.251,0-14.5v-.523c-.18-.009-.318-.021-.455-.022-.661,0-.661,0-.608.713.505-.006.6.307.581.75-.025.762,0,1.526-.008,2.29,0,.511-.075.583-.6.588-.268,0-.537,0-.805-.009a.376.376,0,0,1-.408-.429c0-.891.01-1.781,0-2.672C-275.672,902.323-275.411,902.245-275.037,902.21Zm11.458-2.663q-3.857,0-7.714,0c-.85,0-1.125.276-1.125,1.11q0,4.261,0,8.521c0,.926.258,1.209,1.174,1.277,1.774.132,3.546.3,5.322.382a64.308,64.308,0,0,0,10.192-.406c.75-.084,1-.4,1-1.154q0-4.282,0-8.564c0-.873-.3-1.167-1.174-1.167Zm-.03-.935h1.144c1.582,0,3.165,0,4.747,0,.385,0,.687-.1.7-.543.019-.508.019-1.018,0-1.526a.481.481,0,0,0-.5-.514c-.169,0-.338-.027-.506-.027q-5.574,0-11.147,0c-.141,0-.283,0-.424.008a.517.517,0,0,0-.547.567c0,.424,0,.848,0,1.272,0,.646.117.76.775.761Q-266.491,898.615-263.609,898.613Zm.047,17.093c-.762,0-1.525.018-2.287-.007-.435-.014-.427.239-.429.543s.029.507.427.5q2.265-.028,4.531,0c.4,0,.428-.195.423-.5s.022-.56-.421-.544C-262.064,915.725-262.813,915.705-263.561,915.705Zm-8.008-2.769a.8.8,0,0,0-.848.838.813.813,0,0,0,.848.845.816.816,0,0,0,.85-.844A.807.807,0,0,0-271.569,912.936Zm13.532.218a.863.863,0,0,0-.886.827.9.9,0,0,0,.85.879.886.886,0,0,0,.885-.842A.861.861,0,0,0-258.038,913.154Zm2.417,1.464a.843.843,0,0,0,.881-.829.846.846,0,0,0-.848-.863.845.845,0,0,0-.879.83A.843.843,0,0,0-255.621,914.619Zm-12.655-.607a.844.844,0,0,0-.829-.879.843.843,0,0,0-.853.854.839.839,0,0,0,.828.878A.84.84,0,0,0-268.276,914.012Z"
                      transform="translate(803.777 1373.891)"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <button className="hotel__services__container__content__button">
              View Details
            </button>
            <div className="hotel__services__container__content__gallery">
              <img
                src={photoGalleryImg1}
                alt="photoGalleryImg"
                className="hotel__services__container__content__gallery__img"
              />
              <img
                src={photoGalleryImg2}
                alt="photoGalleryImg"
                className="hotel__services__container__content__gallery__img"
              />
              <img
                src={photoGalleryImg3}
                alt="photoGalleryImg"
                className="hotel__services__container__content__gallery__img"
              />
            </div>
          </div>
        </div>
        <div className="apartment__details__container">
          <img
            src={ring}
            alt="ring"
            className="apartment__details__container__img"
          />
          <div className="apartment__details__container__wrapper">
            <form className="apartment__details__container__wrapper__content">
              <div className="apartment__details__container__wrapper__content__left">
                <div className="apartment__details__container__wrapper__content__left__heading">
                  Choose your Preferred floor or use filter selection
                </div>
                <div className="apartment__details__container__wrapper__content__left__row">
                  <div className="apartment__details__container__wrapper__content__left__sub__heading">
                    Rooms
                  </div>
                  <select
                    name=""
                    id=""
                    className="apartment__details__container__wrapper__content__left__select"
                  >
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                  </select>
                </div>
                <div className="apartment__details__container__wrapper__content__left__range">
                  <div className="apartment__details__container__wrapper__content__left__range__heading">
                    Rooms
                  </div>
                  <MultiRangeSlider
                    min={0}
                    max={100}
                    ruler={false}
                    label={true}
                    preventWheel={false}
                  />
                </div>
                <div className="apartment__details__container__wrapper__content__left__range">
                  <div className="apartment__details__container__wrapper__content__left__range__heading">
                    Rooms
                  </div>
                  <MultiRangeSlider
                    min={0}
                    max={100}
                    ruler={false}
                    label={true}
                    preventWheel={false}
                  />
                </div>
                <button className="apartment__details__container__wrapper__content__left__button">
                  View Details
                </button>
              </div>
              <div className="apartment__details__container__wrapper__content__middle">
                <BuildingDimensionsEntry defaultChecked={true} />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
              </div>
              <div className="apartment__details__container__wrapper__content__right">
                <div className="apartment__details__container__wrapper__content__right__heading">
                  Apartments - Comforts
                </div>
                <img
                  src={apartmentPic}
                  alt="apartmentPic"
                  className="apartment__details__container__wrapper__content__right__img"
                />
                <div className="apartment__details__container__wrapper__content__right__tabs">
                  <div className="apartment__details__container__wrapper__content_right__tabs__entry">
                    <input
                      type="radio"
                      className="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      name="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      defaultChecked={true}
                    />

                    <div className="apartment__details__container__wrapper__content_right__tabs__entry__content">
                      Visual
                    </div>
                  </div>
                  <div className="apartment__details__container__wrapper__content_right__tabs__entry">
                    <input
                      type="radio"
                      className="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      name="apartment__details__container__wrapper__content_right__tabs__entry__input"
                    />
                    <div className="apartment__details__container__wrapper__content_right__tabs__entry__content">
                      Plan
                    </div>
                  </div>
                  <div className="apartment__details__container__wrapper__content_right__tabs__entry">
                    <input
                      type="radio"
                      className="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      name="apartment__details__container__wrapper__content_right__tabs__entry__input"
                    />

                    <div className="apartment__details__container__wrapper__content_right__tabs__entry__content">
                      Flor
                    </div>
                  </div>
                </div>
                <div className="apartment__details__container__wrapper__content__right__data__row">
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Total Area
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    60m <sup>2</sup>
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Tower
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    East
                  </div>
                </div>
                <div className="apartment__details__container__wrapper__content__right__data__row">
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Total Area
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    60m <sup>2</sup>
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Tower
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    East
                  </div>
                </div>
                <div className="apartment__details__container__wrapper__content__right__data__row">
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Total Area
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    60m <sup>2</sup>
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Tower
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    East
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="banner__container">
          <img
            src={bannerImg}
            alt="bannerImg"
            className="banner__container__img"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="banner__container__content">
            <div className="banner__content__wrapper">
              <div className="banner__container__content__heading">
                Dive Into The Beautiful Realm In Amist
              </div>
              <button className="banner__container__content__btn">
                View Details
              </button>
              <div className="banner__container__content__logo__container">
                <img
                  src={ring}
                  alt="ring"
                  className="banner__container__content__logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="building__details__container">
          <img
            src={BuildingDetailPic}
            alt="BuildingDetailPic"
            style={{ width: "100", height: "100%" }}
            className="building__details__container__content__img"
          />
          <div className="building__details__container__wrapper">
            <div className="building__details__container__wrapper__content">
              <div className="building__details__container__wrapper__heading">
                Building Details
              </div>
              <div className="building__details__container__wrapper__heading__line"></div>
              <div className="building__details__container__wrapper__content__entries">
                <BuildingDetailsCard
                  Heading="Plot Size"
                  subHeading="13 Kanals"
                  svg={
                    <svg
                      id="measure_2_"
                      data-name="measure (2)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="55.232"
                      height="55.232"
                      fill="currentColor"
                      viewBox="0 0 55.232 55.232"
                    >
                      <path
                        id="Path_66"
                        data-name="Path 66"
                        d="M53.56,44.679h-34.1a9.76,9.76,0,0,0-8.9-8.9V1.673A1.674,1.674,0,0,0,8.882,0H1.672A1.674,1.674,0,0,0,0,1.673V9.914a.809.809,0,0,0,1.618,0V1.673a.054.054,0,0,1,.054-.054h7.21a.054.054,0,0,1,.054.054v1.9H6.17a.809.809,0,1,0,0,1.618H8.936V7.149h-.95a.809.809,0,1,0,0,1.618h.95v1.956H6.17a.809.809,0,1,0,0,1.618H8.936V14.3h-.95a.809.809,0,1,0,0,1.618h.95v1.956H6.17a.809.809,0,1,0,0,1.618H8.936v1.956h-.95a.809.809,0,1,0,0,1.618h.95v1.957H6.17a.809.809,0,1,0,0,1.618H8.936v1.956h-.95a.809.809,0,1,0,0,1.618h.95v1.957H6.17a.809.809,0,1,0,0,1.618H8.936v1.956H1.618V13.15A.809.809,0,0,0,0,13.15V52.637a2.6,2.6,0,0,0,2.6,2.6H53.56a1.674,1.674,0,0,0,1.672-1.672v-7.21A1.674,1.674,0,0,0,53.56,44.679ZM1.618,52.637V37.362H9.745a8.136,8.136,0,0,1,8.127,8.127h0v8.127H2.6a.979.979,0,0,1-.978-.978Zm52,.924a.054.054,0,0,1-.054.054H19.49V46.3h1.956v2.765a.809.809,0,0,0,1.618,0V46.3H25.02v.95a.809.809,0,0,0,1.618,0V46.3h1.956v2.765a.809.809,0,0,0,1.618,0V46.3h1.956v.95a.809.809,0,0,0,1.618,0V46.3h1.956v2.765a.809.809,0,0,0,1.618,0V46.3h1.956v.95a.809.809,0,0,0,1.618,0V46.3h1.957v2.765a.809.809,0,0,0,1.618,0V46.3h1.956v.95a.809.809,0,0,0,1.618,0V46.3H50.04v2.765a.809.809,0,0,0,1.618,0V46.3h1.9a.054.054,0,0,1,.054.054Z"
                        transform="translate(0 -0.001)"
                      />
                      <path
                        id="Path_67"
                        data-name="Path 67"
                        d="M68.864,397.6a2.6,2.6,0,1,0,2.6,2.6A2.6,2.6,0,0,0,68.864,397.6Zm0,3.574a.978.978,0,1,1,.978-.978A.979.979,0,0,1,68.864,401.174Z"
                        transform="translate(-59.119 -354.709)"
                      />
                      <path
                        id="Path_68"
                        data-name="Path 68"
                        d="M39.3,364.467a6.17,6.17,0,1,0,6.17,6.17A6.177,6.177,0,0,0,39.3,364.467Zm0,10.723a4.552,4.552,0,1,1,4.552-4.552A4.558,4.558,0,0,1,39.3,375.19Z"
                        transform="translate(-29.56 -325.15)"
                      />
                      <path
                        id="Path_69"
                        data-name="Path 69"
                        d="M208.17,113.215a.806.806,0,0,0,.537-.2l2.314-2.056a.809.809,0,1,0-1.075-1.209l-2.314,2.057a.809.809,0,0,0,.538,1.414Z"
                        transform="translate(-184.992 -97.724)"
                      />
                      <path
                        id="Path_70"
                        data-name="Path 70"
                        d="M254.848,71.723a.806.806,0,0,0,.537-.2l2.314-2.057a.809.809,0,0,0-1.075-1.209L254.31,70.31a.809.809,0,0,0,.538,1.414Z"
                        transform="translate(-226.634 -60.708)"
                      />
                      <path
                        id="Path_71"
                        data-name="Path 71"
                        d="M166.477,156.852h1.9a1.431,1.431,0,0,0-1.017-2.675l-1.419,1.262a.809.809,0,0,0,.537,1.414Z"
                        transform="translate(-147.796 -137.362)"
                      />
                      <path
                        id="Path_72"
                        data-name="Path 72"
                        d="M228.39,166.476a.809.809,0,0,0-.809-.809h-3.539a.809.809,0,0,0,0,1.618h3.539A.809.809,0,0,0,228.39,166.476Z"
                        transform="translate(-199.152 -147.796)"
                      />
                      <path
                        id="Path_73"
                        data-name="Path 73"
                        d="M293.832,39.148h1.537V41.1h-.978a.809.809,0,1,0,0,1.618h3.574a.809.809,0,1,0,0-1.618h-.978V39.148h3.828a.809.809,0,1,0,0-1.618h-3.828V19.489h10.892V37.53h-3.828a.809.809,0,0,0,0,1.618h4.637a.809.809,0,0,0,.809-.809V19.489h2.765a.809.809,0,0,0,.538-1.414L296.987,4.02v-2.4h.978a.809.809,0,1,0,0-1.618h-3.574a.809.809,0,1,0,0,1.618h.978v2.4l-1.148,1.02A.809.809,0,1,0,295.3,6.249l.073-.065V17.871h-1.09a.809.809,0,0,0,0,1.618h1.09V37.53h-1.537a.809.809,0,0,0,0,1.618Zm16.3-21.277H296.987V6.185Z"
                        transform="translate(-261.413 0)"
                      />
                      <path
                        id="Path_74"
                        data-name="Path 74"
                        d="M247.318,349.518h2.3a.809.809,0,1,0,0-1.618h-2.3a.809.809,0,0,0,0,1.618Z"
                        transform="translate(-219.917 -310.37)"
                      />
                      <path
                        id="Path_75"
                        data-name="Path 75"
                        d="M199.609,330.12h2.346a.809.809,0,1,0,0-1.618h-1.537v-1.537a.809.809,0,1,0-1.618,0v2.346A.809.809,0,0,0,199.609,330.12Z"
                        transform="translate(-177.354 -290.972)"
                      />
                      <path
                        id="Path_76"
                        data-name="Path 76"
                        d="M199.609,258.291a.809.809,0,0,0,.809-.809V253.87a.809.809,0,0,0-1.618,0v3.612A.809.809,0,0,0,199.609,258.291Z"
                        transform="translate(-177.354 -225.762)"
                      />
                      <path
                        id="Path_77"
                        data-name="Path 77"
                        d="M199.609,194.481a.809.809,0,0,0,.809-.809v-2.346a.809.809,0,1,0-1.618,0v2.346A.809.809,0,0,0,199.609,194.481Z"
                        transform="translate(-177.354 -169.965)"
                      />
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Building Covered Area"
                  subHeading="875000 Sq. ft"
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55.232"
                      height="55.232"
                      viewBox="0 0 55.232 55.232"
                      fill="currentColor"
                    >
                      <g
                        id="measure_3_"
                        data-name="measure (3)"
                        transform="translate(0)"
                      >
                        <path
                          id="Path_80"
                          data-name="Path 80"
                          d="M98.762,19.66h-.978V18.68a.809.809,0,0,0-1.618,0v.979h-.978a.809.809,0,0,0-.809.809v2.68a.085.085,0,0,1-.085.085H88.039a.809.809,0,0,0-.809.809v.978h-.978a.809.809,0,1,0,0,1.618h.978v.978a.809.809,0,0,0,.809.809h6.255a.085.085,0,0,1,.085.084v14.3a.085.085,0,0,1-.085.084H78.21a.085.085,0,0,1-.084-.084V38.339a.809.809,0,0,0-.809-.809h-.978v-.978a.809.809,0,1,0-1.618,0v.978h-.978a.809.809,0,0,0-.809.809v4.468a.085.085,0,0,1-.084.084H56.764a.085.085,0,0,1-.084-.084V28.51a.085.085,0,0,1,.084-.084H72.848a.085.085,0,0,1,.084.084V31.19a.809.809,0,0,0,.809.809h.978v.978a.809.809,0,1,0,1.618,0V32h.978a.809.809,0,0,0,.809-.809V28.51a.085.085,0,0,1,.084-.084H80.89a.809.809,0,0,0,.809-.809v-.978h.978a.809.809,0,0,0,0-1.618H81.7v-.978a.809.809,0,0,0-.809-.809H78.21a.085.085,0,0,1-.084-.085V20.468a.809.809,0,0,0-.809-.809h-.978V18.68a.809.809,0,1,0-1.618,0v.978h-.978a.809.809,0,0,0-.809.809v2.681a.085.085,0,0,1-.084.085H64.867a.809.809,0,0,0,0,1.618h7.981a1.7,1.7,0,0,0,1.7-1.7V21.277h1.956v1.872a1.7,1.7,0,0,0,1.7,1.7h1.872v1.956H78.21a1.7,1.7,0,0,0-1.7,1.7v1.872H74.551V28.51a1.7,1.7,0,0,0-1.7-1.7H56.764a1.7,1.7,0,0,0-1.7,1.7v14.3a1.7,1.7,0,0,0,1.7,1.7H72.848a1.7,1.7,0,0,0,1.7-1.7V39.148h1.956v3.659a1.7,1.7,0,0,0,1.7,1.7H94.294a1.7,1.7,0,0,0,1.7-1.7V28.51a1.7,1.7,0,0,0-1.7-1.7H88.848V24.851h5.446a1.7,1.7,0,0,0,1.7-1.7v-1.87h1.956v25.1a.085.085,0,0,1-.084.084H53.19a.085.085,0,0,1-.084-.084V1.7a.085.085,0,0,1,.084-.084H88.208a.809.809,0,1,0,0-1.618H53.19a1.694,1.694,0,0,0-.532.086A.8.8,0,0,0,52.3,0H50.509a.809.809,0,0,0,0,1.618h.982c0,.028,0,.056,0,.084V46.381c0,.028,0,.056,0,.084h-.982a.809.809,0,1,0,0,1.618h.978v.978a.809.809,0,1,0,1.618,0v-.982c.028,0,.056,0,.084,0H97.868c.028,0,.056,0,.084,0v.982a.809.809,0,1,0,1.618,0V47.274a.8.8,0,0,0-.086-.362,1.694,1.694,0,0,0,.086-.532V20.469a.809.809,0,0,0-.809-.809Z"
                          transform="translate(-44.339 0)"
                        />
                        <path
                          id="Path_81"
                          data-name="Path 81"
                          d="M142.207,0h-6.424a.809.809,0,1,0,0,1.618h6.424a.085.085,0,0,1,.084.084V12.512h-.944l-.034,0-.035,0h-.944V5.277a1.7,1.7,0,0,0-1.7-1.7H122.548a1.7,1.7,0,0,0-1.7,1.7V12.51h-1.956V5.277a1.7,1.7,0,0,0-1.7-1.7H101.1a1.7,1.7,0,0,0-1.7,1.7V23.148a1.7,1.7,0,0,0,1.7,1.7h4.867a.809.809,0,0,0,0-1.618H101.1a.085.085,0,0,1-.084-.085V5.277a.085.085,0,0,1,.084-.085h16.084a.085.085,0,0,1,.084.085v8.042a.809.809,0,0,0,.809.809h.978v.978a.809.809,0,0,0,1.618,0v-.978h.978a.809.809,0,0,0,.809-.809V5.277a.085.085,0,0,1,.084-.085h16.084a.085.085,0,0,1,.085.085v8.044a.809.809,0,0,0,.809.809h.978v.976a.809.809,0,0,0,1.618,0V14.13h.978a.809.809,0,0,0,.809-.809V1.7a1.7,1.7,0,0,0-1.7-1.7Z"
                          transform="translate(-88.677 0)"
                        />
                        <path
                          id="Path_82"
                          data-name="Path 82"
                          d="M139.527,463.866a.809.809,0,0,0-.809.809v.978h-37.7v-.978a.809.809,0,0,0-1.618,0v3.574a.809.809,0,1,0,1.618,0v-.978h37.7v.978a.809.809,0,1,0,1.618,0v-3.574A.809.809,0,0,0,139.527,463.866Z"
                          transform="translate(-88.678 -413.826)"
                        />
                        <path
                          id="Path_83"
                          data-name="Path 83"
                          d="M.809,72.45a.809.809,0,1,0,0,1.618H4.383a.809.809,0,1,0,0-1.618H3.405v-37.7h.978a.809.809,0,1,0,0-1.618H.809a.809.809,0,1,0,0,1.618h.978v37.7Z"
                          transform="translate(0 -29.559)"
                        />
                        <path
                          id="Path_84"
                          data-name="Path 84"
                          d="M.809,432.352H2.6a.809.809,0,1,0,0-1.618H.809a.809.809,0,1,0,0,1.618Z"
                          transform="translate(0 -384.268)"
                        />
                        <path
                          id="Path_85"
                          data-name="Path 85"
                          d="M.809,1.618H2.6A.809.809,0,0,0,2.6,0H.809a.809.809,0,1,0,0,1.618Z"
                          transform="translate(0 0)"
                        />
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M67.076,480.434a.809.809,0,0,0-.809.809v1.787a.809.809,0,0,0,1.618,0v-1.787A.809.809,0,0,0,67.076,480.434Z"
                          transform="translate(-59.118 -428.607)"
                        />
                        <path
                          id="Path_87"
                          data-name="Path 87"
                          d="M497.809,480.434a.809.809,0,0,0-.809.809v1.787a.809.809,0,0,0,1.618,0v-1.787A.809.809,0,0,0,497.809,480.434Z"
                          transform="translate(-443.386 -428.607)"
                        />
                        <path
                          id="Path_88"
                          data-name="Path 88"
                          d="M4.956,464.1a.809.809,0,0,0-1.144,0L2.6,465.319,1.382,464.1a.809.809,0,0,0-1.144,1.144l1.215,1.215L.237,467.678a.809.809,0,0,0,1.144,1.144L2.6,467.607l1.215,1.215a.809.809,0,0,0,1.144-1.144l-1.215-1.215,1.215-1.215a.809.809,0,0,0,0-1.144Z"
                          transform="translate(0 -413.827)"
                        />
                      </g>
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Car Parking Floors"
                  subHeading="3 Basement"
                  svg={
                    <svg
                      id="parking"
                      xmlns="http://www.w3.org/2000/svg"
                      width="43.431"
                      height="43.431"
                      viewBox="0 0 43.431 43.431"
                      fill="currentColor"
                    >
                      <g
                        id="Group_57"
                        data-name="Group 57"
                        transform="translate(16.117 10.538)"
                      >
                        <g id="Group_56" data-name="Group 56">
                          <path
                            id="Path_120"
                            data-name="Path 120"
                            d="M197.766,124.23H190v22.355h2.545V139.5h5.22a7.512,7.512,0,0,0,7.5-7.5v-.261A7.512,7.512,0,0,0,197.766,124.23ZM202.725,132a4.965,4.965,0,0,1-4.959,4.959h-5.22V126.775h5.22a4.965,4.965,0,0,1,4.959,4.959Z"
                            transform="translate(-190.001 -124.23)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_59"
                        data-name="Group 59"
                        transform="translate(0)"
                      >
                        <g
                          id="Group_58"
                          data-name="Group 58"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_121"
                            data-name="Path 121"
                            d="M37.071,6.36A21.716,21.716,0,1,0,6.36,37.071,21.716,21.716,0,0,0,37.071,6.36Zm-1.8,28.911A19.171,19.171,0,0,1,8.16,8.16,19.171,19.171,0,0,1,35.271,35.271Z"
                            transform="translate(0)"
                          />
                        </g>
                      </g>
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Plot Orientation"
                  subHeading="Corner"
                  svg={
                    <svg
                      id="orientation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="41.712"
                      height="41.699"
                      viewBox="0 0 41.712 41.699"
                      fill="currentColor"
                    >
                      <g
                        id="Group_53"
                        data-name="Group 53"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_89"
                          data-name="Path 89"
                          d="M141.192,1.385A2.916,2.916,0,0,0,138.765.073,2.886,2.886,0,0,0,137.64.3L111.1,11.213a2.931,2.931,0,0,0,.17,5.485l10.28,3.509,3.518,10.28a2.932,2.932,0,0,0,5.485.17l10.91-26.539A2.869,2.869,0,0,0,141.192,1.385Zm-1.661,1.942L128.612,29.865a.812.812,0,0,1-.775.52.821.821,0,0,1-.8-.571l-3.679-10.765a1.02,1.02,0,0,0-.647-.647l-10.766-3.679a.848.848,0,0,1-.051-1.584l26.539-10.91a.926.926,0,0,1,.332-.068.843.843,0,0,1,.7.392A.779.779,0,0,1,139.531,3.326Z"
                          transform="translate(-99.978 -0.073)"
                        />
                        <path
                          id="Path_90"
                          data-name="Path 90"
                          d="M23.8,285.28l-14.6,14.6a1.045,1.045,0,0,0,1.482,1.473l14.59-14.6A1.042,1.042,0,1,0,23.8,285.28Z"
                          transform="translate(-8.142 -260.708)"
                        />
                        <path
                          id="Path_91"
                          data-name="Path 91"
                          d="M.307,266.96a1.043,1.043,0,0,0,.741,1.78,1.037,1.037,0,0,0,.741-.307l5.281-5.281A1.042,1.042,0,1,0,5.6,261.68Z"
                          transform="translate(0 -239.118)"
                        />
                        <path
                          id="Path_92"
                          data-name="Path 92"
                          d="M142.218,410.234a1.049,1.049,0,0,0,1.482,0l5.281-5.281a1.042,1.042,0,1,0-1.473-1.473l-5.281,5.281A1.031,1.031,0,0,0,142.218,410.234Z"
                          transform="translate(-129.826 -368.841)"
                        />
                      </g>
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Building Stories"
                  subHeading="17 Stories"
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="53.547"
                      height="53.547"
                      viewBox="0 0 53.547 53.547"
                      fill="currentColor"
                    >
                      <g id="building" transform="translate(0)">
                        <g
                          id="Group_55"
                          data-name="Group 55"
                          transform="translate(0)"
                        >
                          <g id="Group_54" data-name="Group 54">
                            <path
                              id="Path_93"
                              data-name="Path 93"
                              d="M145.348,477.867H120.359a.893.893,0,0,0-.892.892v1.785a.892.892,0,1,0,1.785,0v-.892h24.1a.892.892,0,0,0,0-1.785Z"
                              transform="translate(-106.973 -427.89)"
                            />
                            <path
                              id="Path_94"
                              data-name="Path 94"
                              d="M187.733,159.847a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355Zm1.785-4.462H191.3v3.57h-1.785Z"
                              transform="translate(-168.099 -137.536)"
                            />
                            <path
                              id="Path_95"
                              data-name="Path 95"
                              d="M11.6,102.4H.892a.893.893,0,0,0-.892.892v17.849a.892.892,0,0,0,1.785,0V104.185H11.6a.892.892,0,0,0,0-1.785Z"
                              transform="translate(0 -91.691)"
                            />
                            <path
                              id="Path_96"
                              data-name="Path 96"
                              d="M409.6,364.647a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                              transform="translate(-366.763 -320.917)"
                            />
                            <path
                              id="Path_97"
                              data-name="Path 97"
                              d="M4.462,307.2C.051,307.2,0,318.686,0,318.8a4.47,4.47,0,0,0,3.57,4.372v4.552a.892.892,0,1,0,1.785,0v-4.552a4.47,4.47,0,0,0,3.57-4.372C8.924,318.686,8.874,307.2,4.462,307.2Zm0,14.279A2.681,2.681,0,0,1,1.785,318.8c0-4.446,1.194-9.817,2.677-9.817S7.14,314.356,7.14,318.8A2.681,2.681,0,0,1,4.462,321.479Z"
                              transform="translate(0 -275.072)"
                            />
                            <path
                              id="Path_98"
                              data-name="Path 98"
                              d="M55.662,256h-3.57a.893.893,0,0,0-.892.892v1.785a.892.892,0,1,0,1.785,0v-.892H54.77v4.462a.892.892,0,1,0,1.785,0v-5.355A.893.893,0,0,0,55.662,256Z"
                              transform="translate(-45.845 -229.227)"
                            />
                            <path
                              id="Path_99"
                              data-name="Path 99"
                              d="M410.492,160.74h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355A.893.893,0,0,0,410.492,160.74Zm.893-5.355h1.785v3.57h-1.785Z"
                              transform="translate(-366.763 -137.537)"
                            />
                            <path
                              id="Path_100"
                              data-name="Path 100"
                              d="M55.662,153.6h-3.57a.893.893,0,0,0-.892.892v5.355a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355A.893.893,0,0,0,55.662,153.6Zm-.893,5.355H52.985v-3.57H54.77v3.57Z"
                              transform="translate(-45.845 -137.536)"
                            />
                            <path
                              id="Path_101"
                              data-name="Path 101"
                              d="M273.067,159.847a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                              transform="translate(-244.509 -137.536)"
                            />
                            <path
                              id="Path_102"
                              data-name="Path 102"
                              d="M404.136,102.4H393.426a.892.892,0,0,0,0,1.785h9.817v35.862a2.55,2.55,0,0,0-1.351-.124,3.564,3.564,0,0,0-6.222,0,2.624,2.624,0,0,0-.459-.04,2.677,2.677,0,1,0,0,5.355h7.139a2.681,2.681,0,0,0,2.677-2.677V103.292A.893.893,0,0,0,404.136,102.4Zm-1.785,41.052h-7.14a.892.892,0,1,1,0-1.785.882.882,0,0,1,.484.145.892.892,0,0,0,1.353-.549,1.778,1.778,0,0,1,3.466,0,.892.892,0,0,0,1.353.549.91.91,0,0,1,1.376.747A.894.894,0,0,1,402.351,143.452Z"
                              transform="translate(-351.481 -91.691)"
                            />
                            <path
                              id="Path_103"
                              data-name="Path 103"
                              d="M273.959,58.34h3.57a.893.893,0,0,0,.892-.892V52.093a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355A.893.893,0,0,0,273.959,58.34Zm.892-5.355h1.785v3.57h-1.785Z"
                              transform="translate(-244.509 -45.846)"
                            />
                            <path
                              id="Path_104"
                              data-name="Path 104"
                              d="M273.067,262.247a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                              transform="translate(-244.509 -229.227)"
                            />
                            <path
                              id="Path_105"
                              data-name="Path 105"
                              d="M188.626,58.34h3.57a.893.893,0,0,0,.892-.892V52.093a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355A.893.893,0,0,0,188.626,58.34Zm.892-5.355H191.3v3.57h-1.785Z"
                              transform="translate(-168.1 -45.846)"
                            />
                            <path
                              id="Path_106"
                              data-name="Path 106"
                              d="M247.725,409.954a.893.893,0,1,0,1.267,0A.938.938,0,0,0,247.725,409.954Z"
                              transform="translate(-221.585 -366.858)"
                            />
                            <path
                              id="Path_107"
                              data-name="Path 107"
                              d="M187.733,262.247a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355A.893.893,0,0,0,192.2,256h-3.57a.893.893,0,0,0-.892.892v5.355Zm1.785-4.462H191.3v3.57h-1.785Z"
                              transform="translate(-168.099 -229.227)"
                            />
                            <path
                              id="Path_108"
                              data-name="Path 108"
                              d="M170.667,359.292a.893.893,0,0,0,.892.892h2.677v8.032a.892.892,0,0,0,1.785,0v-8.032h7.14v8.032a.892.892,0,0,0,1.785,0v-8.032h2.677a.892.892,0,0,0,0-1.785H171.559A.893.893,0,0,0,170.667,359.292Z"
                              transform="translate(-152.818 -320.917)"
                            />
                            <path
                              id="Path_109"
                              data-name="Path 109"
                              d="M409.6,262.247a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                              transform="translate(-366.763 -229.227)"
                            />
                            <path
                              id="Path_110"
                              data-name="Path 110"
                              d="M160.63,0h-23.2a.893.893,0,0,0-.892.892V47.3a.892.892,0,0,0,1.785,0V1.785h21.419V47.3a.892.892,0,1,0,1.785,0V.892A.893.893,0,0,0,160.63,0Z"
                              transform="translate(-122.255)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Parking Space"
                  subHeading="700 to 800 Cars"
                  svg={
                    <svg
                      id="parking"
                      xmlns="http://www.w3.org/2000/svg"
                      width="43.431"
                      height="43.431"
                      viewBox="0 0 43.431 43.431"
                      fill="currentColor"
                    >
                      <g
                        id="Group_57"
                        data-name="Group 57"
                        transform="translate(16.117 10.538)"
                      >
                        <g id="Group_56" data-name="Group 56">
                          <path
                            id="Path_120"
                            data-name="Path 120"
                            d="M197.766,124.23H190v22.355h2.545V139.5h5.22a7.512,7.512,0,0,0,7.5-7.5v-.261A7.512,7.512,0,0,0,197.766,124.23ZM202.725,132a4.965,4.965,0,0,1-4.959,4.959h-5.22V126.775h5.22a4.965,4.965,0,0,1,4.959,4.959Z"
                            transform="translate(-190.001 -124.23)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_59"
                        data-name="Group 59"
                        transform="translate(0)"
                      >
                        <g
                          id="Group_58"
                          data-name="Group 58"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_121"
                            data-name="Path 121"
                            d="M37.071,6.36A21.716,21.716,0,1,0,6.36,37.071,21.716,21.716,0,0,0,37.071,6.36Zm-1.8,28.911A19.171,19.171,0,0,1,8.16,8.16,19.171,19.171,0,0,1,35.271,35.271Z"
                            transform="translate(0)"
                          />
                        </g>
                      </g>
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Plot Dimension"
                  subHeading="?"
                  svg={
                    <svg
                      id="ruler"
                      xmlns="http://www.w3.org/2000/svg"
                      width="45.911"
                      height="45.911"
                      viewBox="0 0 45.911 45.911"
                      fill="currentColor"
                    >
                      <g
                        id="Group_50"
                        data-name="Group 50"
                        transform="translate(0 0)"
                      >
                        <g id="Group_49" data-name="Group 49">
                          <path
                            id="Path_78"
                            data-name="Path 78"
                            d="M45.623,12.039,33.871.288a.979.979,0,0,0-1.387,0l-32.2,32.2a.979.979,0,0,0,0,1.387L12.04,45.623a.979.979,0,0,0,1.387,0l32.2-32.2A.979.979,0,0,0,45.623,12.039Zm-32.9,31.5L2.372,33.183,10.151,25.4l3.53,3.53a.981.981,0,0,0,1.406-1.367l-.02-.02-3.53-3.521L14.1,21.461l5.507,5.507A.984.984,0,0,0,21,25.571l-5.507-5.507L18.058,17.5l3.53,3.521a.98.98,0,1,0,1.387-1.387l-3.53-3.521,2.567-2.567,5.507,5.507a.98.98,0,0,0,1.387-1.387L23.4,12.158l2.567-2.567,3.53,3.53a.981.981,0,1,0,1.4-1.377l-.01-.01-3.5-3.56,2.567-2.567,5.507,5.507a.98.98,0,1,0,1.387-1.387L31.334,4.221l1.849-1.849L43.539,12.728Z"
                            transform="translate(0 0)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_52"
                        data-name="Group 52"
                        transform="translate(8.118 31.661)"
                      >
                        <g id="Group_51" data-name="Group 51">
                          <path
                            id="Path_79"
                            data-name="Path 79"
                            d="M87.937,322.872a3.157,3.157,0,1,0,0,4.465A3.164,3.164,0,0,0,87.937,322.872Zm-1.288,3.049a.112.112,0,0,1-.108.039,1.2,1.2,0,1,1,0-1.691A1.161,1.161,0,0,1,86.648,325.921Z"
                            transform="translate(-82.55 -321.95)"
                          />
                        </g>
                      </g>
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Building Height"
                  subHeading="220 Feet"
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55.794"
                      height="55.788"
                      viewBox="0 0 55.794 55.788"
                      fill="currentColor"
                    >
                      <g id="house" transform="translate(0)">
                        <path
                          id="Path_111"
                          data-name="Path 111"
                          d="M39.84,47.888H32.826a.753.753,0,0,1,0-1.507h6.26V28.437h-28.1V46.381h9.078a.753.753,0,1,1,0,1.507H10.233a.753.753,0,0,1-.753-.753V27.683a.753.753,0,0,1,.753-.753H39.84a.753.753,0,0,1,.753.753V47.135A.753.753,0,0,1,39.84,47.888Z"
                          transform="translate(-3.183 -8.149)"
                        />
                        <path
                          id="Path_112"
                          data-name="Path 112"
                          d="M32.5,54.257H30.283a.753.753,0,0,1,0-1.507H32.5a.753.753,0,0,1,0,1.507Z"
                          transform="translate(-8.129 -14.518)"
                        />
                        <path
                          id="Path_113"
                          data-name="Path 113"
                          d="M43.111,22.288H3.777a.753.753,0,0,1-.52-1.3L22.923,2.209a.753.753,0,0,1,1.04,0L43.63,20.99a.753.753,0,0,1-.52,1.3ZM5.656,20.781H41.231L23.443,3.8Z"
                          transform="translate(-1.591 -2)"
                        />
                        <path
                          id="Path_114"
                          data-name="Path 114"
                          d="M65.909,54.812a.93.93,0,0,1-.93-.93V12.97a.93.93,0,1,1,1.861,0V53.881A.93.93,0,0,1,65.909,54.812Z"
                          transform="translate(-14.772 -12.037)"
                        />
                        <path
                          id="Path_115"
                          data-name="Path 115"
                          d="M69.351,17.62a.93.93,0,0,1-.658-.272l-3.062-3.061L62.57,17.347a.93.93,0,1,1-1.316-1.316l3.722-3.722a.93.93,0,0,1,1.317,0l3.722,3.722a.93.93,0,0,1-.658,1.588Z"
                          transform="translate(-14.493 -12.037)"
                        />
                        <path
                          id="Path_116"
                          data-name="Path 116"
                          d="M65.631,57.593a.93.93,0,0,1-.658-.272L61.252,53.6a.93.93,0,1,1,1.316-1.316l3.061,3.062,3.062-3.062A.93.93,0,1,1,70.006,53.6L66.284,57.32A.93.93,0,0,1,65.631,57.593Z"
                          transform="translate(-14.493 -14.818)"
                        />
                        <path
                          id="Path_117"
                          data-name="Path 117"
                          d="M48.791,67.861H6.95A.93.93,0,0,1,6.95,66h41.84a.93.93,0,0,1,0,1.861Z"
                          transform="translate(-6.017 -15.794)"
                        />
                        <path
                          id="Path_118"
                          data-name="Path 118"
                          d="M47.922,71.307a.93.93,0,0,1-.658-1.588l3.061-3.064-3.061-3.062a.93.93,0,0,1,1.317-1.311L52.3,66a.93.93,0,0,1,0,1.316l-3.722,3.722a.93.93,0,0,1-.659.266Z"
                          transform="translate(-8.868 -15.519)"
                        />
                        <path
                          id="Path_119"
                          data-name="Path 119"
                          d="M10.669,71.3a.93.93,0,0,1-.658-.272L6.29,67.31a.93.93,0,0,1,0-1.316l3.722-3.722a.93.93,0,1,1,1.316,1.316L8.266,66.652l3.061,3.061a.93.93,0,0,1-.658,1.591Z"
                          transform="translate(-6.017 -15.516)"
                        />
                      </g>
                    </svg>
                  }
                />
                <BuildingDetailsCard
                  Heading="Purpose of Building"
                  subHeading="5 Star Hotel"
                  svg={
                    <svg
                      id="target-outline-symbol-in-a-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48.205"
                      height="48.73"
                      viewBox="0 0 48.205 48.73"
                      fill="currentColor"
                    >
                      <g
                        id="Group_60"
                        data-name="Group 60"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_122"
                          data-name="Path 122"
                          d="M35.253,14.688l6.137,1.739a1.078,1.078,0,0,0,.286.04,1.051,1.051,0,0,0,.743-.308l5.726-5.725a1.052,1.052,0,0,0-.454-1.755L41.525,6.93,39.774.763A1.051,1.051,0,0,0,38.02.308L32.3,6.034a1.048,1.048,0,0,0-.269,1.029L33.767,13.2,32.39,14.577A19.592,19.592,0,1,0,33.9,16.038Zm6.118-.452-4.413-1.25,4.023-4.025,4.413,1.252ZM34.219,7.083,38.24,3.06l1.253,4.414L37.1,9.866,35.47,11.5Zm2.826,22.2A17.39,17.39,0,1,1,30.9,16.063L25.761,21.2a10.155,10.155,0,1,0,1.54,1.432l5.113-5.112A17.242,17.242,0,0,1,37.045,29.28Zm-15.343,0a2,2,0,1,1-2-2A2,2,0,0,1,21.7,29.28Zm-.293-3.722a4.067,4.067,0,0,0-1.709-.384A4.127,4.127,0,1,0,23.036,26.9l2.782-2.782A8.021,8.021,0,1,1,24.262,22.7Z"
                          transform="translate(-0.249 0)"
                        />
                      </g>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
          <img
            src={ring}
            alt="ring"
            className="banner__container__content__ring__logo"
          />
        </div>
        <div className="surrounding__container">
          <img src={ring} alt="ring" className="surrounding__container__img" />
          <div className="surrounding__container__wrapper">
            <img
              src={sorroundingImg}
              alt="sorroundingImg"
              className="surrounding__container__wrapper__img"
            />
            <div className="surrounding__container__wrapper__details">
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  New Airport
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  New Airport
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  New Airport
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  New Airport
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  New Airport
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  New Airport
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  New Airport
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo__gallery__container">
          <div className="photo__gallery__container__heading">
            Photo Gallery
          </div>
          <PhotoGallery />
        </div>
        <div className="contact__container">
          <img src={ring} alt="ring" className="contact__container__img" />
          <div className="contact__container__content">
            <div className="contact__container__wrapper">
              <div className="contact__container__wrapper__left">
                <img
                  src={ring}
                  alt="ring"
                  className="contact__container__wrapper__left__img"
                />
                <div className="contact__container__wrapper__left__wrapper">
                  <div className="contact__container__wrapper__left__wrapper__heading">
                    Make your investment today
                  </div>
                  <div className="contact__container__wrapper__left__wrapper__info">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </div>
                  <img
                    src={contactImg}
                    alt="contactImg"
                    className="contact__container__wrapper__left__wrapper__img"
                  />
                </div>
              </div>
              <form action="" className="contact__container__wrapper__right">
                <div className="contact__container__wrapper__right__heading">
                  Request a call back
                </div>
                <div className="contact__container__wrapper__right__info">
                  Our manager will contact you soon
                </div>
                <input
                  type="text"
                  className="contact__container__wrapper__right__input"
                  placeholder="Name"
                />
                <input
                  type="tel"
                  className="contact__container__wrapper__right__input"
                  placeholder="Phone"
                />
                <button className="contact__container__wrapper__right__button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
