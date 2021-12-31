import React, { Component } from "react";
import ring from "../Assets/ring.png";
import about__backgound from "../Assets/about__backgound.jpg";
import about__pic from "../Assets/about__pic.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BuildingDetailsSection from "../Components/BuildingDetailsSection";
import PhotoGallery from "../Components/PhotoGallery";

export default class AboutUsScreen extends Component {
  componentDidMount() {
    this.props.setOnWelcome(false);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main__section__container">
          <img
            loading="lazy"
            src={about__backgound}
            alt="about__backgound"
            className="main__section__container__img"
          />
          <div className="main__section__container__wrap">
            <div className="main__section__container__about__us">
              <div className="main__section__container__about__us__wrapper">
                <div className="main__section__container__about__us__heading heading">
                  About Us
                </div>
                <div className="main__section__container__about__us__sub__heading">
                  SIGNATURE HOTEL AND RESIDENCE IS ONE OF THE DYNAMIC AND
                  VERSATILE PROJECTS OF J7 GROUP, LOCATED AT TOP CITY 01,
                  ISLAMABAD. IT IS THE SOLE 5-STAR OPULENT HOTEL NEAREST &
                  ACCESSIBLE TO NEW ISLAMABAD INTERNATIONAL AIRPORT.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__section__our__vision">
          <div className="main__section__our__vision__container">
            <div className="main__section__our__vision__wrapper">
              <div className="our__vision__headings">
                Our Vision
                <div className="our__vision__sub__heading">
                  SUMPTUOUS SURROUNDINGS, UNFORGETTABLE STAYS
                </div>
              </div>
              <div className="main__section__our__vision__wrapper__content">
                <div className="main__section__our__vision__wrapper__left">
                  <img
                    loading="lazy"
                    src={about__pic}
                    alt="about__pic"
                    className="main__section__our__vision__wrapper__left__top"
                  />
                  <div className="main__section__our__vision__wrapper__left__bottom">
                    <img loading="lazy" src={about__pic} alt="about__pic" />
                    <div className="main__section__our__vision__wrapper__left__bottom__spacer"></div>
                    <img loading="lazy" src={about__pic} alt="about__pic" />
                  </div>
                </div>
                <div className="main__section__our__vision__wrapper__right">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries,Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src={ring}
              alt=""
              className="main__section__our__vision__ring"
            />
          </div>
        </div>
        <BuildingDetailsSection />
        <div className="photo__gallery__container">
          <div className="photo__gallery__container__heading heading">
            Photo Gallery
          </div>
          <PhotoGallery />
        </div>
        <Footer />
      </div>
    );
  }
}
