import { Link } from "react-router-dom";

function DisplaySearch({ searchCountry, showName }) {
  return (
    <div className="md:flex flex-wrap md:justify-center">
      {searchCountry.map((names) => (
        <div
          className="flex flex-col justify-center items-center md:w-1/4"
          key={names.flags.svg}
          data-test-id={
            names.name.common || names.name.official
          }
          onClick={showName}
        >
          <div className="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue hello">
            <Link to="/Details">
              <div className="w-full md-w-[500px]">
                <img
                  src={names.flags.svg}
                  alt=""
                  className="rounded-t-[5px] w-full h-full md:h-[120px] md:object-cover"
                />
              </div>
              <div className="pb-10 pt-7 text-left h-3/5 ml-5 md:text-sm">
                <h2 className="text-lg font-bold pb-4" onClick={showName}>
                  {names.name.common}
                </h2>
                <p className="font-semibold md:text-sm">
                  Population:{" "}
                  <span className="font-light">{names.population}</span>
                </p>
                <p className="font-semibold md:text-sm">
                  Region: <span className="font-light">{names.region}</span>
                </p>
                <p className="font-semibold md:text-sm">
                  Capital: <span className="font-light">{names.capital}</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplaySearch;
