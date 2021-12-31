import React from "react";

export default function ConstructionUpdateControl({
  defaultChecked,
  onClick,
  date,
}) {
  return (
    <div className="construction__update__container__wrapper_content__carousel__progress__controls__button">
      <input
        type="radio"
        name="construction__update__container__wrapper_content__carousel__progress__controls__button"
        id=""
        onClick={onClick}
        defaultChecked={defaultChecked}
        className="construction__update__container__wrapper_content__carousel__progress__controls__button__input"
      />
      <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper">
        <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__dot">
          <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__dot__small"></div>
        </div>
        <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__time">
          {date}
        </div>
      </div>
    </div>
  );
}
