/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
// import { countries } from "../../data/datas";
import "./countries.css";
import { AiOutlineSearch, AiOutlineLoading } from "react-icons/ai";
import CountriesCard from "../../UI/card";

const preLoader = () => {
  return (
    <>
      <h3>loading</h3>
      <AiOutlineLoading />
    </>
  );
};

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);
  const [activeBtn, setActiveBtn] = useState("all");

  const handleClick = (e) => {
    const category = e.currentTarget.dataset.gh;
    setActiveBtn(category);
    const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
    if (category === "all") {
      setData(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.region.includes(capitalize(category))
      );
      setData(filtered);
    }
  };

  // set countries response to a new variable
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(countries);
  }, [countries]);
  console.log();

  const continents = [
    { name: "World", code: "all" },
    { name: "Africa", code: "africa" },
    { name: "Asia", code: "asia" },
    { name: "Europe", code: "europe" },
    { name: "Americas", code: "americas" },
    { name: "Oceania", code: "oceania" },
  ];

  // search feature
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchWord.toLowerCase())
    );
    setData(filtered);
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
                  onChange={handleChange}
                  value={searchWord}
                />
                <button className="btn">search</button>
              </div>
              <ul className="show-countries">
                {isOpen
                  ? filteredCountries.map((item, index) => {
                      const { name } = item;
                      return (
                        <li
                          // onClick={() => updateName(name)}
                          key={index}
                        >
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
                  className={activeBtn === code ? "active btn bn " : "btn bn"}
                  onClick={handleClick}
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
          <AiOutlineLoading className="rotate-icon" />
        </div>
      ) : (
        <CountriesCard data={data} />
      )}
    </>
  );
};

export default Countries;
