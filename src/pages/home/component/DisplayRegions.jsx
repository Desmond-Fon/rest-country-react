import { Link } from "react-router-dom";

function DisplayRegions({ changeRegion, showName }) {
  return (
    <div className="md:flex flex-wrap md:justify-between">
      {changeRegion.map((names) => (
        <div
          className="flex flex-col justify-center items-center md:w-1/4 "
          key={names.flags.svg}
        >
          <div className="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
            <div className="w-full md-w-[500px]">
              <img
                src={names.flags.svg}
                alt=""
                className="rounded-t-[5px] w-full h-full md:h-[120px] md:object-cover"
              />
            </div>
            <div className="pb-10 pt-7 text-left h-3/5 ml-5">
              <Link to="/Details">
                <h2 className="text-lg font-bold pb-4 md:text-sm" onClick={showName}>
                  {names.name.common}
                </h2>
              </Link>
              <p className="font-semibold md:text-xs">
                Population:{" "}
                <span className="font-light">{names.population}</span>
              </p>
              <p className="font-semibold md:text-xs">
                Region: <span className="font-light">{names.region}</span>
              </p>
              <p className="font-semibold md:text-xs">
                Capital: <span className="font-light">{names.capital}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayRegions;
