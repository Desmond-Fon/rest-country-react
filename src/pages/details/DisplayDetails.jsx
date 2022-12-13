const DisplayDetails = ({ showDetails }) => {
  return (
    <div>
      {showDetails.map((country) => (
        <div
          className="flex flex-col flex-wrap"
          key={country.flags.svg}
        >
          <div className="w-4/5 bg-veryLightGrayLM mb-9 text-left dark:text-whiteLMDM dark:bg-veryDarkBlueDM md:flex md:justify-between md:items-center md:w-full md:text-center">
       <div className='w-full md:w-1/2 md:h-1/2 md:flex md:justify-center md:items-center md:mr-10'>
       <img src={country.flags.svg} alt="" className="rounded-t-[5px] w-full h-full md:rounded-none md:object-cover" />
       </div>
       <div className="pb-10 pt-7 text-left h-3/5 text-sm">
          <div className=" md:flex md:flex-row md:justify-between">
          <div>
          <h2 className="text-lg font-bold pb-4 md:pb-10">{country.name}</h2>
           <p className="font-semibold md:pb-3">Native Name: <span className="font-light">{country.nativeName}</span></p>
           <p className="font-semibold md:pb-3">Population: <span className="font-light">{country.population}</span></p>
           <p className="font-semibold md:pb-3">Region: <span className="font-light">{country.region}</span></p>
           <p className="font-semibold md:pb-3">Sub Region: <span className="font-light">{country.subregion}</span></p>
           <p className="font-semibold md:pb-3">Capital: <span className="font-light">{country.capital}</span></p>
          </div>

           <div className="mt-5 md:mt-16">
           <p className="font-semibold md:pb-3">Top Level Domain: <span className="font-light">{country.topLevelDomain}</span></p>
           <p className="font-semibold md:pb-3">Currencies: <span className="font-light">{country.currencies[0].name}</span></p>
           <p className="font-semibold md:pb-3">Languages: 
            {country.languages.map(lang => <span className="font-light"> {lang.name},</span>)}</p>
           </div>
          </div>

           <div className="mt-5 md:mt-14">
           <h2 className="text-[16px]  font-semibold">Border Countries:</h2>
           <p className="font-semibold">
           {country.borders ? country.borders.map(lang => <span className="font-light shadow-md mr-2 px-5 dark:bg-darkBlue bg-whiteLMDM">{lang} </span>): <span className="font-light">None</span>}
            </p>
            
           </div>
       </div>
    </div> 
        </div>
      ))}
    </div>
  );
};

export default DisplayDetails;
