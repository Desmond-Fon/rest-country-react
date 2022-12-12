const DisplayDetails = ({ showDetails }) => {
  return (
    <>
      {showDetails.map((country) => (
        <div
          className="flex flex-col flex-wrap justify-center items-center"
          key={country.flags.svg}
        >
          <div className="w-4/5 bg-veryLightGrayLM  mb-9 text-left dark:text-whiteLMDM dark:bg-veryDarkBlueDM">
       <div className='w-full'>
       <img src={country.flags.svg} alt="" className="w-full h-full" />
       </div>
       <div className="pb-10 pt-7 text-left h-3/5 text-sm">
           <h2 className="text-lg font-bold pb-4">{country.name}</h2>
           <p className="font-semibold">Native Name: <span className="font-light">{country.nativeName}</span></p>
           <p className="font-semibold">Population: <span className="font-light">{country.population}</span></p>
           <p className="font-semibold">Region: <span className="font-light">{country.region}</span></p>
           <p className="font-semibold">Sub Region: <span className="font-light">{country.subregion}</span></p>
           <p className="font-semibold">Capital: <span className="font-light">{country.capital}</span></p>

           <div className="mt-5">
           <p className="font-semibold">Top Level Domain: <span className="font-light">{country.topLevelDomain}</span></p>
           <p className="font-semibold">Currencies: <span className="font-light">{country.currencies[0].name}</span></p>
           <p className="font-semibold">Languages: 
            {country.languages.map(lang => <span className="font-light"> {lang.name},</span>)}</p>
           </div>

           <div className="mt-5">
           <h2 className="text-[16px]  font-semibold">Border Countries:</h2>
           <p className="font-semibold">
           {country.borders ? country.borders.map(lang => <span className="font-light shadow-md mr-2 px-5 dark:bg-darkBlue bg-whiteLMDM">{lang} </span>): <span className="font-light">None</span>}
            </p>
            {/* <p className="font-semibold">
            <span className="font-light">{country.borders} </span>
            </p> */}
           </div>
       </div>
    </div> 
        </div>
      ))}
    </>
  );
};

export default DisplayDetails;
