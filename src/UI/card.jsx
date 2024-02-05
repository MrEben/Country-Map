/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types, no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CountriesCards = ({ data }) => {
  return (
    <>
      <div className="countries projcard-container">
        {data.map((item, index) => {
          const {
            name,
            capital,
            currencies,
            flags,
            languages,
            population,
            region,
            area,
            startOfWeek,
            timezones,
          } = item;

          return (
            <div className="projcard projcard-red" key={index}>
              <Link to={`/countries/${name.common}`}>
                <div className="projcard-innerbox">
                  <img
                    className="projcard-img"
                    src={flags.png}
                    alt={`${name.common} flag`}
                  />
                  <div className="projcard-textbox">
                    <div className="projcard-title">{name.common}</div>
                    <div className="projcard-subtitle">
                      Capital:{capital ? capital[0] : ""}
                    </div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">
                      <span>
                        {languages ? Object.keys(languages).length : ""}{" "}
                      </span>
                      languages,
                      <span>{population}</span> people,
                      <span>{Object.keys(region).length} </span> regions,
                      <span>{area} </span>square kilometers,
                      <span>{currencies ? currencies[0]?.name : ""} </span>{" "}
                      currency Start of week is <span>{startOfWeek} </span>,
                      timeszone is <span>{timezones}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CountriesCards;
