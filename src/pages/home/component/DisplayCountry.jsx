import { Link } from "react-router-dom";

function DisplayCountry({ countries, showName }) {
  return (
    <>
      {countries.map((country) => (
        <div
          className="flex flex-col justify-center items-center"
          key={country.flags.svg}
        >
          <div className="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue hello">
            <div className="w-full">
              <img
                src={country.flags.svg}
                alt=""
                className="rounded-t-[5px] w-full h-full"
              />
            </div>
            <div className="pb-10 pt-7 text-left h-3/5 ml-5">
              <Link to="/Details">
                <h2 className="text-lg font-bold pb-4" onClick={showName}>
                  {country.name.common}
                </h2>
              </Link>
              <p className="font-semibold">
                Population:{" "}
                <span className="font-light">{country.population}</span>
              </p>
              <p className="font-semibold">
                Region: <span className="font-light">{country.region}</span>
              </p>
              <p className="font-semibold">
                Capital: <span className="font-light">{country.capital}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayCountry;
