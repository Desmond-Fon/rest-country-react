// import { useState } from 'react';

const SearchBar = ({name, searchName, setName}) => {

   

    return ( <div className="mb-10">
   <form action=""  >
   <input type="search" name="search" placeholder="Search for a country..." className="text-sm p-4 rounded-[5px] shadow-md  w-full pl-8 dark:bg-darkBlue dark:text-whiteLMDM outline-none" value={name}  onChange={(e) => setName(e.target.value)} onKeyPress={searchName}/>
   </form>
</div> );
}
 
export default SearchBar;
