/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { countries } from "../data/datas";
import "../pages/countries/countries.css";
import { AiOutlineSearch } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import CountriesCard from "./card";
import Img from "../assets/pexels-cup-of-couple-8473123.jpg";

const Countries = () => {
  // const [countries, setCountries] = useState([]);
  const [data, setData] = useState(countries);
  const continents = [
    { name: "World", code: "all" },
    { name: "Africa", code: "africa" },
    { name: "Asia", code: "asia" },
    { name: "Europe", code: "europe" },
    { name: "Americas", code: "americas" },
    { name: "Oceania", code: "oceania" },
  ];

  // useEffect(() => {
  //   axios
  //     .get(`https://restcountries.com/v3.1/all`)
  //     .then((response) => {
  //       setCountries(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  const [activeBtn, setActiveBtn] = useState("all");
  const handleClick = (e) => {
    const category = e.currentTarget.dataset.gh;
    setActiveBtn(category);
    const filteredCountries = countries.filter(function (item) {
      if (item.continent === category) {
        // get the method of identifying the countries from the rest countries api
        return item;
      }
    });
    if (category === "all") {
      setData(countries);
    } else {
      setData(filteredCountries);
    }
  };

  // search feature
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchWord, setSearchWord] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchCountry = (e) => {
    setSearchWord(e.target.value);
    let filtered = countries.filter((item) =>
      item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFilteredCountries(filtered);
    setIsOpen(true);
    if (e.target.value === "") {
      setIsOpen(false);
    }
  };
  const selectedCountry = (selected) => {
    let filtered = countries.filter((country) => country.name === selected);
    setData(filtered);
  };
  const updateName = (selected) => {
    // console.log(selected);
    setSearchWord("");
    setIsOpen(false);
    selectedCountry(selected);
  };

  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);
  const handleModal = (e) => {
    setModal(true);
    setUser(e.target);
  };

  const closeModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <header>
        <div className="filter-options">
          <div className="search">
            <form action="">
              <div>
                <AiOutlineSearch />
                <input
                  placeholder="Search country"
                  type="text"
                  spellCheck={false}
                  onChange={searchCountry}
                  value={searchWord}
                />
                <button className="btn">search</button>
              </div>
              <ul className="show-countries">
                {isOpen
                  ? filteredCountries.map((item, index) => {
                      const { name } = item;
                      return (
                        <li onClick={() => updateName(name)} key={index}>
                          <h4>{name}</h4>
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </form>
          </div>

          <div className="buttons">
            {continents.map((item, index) => {
              const { code } = item;
              return (
                <button
                  key={index}
                  onClick={handleClick}
                  className={activeBtn === code ? "active btn bn " : "btn bn"}
                  // className="btn bn"
                  data-gh={code}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div className="countries projcard-container cards">
        {data.map((item, index) => {
          const { name, capital, flag } = item;
          // const { name, capital, flags, languages, population, region, area } = item;
          return (
            <div
              className=" projcard projcard-red"
              key={index}
              onClick={handleModal}
            >
              <div className="projcard-innerbox ">
                <img className="projcard-img" src={flag} alt={`${name} flag`} />
                {/* to use */}
                {/* <img
                    className="projcard-img"
                    src={flags.png}
                    alt={`${name.common} flag`}
                  /> */}
                <div className="projcard-textbox">
                  <div className="projcard-title">{name}</div>
                  {/* <div className="projcard-title">{name.common}</div> */}
                  <div className="projcard-subtitle">Capital: {capital}</div>
                  {/* <div className="projcard-subtitle">
                      Capital: {capital[0]}
                    </div> */}
                  <div className="projcard-bar"></div>
                  <div className="projcard-description">
                    <span>4</span> languages. <span>3278279</span> people.{" "}
                    <span>34</span> regions. Area of
                    <span> 6698785869</span>m/2 amet, consectetur adipiscing
                    elit
                  </div>
                  {/* To use this rather */}
                  {/* <div className="projcard-description">
                      <span>
                        {languages ? Object.keys(languages).length : 0}
                      </span>{" "}
                      languages. <span>{population}</span> people.{" "}
                      <span>{Object.keys(region).length}</span> regions. Area of
                      <span> {area}</span>m/2 amet, consectetur adipiscing elit
                    </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {modal ? (
        <div className="modal">
          <div className="close-icon" onClick={closeModal}>
            <GrClose />
          </div>
          <div className="more-details">
            <div className="flag">
              <img src={Img} alt="" />
            </div>
            <div className="description">{user}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Countries;
