import React, { useRef, useState } from "react";
import "./calculator.scss";
import icon from "../../assets/images/icon-arrow.svg";

function Calculator() {
  const [valueDay, setValueDay] = useState(0);
  const [valueMonth, setValueMonth] = useState(0);
  const [valueYear, setValueYear] = useState(0);

  const [errorDay, setErrorDay] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);

  const [alertDay, setAlertDay] = useState("Must be a valid day");
  const [alertMonth, setAlertMonth] = useState("Must be a valid month");
  const [alertYear, setAlertYear] = useState("Must be in the past");

  const currentDate = new Date();

  const inputDayRef = useRef(null);
  const inputMonthRef = useRef(null);
  const inputYearRef = useRef(null);

  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  // independent function
  const validateDay = (value) => {
    if (!value) {
      inputDayRef.current.focus();
      setValueDay(value);
      setErrorDay(true);
      setAlertDay("This field is required");
      return false;
    } else if (value > 31) {
      inputDayRef.current.focus();
      setValueDay(value);
      setErrorDay(true);
      setAlertDay("Must be a valid day");
      return false;
    }
    setErrorDay(false);
    return true;
  };
  const validateMonth = (value) => {
    if (!value) {
      inputMonthRef.current.focus();
      setValueMonth(value);
      setErrorMonth(true);
      setAlertMonth("This field is required");
      return false;
    } else if (value > 12) {
      inputMonthRef.current.focus();
      setValueMonth(value);
      setErrorMonth(true);
      setAlertMonth("Must be a valid month");
      return false;
    }
    setErrorMonth(false);
    return true;
  };
  const validateYear = (value) => {
    if (!value) {
      inputYearRef.current.focus();
      setValueYear(value);
      setErrorYear(true);
      setAlertYear("This field is required");
      return false;
    } else if (value > currentDate.getFullYear()) {
      inputYearRef.current.focus();
      setValueYear(value);
      setErrorYear(true);
      setAlertYear("Must be in the past");
      return false;
    }
    setErrorYear(false);
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDays(0);
    setMonths(0);
    setYears(0);

    const isValidDay = validateDay(valueDay);
    const isValidMonth = validateMonth(valueMonth);
    const isValidYear = validateYear(valueYear);

    if (isValidDay && isValidMonth && isValidYear) {
      console.log("Send data");

      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1; // month start at 0, so we have to add 1
      const currentYear = currentDate.getFullYear();

      // days = currentDay - valueDay;
      setDays(currentDay - valueDay);
      // months = currentMonth - valueMonth;
      setMonths(currentMonth - validateMonth); // 04/05/2023 - 25/01/2021 =
      // years = currentYear - validateYear;
      setYears(currentYear - validateYear);

      if (
        currentMonth < valueMonth ||
        (currentMonth === valueMonth && currentDay < valueDay)
      ) {
        // years--;
        setYears(years - 1);
        // months = 12 - valueMonth + currentMonth;
        setMonths(12 - valueMonth + currentMonth);
        // days = currentDay + (new Date(currentYear, currentMonth, 0).getDate()) - valueDay;
        setDays(
          currentDay +
            new Date(currentYear, currentMonth, 0).getDate() -
            valueDay
        );
      }
      if (days < 0) {
        // months--;
        setMonths(months - 1);
        // days = days + new Date(currentYear, currentMonth - 1, 0).getDate();
        setDays(days + new Date(currentYear, currentMonth - 1, 0).getDate());
      }
    }
  };

  // const onSubmitTwo = (e) => {
  //   e.preventDefault();
  //   console.log("Send data");
  // };

  const onChangeDay = (e) => {
    setValueDay(e.target.value);
    setErrorDay(false);
  };
  const onChangeMonth = (e) => {
    setValueMonth(e.target.value);
    setErrorMonth(false);
  };
  const onChangeYear = (e) => {
    setValueYear(e.target.value);
    setErrorYear(false);
  };

  return (
    <main className="calculator">
      <div className="calculator__container">
        <form onSubmit={onSubmit}>
          <div className="calculator__form-box">
            <div className={`form__item`}>
              <label
                className={`form__label ${errorDay ? "active-error" : ""}`}
                htmlFor="day"
              >
                DAY
              </label>
              <input
                className={`form__input ${errorDay ? "border-error" : ""}`}
                id="day"
                ref={inputDayRef}
                onChange={onChangeDay}
                type="number"
                placeholder="DD"
              />
              <div className={`form__alert ${errorDay ? "active-error" : ""}`}>
                {alertDay}
              </div>
            </div>
            <div className={`form__item`}>
              <label
                className={`form__label ${errorMonth ? "active-error" : ""}`}
                htmlFor="month"
              >
                MONTH
              </label>
              <input
                className={`form__input ${errorMonth ? "border-error" : ""}`}
                id="month"
                ref={inputMonthRef}
                onChange={onChangeMonth}
                type="number"
                placeholder="MM"
              />
              <div className={`form__alert ${errorMonth ? "active-error" : ""}`}>
                {alertMonth}
              </div>
            </div>
            <div className={`form__item`}>
              <label
                className={`form__label ${errorYear ? "active-error" : ""}`}
                htmlFor="year"
              >
                YEAR
              </label>
              <input
                className={`form__input ${errorYear ? "border-error" : ""}`}
                id="year"
                ref={inputYearRef}
                onChange={onChangeYear}
                type="number"
                placeholder="YY"
              />
              <div className={`form__alert ${errorYear ? "active-error" : ""}`}>
                {alertYear}
              </div>
            </div>
          </div>
          <div className="calculator__btn-box">
            <div className="line"></div>
            <button className="btn" type="submit">
              <img src={icon} alt="icon-button" />
            </button>
          </div>
        </form>
        <div className="calculator__display-box">
          <h1 className="display-item">
            <mark>{years ? years : "--"}</mark> years
          </h1>
          <h1 className="display-item">
            <mark>{months ? months : "--"}</mark> months
          </h1>
          <h1 className="display-item">
            <mark>{days ? days : "--"}</mark> days
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
