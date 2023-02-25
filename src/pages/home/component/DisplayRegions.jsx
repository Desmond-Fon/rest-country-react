import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState } from "react";

function DisplayRegion({ changeRegion, showName }) {
  const PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(changeRegion.length / PER_PAGE);

  return (
    <div className="md:flex flex-wrap md:justify-center">
      {changeRegion.slice(offset, offset + PER_PAGE).map((country) => (
        <div
          className="flex flex-col justify-between items-center md:w-1/4 "
          key={country.flags.svg}
          data-test-id={country.name.common || country.name.official}
          onClick={showName}
        >
          <div className="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue hello">
            <Link to="/Details">
              <div className="w-full md-w-[500px]">
                <img
                  src={country.flags.svg}
                  alt=""
                  className="rounded-t-[5px] w-full h-full md:h-[120px] md:object-cover"
                />
              </div>
              <div className="pb-10 pt-7 text-left h-3/5 ml-5">
                <h2
                  className="text-lg font-bold pb-4 md:text-sm"
                  onClick={showName}
                >
                  {country.name.common}
                </h2>
                <p className="font-semibold md:text-xs">
                  Population:{" "}
                  <span className="font-light">{country.population}</span>
                </p>
                <p className="font-semibold md:text-xs">
                  Region: <span className="font-light">{country.region}</span>
                </p>
                <p className="font-semibold md:text-xs">
                  Capital: <span className="font-light">{country.capital}</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}

      <ReactPaginate
        previousLabel={"<- prev"}
        nextLabel={"next ->"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={"pagination_link--disabled"}
        activeClassName={"pagination_link--active"}
      />
    </div>
  );
}

export default DisplayRegion;
