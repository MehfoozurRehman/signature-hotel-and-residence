import React, { Component, useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import ring from "../Assets/ring.png";
import contactImg from "../Assets/contactImg.png";
import plansImage1 from "../Assets/plans/1.png";
import plansImage2 from "../Assets/plans/2.png";
import plansImage3 from "../Assets/plans/3.png";
import photoGalleryImg1 from "../Assets/photo-gallery/1.png";
import photoGalleryImg2 from "../Assets/photo-gallery/2.png";
import photoGalleryImg3 from "../Assets/photo-gallery/3.png";
import photoGalleryImg4 from "../Assets/photo-gallery/4.png";
import photoGalleryImg5 from "../Assets/photo-gallery/5.png";
import photoGalleryImg6 from "../Assets/photo-gallery/6.png";

import Header from "../Components/Header";
import { Link } from "react-router-dom";
import construction_update__img from "../Assets/construction_update__img.png";
import work__img from "../Assets/work__img.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../Components/Footer";

function ConstructionUpdateControl({ defaultChecked, onChange }) {
  return (
    <div className="construction__update__container__wrapper_content__carousel__progress__controls__button">
      <input
        type="radio"
        name="construction__update__container__wrapper_content__carousel__progress__controls__button"
        id=""
        onChange={onChange}
        defaultChecked={defaultChecked}
        className="construction__update__container__wrapper_content__carousel__progress__controls__button__input"
      />
      <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper">
        <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__dot">
          <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__dot__small"></div>
        </div>
        <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__time">
          10/3/21
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
export default class ConstructionUpdateScreen extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
      constructionUpdateTitle: "Project Name",
      constructionUpdateContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      constructionUpdateImg: work__img,
      constructionUpdateProgress: 66,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="construction__update__container">
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
          <img
            src={construction_update__img}
            alt="construction update__img"
            className="construction__update__container__img"
          />
          <div className="construction__update__container__wrapper">
            <div className="construction__update__container__wrapper__content">
              <div className="construction__update__container__wrapper_content__carousel">
                <img
                  src={this.state.constructionUpdateImg}
                  alt="work__img"
                  className="construction__update__container__wrapper_content__carousel__img"
                />
                <div className="construction__update__container__wrapper_content__carousel__wrapper">
                  <div className="construction__update__container__wrapper_content__carousel__wrapper__content">
                    <div className="construction__update__container__wrapper_content__carousel__left">
                      <div className="construction__update__container__wrapper_content__carousel__heading">
                        {this.state.constructionUpdateTitle}
                      </div>
                      <div className="construction__update__container__wrapper_content__carousel__info">
                        {this.state.constructionUpdateContent}
                      </div>
                    </div>
                    <div className="construction__update__container__wrapper_content__carousel__right">
                      <CircularProgressbar
                        value={this.state.constructionUpdateProgress}
                        text={`${this.state.constructionUpdateProgress}%`}
                        strokeWidth={3}
                        styles={{
                          trail: {
                            stroke: "#ffffff",
                          },
                          path: {
                            stroke: "#dfb449",
                          },
                          text: {
                            fill: "#dfb449",
                          },
                        }}
                        counterClockwise={true}
                      />
                      ;
                    </div>
                  </div>
                </div>
              </div>
              <div className="construction__update__container__wrapper_content__carousel__progress__controls">
                <div className="construction__update__container__wrapper_content__carousel__progress__controls__bar"></div>
                <ConstructionUpdateControl
                  defaultChecked={true}
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 1",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 50,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 2",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 55,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 3",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 60,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 4",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 65,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 5",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 79,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 6",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 80,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 7",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 90,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 8",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 30,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 9",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 15,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="plans__container">
          <div className="plans__container__heading">Upcoming Plans</div>
          <div className="plans__container__content">
            <div className="plans__container__content__card">
              <img
                src={plansImage1}
                alt="plansImage"
                className="plans__container__content__card__img"
              />
              <div className="plans__container__content__card__content">
                <div className="plans__container__content__card__content__heading">
                  Project Name
                </div>
                <div className="plans__container__content__card__content__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
                </div>
              </div>
            </div>
            <div className="plans__container__content__card">
              <img
                src={plansImage1}
                alt="plansImage"
                className="plans__container__content__card__img"
              />
              <div className="plans__container__content__card__content">
                <div className="plans__container__content__card__content__heading">
                  Project Name
                </div>
                <div className="plans__container__content__card__content__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
                </div>
              </div>
            </div>
            <div className="plans__container__content__card">
              <img
                src={plansImage2}
                alt="plansImage"
                className="plans__container__content__card__img"
              />
              <div className="plans__container__content__card__content">
                <div className="plans__container__content__card__content__heading">
                  Project Name
                </div>
                <div className="plans__container__content__card__content__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
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
