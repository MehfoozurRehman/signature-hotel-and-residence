import React from "react";

export default function BuildingDetailsCard({ svg, Heading, subHeading }) {
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
