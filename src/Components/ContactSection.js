import React, { Component } from "react";
import ring from "../Assets/ring.png";
import contactImg from "../Assets/contactImg.jpg";
export default class ContactSection extends Component {
  render() {
    return (
      <div className="contact__container">
        <img
          loading="lazy"
          src={ring}
          alt="ring"
          className="contact__container__img"
        />
        <div className="contact__container__content">
          <div className="contact__container__wrapper">
            <div className="contact__container__wrapper__left">
              <img
                loading="lazy"
                src={ring}
                alt="ring"
                className="contact__container__wrapper__left__img"
              />
              <div className="contact__container__wrapper__left__wrapper">
                <div className="contact__container__wrapper__left__wrapper__heading heading">
                  Make your investment today
                </div>
                <div className="contact__container__wrapper__left__wrapper__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries,
                </div>
                <img
                  loading="lazy"
                  src={contactImg}
                  alt="contactImg"
                  className="contact__container__wrapper__left__wrapper__img"
                />
              </div>
            </div>
            <div action="" className="contact__container__wrapper__right">
              <div className="contact__container__wrapper__right__heading heading">
                Request a call back
              </div>
              {this.props.isSent ? (
                <div className="contact__container__wrapper__right__info">
                  Thank you {this.props.name} for contacting us, Our manager
                  will contact you soon
                  <br></br>
                  <br></br>
                  <button
                    className="heading contact__container__wrapper__right__button"
                    onClick={() => this.props.resetForm()}
                  >
                    Request Again
                  </button>
                </div>
              ) : !this.props.isSent ? (
                <>
                  <div
                    className="contact__container__wrapper__right__info"
                    name="callRequest"
                  >
                    Our manager will contact you soon
                  </div>
                  <input
                    type="text"
                    className="contact__container__wrapper__right__input"
                    placeholder="Name"
                    name="name"
                    value={this.props.name}
                    onChange={this.props.handleInputChange}
                  />
                  <input
                    type="text"
                    className="contact__container__wrapper__right__input"
                    placeholder="Phone"
                    name="phone"
                    value={this.props.phone}
                    onChange={this.props.handleInputChange}
                  />
                  <input
                    type="time"
                    className="contact__container__wrapper__right__input"
                    placeholder="Preferred Time"
                    name="time"
                    value={this.props.preferredTime}
                    onChange={this.props.handleInputChange}
                  />
                  <button
                    className="heading contact__container__wrapper__right__button"
                    onClick={() => this.props.requestACall()}
                  >
                    Send
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
