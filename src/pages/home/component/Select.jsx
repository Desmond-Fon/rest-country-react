const Select = ( {changeRegion, setRegion} ) => {
    return ( <select name="" className="bg-white dark:bg-darkBlue dark:text-whiteLMDM text-sm w-[150px] py-3 px-2 border-none mb-8 text-veryDarkBlueLM rounded-[4px] shadow-md outline-none" >
    <option value="">Filter by Region</option>
    <option value='africa' className="text-sm " id="africa">Africa</option>
    <option value='america' className="text-sm " id="america">America</option>
    <option value='asia' className="text-sm " id="asia">Asia</option>
    <option value='europe' className="text-sm " id="europe">Europe</option>
    <option value='oceania' className="text-sm " id="oceania">Oceania</option>
</select> );
}
 
export default Select;


// onChange={changeRegion(this)}