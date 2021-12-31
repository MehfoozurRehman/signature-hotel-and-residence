import React from "react";

export default function ServicesCarouselControl({
  defaultChecked,
  svg,
  text,
  onChange,
}) {
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
