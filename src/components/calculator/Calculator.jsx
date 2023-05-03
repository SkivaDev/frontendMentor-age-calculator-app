import React from "react";

function Calculator() {
  return (
    <main className="calculator">
      <div className="calculator__container">
        <div className="calculator__form-box">
          <div className="form__item">
            <label className="form__label" htmlFor="day">
              DAY
            </label>
            <input
              className="form__input"
              id="day"
              type="number"
              placeholder="DD"
            />
            <div className="form__alert"></div>
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="month">
              MONTH
            </label>
            <input
              className="form__input"
              id="month"
              type="number"
              placeholder="MM"
            />
            <div className="form__alert"></div>
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="year">
              YEAR
            </label>
            <input
              className="form__input"
              id="year"
              type="number"
              placeholder="YY"
            />
            <div className="form__alert"></div>
          </div>
        </div>
        <div className="calculator__btn-box">
          <div className="btn-line"></div>
          <button className="btn"></button>
        </div>
        <div className="calculator__display-box">
          <h1 className="display-item">
            <mark>38</mark> years
          </h1>
          <h1 className="display-item">
            <mark>3</mark> months
          </h1>
          <h1 className="display-item">
            <mark>26</mark> days
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
