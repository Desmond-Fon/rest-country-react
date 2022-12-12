import SearchBar from "./component/SearchBar";
import Select from "./component/Select";
import DisplayCountry from "./component/DisplayCountry";
import DisplaySearch from "./component/DisplaySearch";
import DisplayRegions from "./component/DisplayRegions";

const Home = ({
  name,
  setName,
  region,
  setRegion,
  showCountry,
  countries,
  showName,
  showRegion,
  changeRegion,
  searchCountry,
}) => {
  return (
    <main className="px-5 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
      <SearchBar name={name} setName={setName} />
      <Select region={region} setRegion={setRegion} />
      {showCountry ? (
        <DisplayCountry countries={countries} showName={showName} />
      ) : showRegion ? (
        <DisplayRegions changeRegion={changeRegion} showName={showName} />
      ) : (
        <DisplaySearch searchCountry={searchCountry} showName={showName} />
      )}
    </main>
  );
};

export default Home;
