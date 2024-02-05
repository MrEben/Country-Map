// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./countries.css";
import { AiOutlineSearch, AiOutlineLoading } from "react-icons/ai";
import CountriesCards from "../../UI/card";
// import { allcountries } from "../../data/datas";

const Countries = () => {
  const continents = [
    {
      name: "World",
      code: "all",
    },
    {
      name: "Africa",
      code: "africa",
    },
    {
      name: "Asia",
      code: "asia",
    },
    {
      name: "Europe",
      code: "europe",
    },
    {
      name: "Americas",
      code: "americas",
    },
    {
      name: "Oceania",
      code: "oceania",
    },
  ];
  const [countries, setCountries] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // eslint-disable-next-line no-unused-vars

  const searchCountry = (e) => {
    setSearchWord(e.target.value);
    const filteredData = countries.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .startsWith(searchWord.toLowerCase()) ||
        country.name.official.toLowerCase().includes(searchWord.toLowerCase())
    );
    setData(filteredData);
  };

  const [activeBtn, setActiveBtn] = useState("all");
  const handleClick = (e) => {
    const category = e.currentTarget.dataset.gh;
    const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
    setActiveBtn(category);
    if (category === "all") {
      setData(countries);
    } else {
      const filteredData = countries.filter((country) =>
        country.region.includes(capitalize(category))
      );
      setData(filteredData);
    }
  };

  // Assign countries data to a new variable
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(countries);
  }, [countries]);

  return (
    <>
      <header>
        <div className="filter-options center">
          <div className="search">
            <form action="">
              <div className="center">
                <AiOutlineSearch />
                <input
                  type="text"
                  placeholder="search country"
                  spellCheck={false}
                  onChange={searchCountry}
                  value={searchWord}
                />
                <button className="btn">search</button>
              </div>
            </form>
          </div>

          <div className="buttons center">
            {continents.map((item, index) => {
              const { code } = item;
              return (
                <button
                  key={index}
                  onClick={handleClick}
                  className={activeBtn === code ? "active btn bn" : "btn bn"}
                  data-gh={code}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {loading ? (
        <div style={{ textAlign: "center" }}>
          <h3>loading data</h3>
          <AiOutlineLoading />
        </div>
      ) : (
        <CountriesCards data={data} />
      )}
    </>
  );
};

export default Countries;
