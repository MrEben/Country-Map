/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const CountriesCard = ({ data }) => {
  return (
    <>
      <div className="countries projcard-container cards">
        {data.map((item, index) => {
          // const { name, capital, flag } = item;
          const { name, capital, flags, languages, population, region, area } = item;
          return (
            <div className=" projcard projcard-red" key={index}>
              <div className="projcard-innerbox ">
                {/* <img className="projcard-img" src={flag} alt={`${name} flag`} /> */}
                {/* to use */}
                <img
                    className="projcard-img"
                    src={flags.png}
                    alt={`${name.common} flag`}
                  />
                <div className="projcard-textbox">
                  {/* <div className="projcard-title">{name}</div> */}
                  <div className="projcard-title">{name.common}</div>
                  {/* <div className="projcard-subtitle">Capital: {capital}</div> */}
                  <div className="projcard-subtitle">
                      Capital: {capital[0]}
                    </div>
                  <div className="projcard-bar"></div>
                  {/* <div className="projcard-description">
                    <span>4</span> languages. <span>3278279</span> people.{" "}
                    <span>34</span> regions. Area of
                    <span> 6698785869</span>m/2 amet, consectetur adipiscing
                    elit
                  </div> */}
                  {/* To use this rather */}
                  <div className="projcard-description">
                      <span>
                        {languages ? Object.keys(languages).length : 0}
                      </span>{" "}
                      languages. <span>{population}</span> people.{" "}
                      <span>{Object.keys(region).length}</span> regions. Area of
                      <span> {area}</span>m/2 amet, consectetur adipiscing elit
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CountriesCard;
