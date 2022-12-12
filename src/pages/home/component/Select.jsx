const Select = ({ region, setRegion }) => {
  return (
    <select
      className="bg-white dark:bg-darkBlue dark:text-whiteLMDM text-sm w-[150px] py-3 px-2 border-none mb-8 text-veryDarkBlueLM rounded-[4px] shadow-md outline-none"
      value={region}
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="africa" className="text-sm ">
        Africa
      </option>
      <option value="america" className="text-sm ">
        America
      </option>
      <option value="asia" className="text-sm ">
        Asia
      </option>
      <option value="europe" className="text-sm ">
        Europe
      </option>
      <option value="oceania" className="text-sm ">
        Oceania
      </option>
    </select>
  );
};

export default Select;
