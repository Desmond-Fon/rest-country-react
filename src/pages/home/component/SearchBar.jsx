// import { useState } from 'react';

const SearchBar = ({ name, setName }) => {
  return (
    <div className="mb-10 md:w-1/2">
      <form>
        <input
          type="search"
          name="search"
          placeholder="Search for a country..."
          className="text-sm p-4 rounded-[5px] shadow-md  w-full pl-8 dark:bg-darkBlue dark:text-whiteLMDM outline-none"
          value={name}
          onChange={(userSearch) => setName(userSearch.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
