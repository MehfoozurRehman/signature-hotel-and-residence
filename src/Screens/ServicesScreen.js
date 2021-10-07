import React, { Component, useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import ring from "../Assets/ring.png";
import contactImg from "../Assets/contactImg.png";
import BuildingDetailPic from "../Assets/BuildingDetailPic.png";
import photoGalleryImg1 from "../Assets/photo-gallery/1.png";
import photoGalleryImg2 from "../Assets/photo-gallery/2.png";
import photoGalleryImg3 from "../Assets/photo-gallery/3.png";
import photoGalleryImg4 from "../Assets/photo-gallery/4.png";
import photoGalleryImg5 from "../Assets/photo-gallery/5.png";
import photoGalleryImg6 from "../Assets/photo-gallery/6.png";
import services__background__Img1 from "../Assets/services__background__Img1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

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

function ServicesCarouselControl({ defaultChecked, svg, text, onChange }) {
  return (
    <div className="transport__container__wrapper__controls__entry">
      <input
        type="radio"
        onChange={onChange}
        defaultChecked={defaultChecked}
        className="transport__container__wrapper__controls__entry__input"
        name="transport__container__wrapper__controls__entry__input"
      />
      <div className="transport__container__wrapper__controls__entry__content">
        {svg}
        <div className="transport__container__wrapper__controls__entry__text">
          {text}
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
        <div className="transport__container">
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
          <div className="transport__container__wrapper">
            <img
              src={this.state.services__background__Img}
              alt="services__background__Img"
              className="transport__container__wrapper__img"
            />
            <div className="transport__container__wrapper__content">
              <div className="transport__container__wrapper__content__heading">
                {this.state.servicesCarouselHeading}
              </div>
              <div className="transport__container__wrapper__content__info">
                {this.state.servicesCarouselContent}
              </div>
              <Link
                to="/location"
                className="transport__container__wrapper__content__link"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="transport__container__wrapper__controls">
            <ServicesCarouselControl
              defaultChecked={true}
              svg={
                <svg
                  id="Group_93"
                  data-name="Group 93"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64.953"
                  height="27.792"
                  fill="currentColor"
                  viewBox="0 0 64.953 27.792"
                >
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M1708.731,1142.581c-.618,0-1.181-.008-1.743,0a1.48,1.48,0,0,1-1.443-.878,6.337,6.337,0,0,1-.028-5.766,1.52,1.52,0,0,1,1.5-.927c.542.011,1.083,0,1.718,0,0-1.431,0-2.9,0-4.371,0-1.97.934-2.913,2.9-2.907.566,0,1.131.054,1.794.088.023-.164.057-.407.089-.651a2.408,2.408,0,0,1,2.519-2.248q1.518-.022,3.037.014a2.37,2.37,0,0,1,2.493,2.5c.021,2.6.03,5.192-.009,7.788-.01.682.176.881.867.88q14.876-.032,29.753,0c.723,0,.919-.214.907-.92-.04-2.439-.021-4.88-.013-7.32.006-2.045.908-2.941,2.942-2.944.831,0,1.662-.01,2.492.006a2.418,2.418,0,0,1,2.647,2.519c.008.127.021.254.032.378.691-.032,1.35-.086,2.009-.087a2.531,2.531,0,0,1,2.751,2.766c.011,1.5,0,3,0,4.51.53,0,.989.019,1.447,0a1.8,1.8,0,0,1,1.919,1.261,6.856,6.856,0,0,1,.021,5.014,1.774,1.774,0,0,1-1.965,1.306c-.452-.043-.912-.007-1.421-.007,0,1.289-.055,2.665.012,4.036.127,2.579-1.452,3.6-4,3.227-.247-.036-.489-.108-.757-.169a9,9,0,0,1-.14,1.2,2.491,2.491,0,0,1-2.438,1.817c-.934.024-1.869.012-2.8,0a2.5,2.5,0,0,1-2.746-2.693c-.027-2.492-.008-4.984-.009-7.476v-.98h-31.5v2.351c0,2.025.007,4.05,0,6.075a2.5,2.5,0,0,1-2.7,2.724c-.831.01-1.662,0-2.492,0a2.558,2.558,0,0,1-2.892-2.641c-.01-.1-.027-.2-.04-.3-.7.047-1.387.137-2.071.129a2.511,2.511,0,0,1-2.631-2.653C1708.723,1145.653,1708.731,1144.072,1708.731,1142.581Zm6.1-3.832q0,5.648,0,11.3c0,.87.328,1.269,1.173,1.312,1.01.051,2.025.059,3.035.024a1.167,1.167,0,0,0,1.215-1.317q.009-11.256,0-22.512a1.192,1.192,0,0,0-1.354-1.332c-.857-.012-1.714-.006-2.571,0-1.14.005-1.5.357-1.5,1.471Q1714.833,1133.219,1714.834,1138.749Zm39.576,0q0,5.609,0,11.217c0,1,.335,1.378,1.325,1.418.933.037,1.87.035,2.8.007a1.166,1.166,0,0,0,1.293-1.241q.013-11.334,0-22.668a1.158,1.158,0,0,0-1.267-1.257c-.909-.019-1.818-.01-2.726,0-1.063.008-1.429.385-1.429,1.466Q1754.408,1133.215,1754.41,1138.745Zm-1.433-1.268h-31.3v2.668h31.3Zm-39.55,1.356c0-2.83,0-5.66,0-8.489a1.138,1.138,0,0,0-1.261-1.314c-.259-.01-.519-.01-.779,0a1.231,1.231,0,0,0-1.353,1.357q-.016,8.411,0,16.822c0,.993.55,1.4,1.743,1.375,1.275-.023,1.649-.335,1.651-1.414Q1713.433,1143,1713.426,1138.832Zm47.787-.09c0,2.8-.021,5.607.023,8.409.006.4.26,1.091.513,1.149a5.1,5.1,0,0,0,2.23.036c.693-.162.644-.911.639-1.515-.02-2.776-.058-5.552-.059-8.329,0-2.646.048-5.293.054-7.94,0-1.2-.435-1.537-1.886-1.528-1.168.007-1.512.349-1.514,1.541Q1761.207,1134.655,1761.213,1138.742Zm-52.424-.053c-.121-.558-.248-1.212-.407-1.858-.131-.532-.564-.485-.988-.5s-.724.074-.88.537a6.15,6.15,0,0,0-.114,3.5c.137.566.347.941,1.076.95.77.009.914-.474,1.05-.992C1708.656,1139.835,1708.693,1139.316,1708.789,1138.689Zm59.717.1c-.112-.589-.224-1.222-.354-1.852-.115-.554-.512-.6-1-.607a.81.81,0,0,0-.925.606,5.99,5.99,0,0,0-.073,3.519c.133.5.345.85,1,.867a.945.945,0,0,0,1.066-.866C1768.341,1139.926,1768.406,1139.386,1768.507,1138.787Z"
                    transform="translate(-1704.837 -1124.918)"
                  />
                </svg>
              }
              text="FITNESS CLUB"
              onChange={() => {
                this.setState({
                  servicesCarouselHeading: "Fitness Club",
                  servicesCarouselContent:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                  services__background__Img: services__background__Img1,
                });
              }}
            />
            <ServicesCarouselControl
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56.584"
                  height="39.957"
                  fill="currentColor"
                  viewBox="0 0 56.584 39.957"
                >
                  <path
                    id="Path_160"
                    data-name="Path 160"
                    d="M958.131,1122.7a3.108,3.108,0,0,1-.791-5.291,2.528,2.528,0,0,0,.755-1.644c.106-1.439.033-2.89.036-4.337.007-3.356.472-4.067,3.655-5.413,0-4.634-.009-9.34,0-14.046.009-3.714,1.24-4.964,4.888-4.966q17.927-.008,35.854,0c3.677,0,4.7,1.039,4.709,4.772.01,4.717,0,9.434,0,14.336,3.415.441,3.894,2.813,3.7,5.654a19.273,19.273,0,0,0,.031,3.875,9.445,9.445,0,0,0,1.022,2.374l.764-.181c0,.981.017,1.962-.008,2.943-.01.372-.039,1.031-.186,1.069-2.786.724-1.079,3.177-2.085,5.111-1.047-.2-2.7-.036-3.384-.771-.806-.86-.775-2.5-1.138-3.926H986.726c-7.232,0-14.464.035-21.7-.028-1.482-.013-2.153.333-2.349,1.945-.118.967.248,2.575-1.68,2.712-2.524.18-2.843-.035-2.87-2.651C958.127,1123.707,958.131,1123.178,958.131,1122.7Zm47.86-16.151c0-5.4.031-10.707-.019-16.014-.015-1.634-1.076-2.112-2.616-2.109q-18.71.049-37.42,0c-1.965-.007-2.74.812-2.72,2.725.048,4.715.017,9.431.031,14.146a5.306,5.306,0,0,0,.221,1l2.086-.21c0-1.24-.049-2.3.01-3.357.131-2.345,1.387-3.742,3.69-3.808,3.5-.1,7-.1,10.494.009,2.4.078,3.551,1.4,3.618,3.787.036,1.271.006,2.544.006,3.939l2.464-.113c0-1.327-.036-2.535.008-3.741.089-2.456,1.187-3.778,3.56-3.859,3.57-.122,7.151-.127,10.72.01,2.271.087,3.346,1.407,3.426,3.733.044,1.271.008,2.545.008,3.869Zm3.727,10.619c0-2.252.021-4.361-.006-6.469-.031-2.452-.644-3.054-3.141-3.057q-12.2-.017-24.4,0c-6.538,0-13.077.013-19.615-.01-1.5-.005-2.867.2-2.94,2.036-.1,2.481-.025,4.969-.025,7.5Zm-51.866,3.593a3.893,3.893,0,0,0,.795.2q25.683.024,51.367.042c1.833,0,1.681-.977,1.313-2.268H957.853Zm44.526-14.224c0-1.058.007-1.954,0-2.85-.024-2.835-.521-3.349-3.272-3.361-2.2-.009-4.4,0-6.6,0-5.645,0-5.684.04-5.4,5.714.006.132.121.259.24.5Zm-35.478-.079h15.185c0-1.477.276-2.851-.093-4.022a3.249,3.249,0,0,0-2.135-2.012,89.158,89.158,0,0,0-10.71,0,3.213,3.213,0,0,0-2.153,1.992A14.767,14.767,0,0,0,966.9,1106.456Zm43.311,15.953h-3.2l1.857,3.126Zm-50.446-.14v3.2l.751.266,1.468-3.288Z"
                    transform="translate(-956.188 -1086.997)"
                  />
                </svg>
              }
              text="LUXURY SUITES"
              onChange={() => {
                this.setState({
                  servicesCarouselHeading: "Luxury Suites",
                  servicesCarouselContent:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                  services__background__Img: services__background__Img1,
                });
              }}
            />
            <ServicesCarouselControl
              svg={
                <svg
                  id="Group_94"
                  data-name="Group 94"
                  xmlns="http://www.w3.org/2000/svg"
                  width="84.459"
                  height="25.123"
                  fill="currentColor"
                  viewBox="0 0 84.459 25.123"
                >
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M2112.886,1141.708c.785-3.573-.024-6.505-3.453-8.18a5.611,5.611,0,0,0-6.3.77c-2.52,2.051-2.989,4.731-1.956,7.818l-38.653.418c0-1.294,0-2.487,0-3.681a6.015,6.015,0,0,0-3.818-5.571,6.108,6.108,0,0,0-7.888,8.051c.157.361.33.716.543,1.177-2.741,0-5.377.17-7.959-.538a7.953,7.953,0,0,1-1.139-.4c-1.214-.543-1.308-.951-.566-1.932-.262-1.635-.842-3.176.167-4.707.173-.263.127-.661.22-.987a5.628,5.628,0,0,1,2.921-3.237,21.142,21.142,0,0,1,7.015-2.4c2.959-.525,5.941-.921,8.914-1.372a.519.519,0,0,1,.183-.027c1.755.432,2.984-.683,4.321-1.47a46.5,46.5,0,0,1,13.544-5.806,33.055,33.055,0,0,1,11.117-.51c4.122.5,8.26.943,12.34,1.686a86.764,86.764,0,0,1,15.667,4.715,8.183,8.183,0,0,0,4.05.739c1.377-.172,1.708.37,1.325,1.706a1.519,1.519,0,0,0,.041.884,6.7,6.7,0,0,1,.819,3.39c-.026.171.3.39.455.6.318.432.906.88.891,1.3a24.658,24.658,0,0,1-.536,4.583,2.353,2.353,0,0,1-2.239,1.793c-2.926.342-5.838.793-8.759,1.184A10.069,10.069,0,0,1,2112.886,1141.708Zm-49.185-.406,35.855-.374a8.037,8.037,0,0,1,1.442-6.177,7.389,7.389,0,0,1,10.859-1.088,7.81,7.81,0,0,1,2.506,6.752,6.325,6.325,0,0,0,.808,0c2.64-.373,5.28-.749,7.916-1.149a1.009,1.009,0,0,0,.6-.384,6.12,6.12,0,0,0,.763-4.392c-.056-.487-.971-.873-1.491-1.308a.807.807,0,0,1-.109-.143l.247-.034c-.108-.913-.152-1.841-.343-2.736-.2-.921-.538-1.811-.767-2.554a38.177,38.177,0,0,1-3.736-.843c-2.652-.865-5.222-2-7.9-2.741-3.99-1.1-8.021-2.1-12.087-2.87-3.006-.569-6.092-.737-9.148-1.024a31.019,31.019,0,0,0-11.36.942,53.8,53.8,0,0,0-13.812,6.583,2.276,2.276,0,0,1-.915.4c-1.57.147-3.166.121-4.714.382-3.205.54-6.408,1.132-9.568,1.883a9.443,9.443,0,0,0-4.706,2.531,2.288,2.288,0,0,0-.78,2.414c-.256.331-.653.609-.647.877.023.909.2,1.814.3,2.722.056.5.081,1,.12,1.5l-.218.3,6.435.718a30.371,30.371,0,0,1,.023-3.737,7.271,7.271,0,0,1,14.42.532C2063.756,1139.254,2063.7,1140.242,2063.7,1141.3Z"
                    transform="translate(-2041.221 -1118.872)"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M2092.3,1198.563a4.775,4.775,0,0,1,9.548.172,4.879,4.879,0,0,1-4.824,4.718A4.83,4.83,0,0,1,2092.3,1198.563Zm4.763,3.6a3.5,3.5,0,0,0,3.572-3.495,3.577,3.577,0,1,0-7.153,0A3.516,3.516,0,0,0,2097.066,1202.165Z"
                    transform="translate(-2081.833 -1178.532)"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M2348.01,1199.65a4.74,4.74,0,0,1-4.792,4.774,4.774,4.774,0,1,1,.088-9.547A4.755,4.755,0,0,1,2348.01,1199.65Zm-1.189.006a3.545,3.545,0,0,0-3.529-3.56,3.561,3.561,0,1,0-.007,7.122A3.562,3.562,0,0,0,2346.821,1199.656Z"
                    transform="translate(-2277.562 -1179.301)"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M2265.614,1141.638c.312-2.336.614-4.606.938-7.045,1.527.073,3.064.114,4.6.226a48.8,48.8,0,0,1,13.319,2.836,5.54,5.54,0,0,1,1.776,1.278,1.18,1.18,0,0,1,.287,1.047,1.377,1.377,0,0,1-.971.647c-2.812.272-5.626.541-8.447.691-3.534.189-7.075.266-10.613.385A8.661,8.661,0,0,1,2265.614,1141.638Zm19.359-2.029q.016-.18.031-.36a5.689,5.689,0,0,0-.792-.427,49.8,49.8,0,0,0-16.034-2.917.8.8,0,0,0-.627.446c-.213,1.332-.354,2.675-.55,4.268Z"
                    transform="translate(-2219.628 -1131.372)"
                  />
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M2177.843,1134.224c-.309,2.086-.635,4.107-.892,6.136-.076.6-.318.776-.881.8-3.011.146-6.019.335-9.029.485-3.693.183-7.386.342-11.067.511C2158.817,1137.988,2172.822,1132.872,2177.843,1134.224Zm-17.858,6.528,15.762-.772c.24-1.6.469-3.11.714-4.737A28.5,28.5,0,0,0,2159.985,1140.752Z"
                    transform="translate(-2132.458 -1130.902)"
                  />
                </svg>
              }
              text="TRANSPORT"
              onChange={() => {
                this.setState({
                  servicesCarouselHeading: "Transport",
                  servicesCarouselContent:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                  services__background__Img: services__background__Img1,
                });
              }}
            />
            <ServicesCarouselControl
              svg={
                <svg
                  id="Group_92"
                  data-name="Group 92"
                  xmlns="http://www.w3.org/2000/svg"
                  width="77.082"
                  height="48.722"
                  fill="currentColor"
                  viewBox="0 0 77.082 48.722"
                >
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M1297.7,1244.372c-.3-1.758-.584-3.466-.888-5.269a9.266,9.266,0,0,1,5.878.857,43.229,43.229,0,0,1,4.05,2.783c.5.352.976.741,1.489,1.074a3.48,3.48,0,0,0,4.011.109,42.4,42.4,0,0,0,3.51-2.569,11.764,11.764,0,0,1,14.374.1c.972.8,1.961,1.582,3,2.3a3.643,3.643,0,0,0,4.357.065c1.152-.767,2.23-1.647,3.327-2.5a11.68,11.68,0,0,1,14.362.185c.85.692,1.7,1.384,2.582,2.041a3.7,3.7,0,0,0,3.916.574c3.8-1.685,7.581-3.4,11.369-5.1.254-.114.5-.247.862-.426-.11,1.85-.2,3.581-.337,5.307a.967.967,0,0,1-.492.611c-2.739,1.443-5.44,2.971-8.251,4.259a10.113,10.113,0,0,1-11.6-1.747c-.61-.529-1.216-1.063-1.836-1.579a4.689,4.689,0,0,0-5.348-.658,33.327,33.327,0,0,0-4.575,2.875c-2.749,1.953-5.673,2.871-9.019,1.87a13.026,13.026,0,0,1-4.565-2.849c-.272-.229-.533-.47-.811-.691-2.8-2.22-4.973-2.3-7.921-.255-.769.533-1.5,1.121-2.225,1.715-2.864,2.351-6.08,2.585-9.5,1.59a15.826,15.826,0,0,1-5.509-3.151A5.5,5.5,0,0,0,1297.7,1244.372Zm1.035-1.417a19.275,19.275,0,0,1,2.306.872c.736.388,1.379.949,2.08,1.407a24.4,24.4,0,0,0,3.268,2.049c3.518,1.567,6.937,1.629,10.036-1.067a18.715,18.715,0,0,1,1.53-1.186c1.854-1.3,3.787-2.347,6.187-1.932,1.987.343,3.358,1.688,4.86,2.854a15.147,15.147,0,0,0,3.3,2.157c3.078,1.282,5.844.36,8.446-1.488a33.992,33.992,0,0,1,4.742-2.965,5.932,5.932,0,0,1,6.78.889c.844.7,1.632,1.478,2.511,2.131a8.749,8.749,0,0,0,9.485.97c2.563-1.2,5.037-2.6,7.543-3.919.206-.109.487-.3.514-.483.116-.782.148-1.577.225-2.535-.527.258-.89.453-1.266.617-3.071,1.334-6.132,2.692-9.221,3.98a4.988,4.988,0,0,1-5.114-.786c-.884-.65-1.726-1.355-2.585-2.039a10.41,10.41,0,0,0-12.913-.095,41.011,41.011,0,0,1-3.491,2.588,4.776,4.776,0,0,1-5.316-.058,30.311,30.311,0,0,1-2.872-2.135,10.4,10.4,0,0,0-13.668-.088c-.582.461-1.151.94-1.744,1.387a6.307,6.307,0,0,1-4.531,1.609,8.112,8.112,0,0,1-4.138-2.158,26.075,26.075,0,0,0-2.956-2.172,7.836,7.836,0,0,0-4.451-1.1Z"
                    transform="translate(-1296.814 -1201.213)"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M1405.48,1094.141l12.315-10.286c-.791-.961-1.554-1.9-2.329-2.826-2.174-2.6-4.339-5.211-6.534-7.794-2.577-3.032-1.561-6.626,2.253-7.655q11.6-3.131,23.227-6.156a4.246,4.246,0,0,1,4.8,2.055,4.145,4.145,0,0,1-.679,5.159,6.982,6.982,0,0,1-2.7,1.384c-5.175,1.432-10.374,2.775-15.564,4.152a5.92,5.92,0,0,0-.581.225l18.111,22.1c-.768-.142-1.279-.214-1.779-.333a11.36,11.36,0,0,0-9.91,1.9c-1,.746-2.138,1.308-3.213,1.954a3.256,3.256,0,0,1-3.323.014,11.008,11.008,0,0,1-2.755-1.754c-2.774-2.736-6.012-3.291-9.648-2.361q-.651.166-1.307.314C1405.8,1094.243,1405.737,1094.2,1405.48,1094.141Zm4.2-1.863a10.4,10.4,0,0,1,8.159,3.237,10.5,10.5,0,0,0,2.57,1.495,1.63,1.63,0,0,0,1.715-.051c1.037-.643,2.171-1.141,3.158-1.848a12.388,12.388,0,0,1,5.431-2.408c1.212-.176,2.45-.17,3.792-.253l-17.078-20.777c.24-.086.351-.135.467-.167q9.092-2.425,18.187-4.84a3.108,3.108,0,0,0,2.28-2.03,2.885,2.885,0,0,0-.627-3.065,3.175,3.175,0,0,0-3.454-.857q-11.557,3.1-23.119,6.183a3.066,3.066,0,0,0-1.641,5.048c2.008,2.446,4.057,4.857,6.085,7.287,1.317,1.578,2.627,3.162,3.969,4.778Z"
                    transform="translate(-1382.828 -1059.283)"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M1533.47,1128.1a8.316,8.316,0,1,1-8.372,8.315A8.287,8.287,0,0,1,1533.47,1128.1Zm6.969,8.308a7,7,0,0,0-7.018-7.091,7.109,7.109,0,0,0-7.1,7.069,7.031,7.031,0,0,0,7.078,7.051A6.9,6.9,0,0,0,1540.439,1136.408Z"
                    transform="translate(-1477.511 -1113.755)"
                  />
                </svg>
              }
              text="INFINITY POOL"
              onChange={() => {
                this.setState({
                  servicesCarouselHeading: "Infinity Pool",
                  servicesCarouselContent:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                  services__background__Img: services__background__Img1,
                });
              }}
            />
            <ServicesCarouselControl
              svg={
                <svg
                  id="Group_91"
                  data-name="Group 91"
                  xmlns="http://www.w3.org/2000/svg"
                  width="54.671"
                  height="54.541"
                  viewBox="0 0 54.671 54.541"
                  fill="currentColor"
                >
                  <path
                    id="Path_23"
                    data-name="Path 23"
                    d="M2943.356,1129a22.006,22.006,0,0,0,.535,2.531,4.3,4.3,0,0,1-1.279,4.927c-2.16,2.052-4.218,4.211-6.34,6.3-2.4,2.364-4.828,2.363-7.2.015-1.53-1.514-2.986-3.108-4.59-4.536a3.917,3.917,0,0,0-2.287-.959c-3.474-.1-6.955-.127-10.428-.006-1.466.051-1.964-.553-2.072-1.836q-.516-6.094-1.048-12.187c-.433-4.884-.871-9.767-1.343-14.647a1.615,1.615,0,0,0-.57-1.036c-3.518-2.569-3.328-5.842.5-8.054-.2-4.687,1.71-6.272,5.972-5.9.743-2.177,2.069-3.906,4.607-3.576,1.249.163,2.341,1.345,3.6,1.636,1.212.279,2.556-.077,3.832.009.489.033.948.517,1.412.79,2.812-2.23,4.59-2.165,7.013.134a16.833,16.833,0,0,1,3.3-.967,3.888,3.888,0,0,1,4.221,3.367,2.964,2.964,0,0,0,1.394,2.214,4.217,4.217,0,0,1,1.373,4.9,16.611,16.611,0,0,0-.406,2.531,5.309,5.309,0,0,1-.351,1.916c-1.634,2.6-.862,5.522-1.1,8.419,2.088-2.091,4.226-4.136,6.247-6.291,1.05-1.119,1.783-1.089,2.819.022,1.956,2.1,4.053,4.063,6.063,6.111,2.213,2.256,2.215,4.713-.006,6.982-2.046,2.09-4.2,4.08-6.18,6.229a4.539,4.539,0,0,1-5.327,1.477A19.647,19.647,0,0,0,2943.356,1129Zm-25.068,6.628c1.875.059,3.264.17,4.753-1.439,4.832-5.222,9.963-10.169,15.047-15.153a5.733,5.733,0,0,0,2.174-4.348c-.012-2.107.333-4.216.525-6.353h-6.937c-.1,1.556-.206,3.032-.3,4.509-.09,1.43-.08,2.874-.28,4.288-.187,1.323.406,2.824-.513,4l-.56-.066c.213-4.231.427-8.462.641-12.72h-7.718v20.688h-.641v-20.67h-7.643C2917.324,1117.506,2917.8,1126.52,2918.288,1135.627Zm-9.5-35.539a16.923,16.923,0,0,0-1.684.593,3.231,3.231,0,0,0-1.782,3.715c.334,1.319,1.065,2.369,2.546,2.4,3.089.054,6.18-.01,9.271-.01a2.36,2.36,0,0,0,2.376-1.925,3.006,3.006,0,0,0-2.086-3.783,3.077,3.077,0,0,0-3.742,2.167,7.372,7.372,0,0,1-.562,1.087l-.416-.233a3.932,3.932,0,0,1,6.517-3.069c1.793,1.6,1.686,3.551.546,5.654.6.041,1.022.095,1.444.1q9.687.008,19.373,0c1.776,0,2.446-.926,1.955-2.646-.584-2.048-2.175-2.587-4.051-2.6.048-3.745-2.757-6-6.618-3.1-.7-2.483-2.5-3.211-4.772-2.742-.948-3.009-2.783-4.206-4.915-3.127-1.078.546-1.439.262-2.112-.527a3.284,3.284,0,0,0-5.563.913,5.722,5.722,0,0,0-.247,1.49c-1.777.294-3.569.168-4.869.907C2907.646,1096.348,2908.054,1098.265,2908.792,1100.089Zm15.282,35.4c2.136,2.164,4.232,4.357,6.408,6.467,1.542,1.495,2.905,1.437,4.464-.083,1.7-1.656,3.238-3.5,5.068-4.987,2.263-1.842,3.309-3.847,2-6.666a1.173,1.173,0,0,1-.093-.317,1.88,1.88,0,0,1,2.318-2.309,23.508,23.508,0,0,0,2.728.626,3.059,3.059,0,0,0,2.083-.517c2.567-2.42,5.054-4.929,7.5-7.469a2.477,2.477,0,0,0,.183-3.6c-2.25-2.392-4.667-4.626-6.944-6.856Zm-15.171-27.131c.811,9.166,1.612,18.217,2.409,27.22h6.019c-.491-9.15-.974-18.185-1.458-27.22Zm24.8-13.856c-.347-.527-.586-.936-.868-1.311a3.307,3.307,0,0,0-4.937-.465,1.537,1.537,0,0,0-.38,1.1,1.223,1.223,0,0,0,.683.756c1.484.658,2.993,1.255,4.849,2.019,2.556-1.374,5.219-.211,6.191,3.182a1.455,1.455,0,0,0,.612.826c.99.525,2.026.966,3.044,1.442.89-2.422.252-3.716-2.531-5.017.233-1.793-.136-3.452-1.978-4.239C2936.491,1091.986,2935.009,1092.932,2933.7,1094.5Z"
                    transform="translate(-2904.221 -1089.995)"
                  />
                  <path
                    id="Path_24"
                    data-name="Path 24"
                    d="M3010.951,1244.473a9.14,9.14,0,0,1-1.019,1.662q-2.624,2.735-5.351,5.373c-1.154,1.122-2.116,1.1-3.288-.014-.678-.642-1.334-1.309-1.981-1.983-1.227-1.281-1.255-2.084,0-3.385q2.576-2.669,5.246-5.245c1.3-1.252,2.118-1.223,3.393,0,.715.683,1.433,1.369,2.088,2.108A10.358,10.358,0,0,1,3010.951,1244.473Zm-1.049.005.517-.647a13.689,13.689,0,0,1-2.571-1.789c-1.095-1.2-1.921-1.389-3.036-.044-.944,1.139-2.094,2.1-3.127,3.17-3.04,3.142-3.232,2.1.142,5.546.039.039.08.076.118.115a1.2,1.2,0,0,0,1.976-.057c1.771-1.806,3.573-3.583,5.347-5.386A6.476,6.476,0,0,0,3009.9,1244.478Z"
                    transform="translate(-2974.692 -1202.224)"
                  />
                  <path
                    id="Path_25"
                    data-name="Path 25"
                    d="M3067.3,1188.4a9.413,9.413,0,0,1-1,1.6q-2.647,2.735-5.382,5.384a2.138,2.138,0,0,1-3.331-.016c-3.7-3.355-3.708-3.6-.242-7.067,1.21-1.209,2.394-2.447,3.639-3.618,1.192-1.122,2.111-1.09,3.3.04.72.683,1.446,1.368,2.094,2.117A10.021,10.021,0,0,1,3067.3,1188.4Zm-8.05,7.039c.457-.373.814-.62,1.119-.92,1.179-1.158,2.354-2.319,3.506-3.5,3-3.08,3.18-2.13-.175-5.577-.732-.751-1.311-.821-2.059-.026-1.207,1.283-2.493,2.491-3.727,3.748-2.909,2.96-2.933,2.125.086,5.194C3058.366,1194.73,3058.794,1195.05,3059.245,1195.438Z"
                    transform="translate(-3016.892 -1160.243)"
                  />
                </svg>
              }
              text="ENTERTAINMENT"
              onChange={() => {
                this.setState({
                  servicesCarouselHeading: "Entertainment",
                  servicesCarouselContent:
                    "Lorem Ipsum is simply dummy text of the printing and andard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                  services__background__Img: services__background__Img1,
                });
              }}
            />
            <ServicesCarouselControl
              svg={
                <svg
                  id="Group_90"
                  data-name="Group 90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="49.341"
                  height="49.357"
                  fill="currentColor"
                  viewBox="0 0 49.341 49.357"
                >
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M2569.931,1102.333a24.67,24.67,0,1,1-24.511-24.7A24.686,24.686,0,0,1,2569.931,1102.333Zm-24.694,23.594a23.631,23.631,0,1,0-23.611-23.557A23.642,23.642,0,0,0,2545.237,1125.927Z"
                    transform="translate(-2520.59 -1077.628)"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M2663.816,1134.677c.081-3.3.168-6.609.228-9.915,0-.231-.145-.611-.317-.677a4.421,4.421,0,0,1-2.765-3.811,10.078,10.078,0,0,1,.84-6.435,7.49,7.49,0,0,1,1.005-1.5,3.117,3.117,0,0,1,5.128.04,7.643,7.643,0,0,1,1.1,1.71,10.248,10.248,0,0,1,.507,7.068,4.048,4.048,0,0,1-2.458,2.883.874.874,0,0,0-.43.667c.159,6.479.346,12.957.529,19.435a5.883,5.883,0,0,1,0,.63,1.82,1.82,0,0,1-1.919,1.771,1.745,1.745,0,0,1-1.712-1.877c.052-2.885.148-5.77.229-8.654.012-.446.038-.892.057-1.337Zm2.051-.4h.01c-.1-3.358-.182-6.715-.3-10.073a.87.87,0,0,1,.788-1.036,2.7,2.7,0,0,0,2.052-1.881,8.77,8.77,0,0,0-.673-7.436c-1.463-2.473-3.408-2.43-4.837.078a8.977,8.977,0,0,0-.67,7.229,2.7,2.7,0,0,0,2.045,1.992c.74.165.883.56.862,1.228-.206,6.662-.391,13.326-.589,19.988-.016.58.075,1.078.764,1.151.557.059.826-.36.8-1.166Q2666,1139.319,2665.867,1134.282Z"
                    transform="translate(-2629.194 -1103.495)"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M2571.552,1112.972v2.956c0,2.153.031,4.307-.014,6.459a2.1,2.1,0,0,0,1.425,2.2c.6.23.689.581.674,1.138q-.25,8.737-.464,17.475c-.026,1-.025,2-.047,2.993a.729.729,0,0,0,.734.842.737.737,0,0,0,.816-.843c-.033-1.338-.077-2.677-.11-4.015q-.2-8.3-.412-16.61a.834.834,0,0,1,.607-.942,2.217,2.217,0,0,0,1.507-2.32c-.043-2.809-.014-5.619-.014-8.428V1113c.735-.024,1.032.351,1.033.954.007,2.967.013,5.933-.022,8.9a2.761,2.761,0,0,1-1.534,2.415,1,1,0,0,0-.56,1.056q.269,9.839.506,19.68a1.773,1.773,0,0,1-1.671,2.057,1.746,1.746,0,0,1-1.892-1.841c.009-1.575.046-3.15.088-4.724q.2-7.6.427-15.192a.925.925,0,0,0-.514-1,2.983,2.983,0,0,1-1.622-2.7c-.022-2.835-.013-5.671-.007-8.507A.977.977,0,0,1,2571.552,1112.972Z"
                    transform="translate(-2559.237 -1105.008)"
                  />
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M2627.536,1132.8c0,.309-.007.619,0,.928.105,4.041.222,8.081.312,12.122a1.864,1.864,0,0,1-1.618,1.92,1.9,1.9,0,0,1-2.1-1.289,2.836,2.836,0,0,1-.1-.851q-.007-15.752,0-31.505c0-.57-.089-1.3.59-1.481.726-.2.994.535,1.163,1.043a67.352,67.352,0,0,1,2.095,6.806c.673,3.086,1.09,6.229,1.556,9.357a2.9,2.9,0,0,1-.237,1.753,6.588,6.588,0,0,1-1.448,1.358Zm-2.309-18.019-.2.043v.747q0,14.812,0,29.624c0,1.117.3,1.609.963,1.574.638-.034.89-.485.861-1.577q-.167-6.259-.343-12.519c-.014-.488-.074-.954.647-1,1.054-.072,1.289-.356,1.292-1.432a7.09,7.09,0,0,0-.054-1.257c-.554-3.065-1.07-6.14-1.719-9.185C2626.312,1118.1,2625.717,1116.453,2625.227,1114.783Z"
                    transform="translate(-2600.72 -1104.73)"
                  />
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M2559.536,1154.362a21.988,21.988,0,0,1-.4,2.908,15.353,15.353,0,0,0,1.447,12.151,3.329,3.329,0,0,1,.4,2.179c-3.67-2.494-4.638-12.584-1.684-17.27Z"
                    transform="translate(-2549.225 -1137.047)"
                  />
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M2692.272,1178.969a16.19,16.19,0,0,1,.46-2.629,15.966,15.966,0,0,0,.609-8.518c-.157-.779-.142-.849.672-1.558a16.445,16.445,0,0,1-1.407,12.744Z"
                    transform="translate(-2653.588 -1146.292)"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M2588.01,1117.823c0,1.365.023,2.731-.02,4.095-.008.264-.238.708-.427.744-.489.092-.559-.324-.558-.727,0-2.809-.011-5.618.025-8.427,0-.241.335-.479.514-.718.155.234.438.464.444.7C2588.031,1114.935,2588.01,1116.379,2588.01,1117.823Z"
                    transform="translate(-2572.04 -1104.867)"
                  />
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M2578.5,1117.811c0-1.392-.026-2.784.022-4.174.01-.285.3-.56.464-.839.171.273.487.544.491.818q.055,4.135,0,8.27c0,.275-.278.742-.488.78-.548.1-.484-.4-.486-.759C2578.5,1120.542,2578.5,1119.176,2578.5,1117.811Z"
                    transform="translate(-2565.448 -1104.873)"
                  />
                  <path
                    id="Path_19"
                    data-name="Path 19"
                    d="M2649.493,1244.647c.219.632-.071,1.044-.734,1.391a17.088,17.088,0,0,1-4.875,1.761c-.2-.647-.059-.974.635-1.214C2646.186,1246.007,2647.812,1245.311,2649.493,1244.647Z"
                    transform="translate(-2616.038 -1207.013)"
                  />
                  <path
                    id="Path_20"
                    data-name="Path 20"
                    d="M2601.74,1250.531c-1.746-.61-3.315-1.148-4.877-1.708-.638-.229-.393-.743-.373-1.143l5.249,1.769Z"
                    transform="translate(-2579.34 -1209.363)"
                  />
                  <path
                    id="Path_21"
                    data-name="Path 21"
                    d="M2642.8,1116.522l-.445.9c-1.528-1.089-3.691-.682-4.969-2.309C2638.325,1114.864,2641.244,1115.615,2642.8,1116.522Z"
                    transform="translate(-2611.069 -1106.628)"
                  />
                  <path
                    id="Path_22"
                    data-name="Path 22"
                    d="M2606.215,1116.513c-.262-.7-.087-1.083.626-1.221.764-.148,1.518-.349,2.34-.541v1.021Z"
                    transform="translate(-2586.833 -1106.386)"
                  />
                </svg>
              }
              text="DINE-IN"
              onChange={() => {
                this.setState({
                  servicesCarouselHeading: "Dine-In",
                  servicesCarouselContent:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                  services__background__Img: services__background__Img1,
                });
              }}
            />
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
