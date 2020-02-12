import React from "react";
import "./Movie.scss";

export default function Movie({ data }) {
  let rating = ["--", "--", "--"];
  if (data.Ratings) {
    for (const [index, element] of data.Ratings.entries()) {
      rating[index] = element.Value;
    }
  }
  return (
    <div className="results">
      <div className="results__img">
        <img src={data.Poster} alt="" />
      </div>
      <div className="results__content">
        <div className="results__content__title">{data.Title}</div>
        <div className="results__content__dir">Dir. {data.Director}</div>
        <div className="results__content__data">
          {data.Year} , {data.Country}
        </div>
        <div className="results__content__data">{data.Genre}</div>
        <div className="results__content__plot">{data.Plot}</div>
        <div className="results__content__rating">
          <div className="rating_card">
            <div className="rating__card__icon i0"></div>
            <div className="rating__card__value">{rating[0]}</div>
          </div>
          <div className="rating_card">
            <div className="rating__card__icon i1"></div>
            <div className="rating__card__value">{rating[1]}</div>
          </div>
          <div className="rating_card">
            <div className="rating__card__icon i2"></div>
            <div className="rating__card__value">{rating[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
