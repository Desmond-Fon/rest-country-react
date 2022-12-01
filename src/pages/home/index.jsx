import SearchBar from "./component/SearchBar";
import Select from "./component/Select";
import { useState, useEffect } from 'react';
import DisplayCountry from "./component/DisplayCountry";
// import DisplayRegions from "./component/DisplayRegions";

const Home = () => {

    const [countries, setCountry] = useState([]);
    const [name, setName] = useState(' ');
    // const [region, setRegion] = useState('afica');
    

    useEffect(() => {
        const getCountry = async() => {
            const countriesFromServer = await fetchCountry()
            setCountry(countriesFromServer)
        }

        getCountry();
    }, [])

    const fetchCountry = async () => {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        // console.log(data);
        return data;
    }

    // useEffect (() => {
    //     setName()
      
    // }, [])


    // function changeRegion (y) {

    //     fetch(`https://restcountries.com/v3.1/region/${y.region}`)
    //     .then(res => {
    //        if(!res.ok) throw new Error(`Something went wrong. ${res.status} ${res.statusText}`)
    //        return res.json()
    //      })
    //     .then(users => {
    //         console.log(users)
    //         return users;
    //  })
    //  .catch(err => {console.error(err)})
    //  };

    const searchName = () => {
        // console.log(name);
        let userSearch = name.toLowerCase();
        console.log(name)
      fetch(`https://restcountries.com/v3.1/name/${userSearch}`)
      .then(res => {
         if(!res.ok) throw new Error(`Something went wrong, please ensure you spell the country correctly. ${res.status}`)
         return res.json()
       })
      .then(users => {console.log(users)
      return users}
      )
   .catch(err => {console.error(err)
   })
    }
    

    

    return ( <main className="px-5 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
        <SearchBar name = {name} searchName = {searchName} setName = {setName} />
        <Select />
        <DisplayCountry countries = {countries}/>
        {/* <DisplayRegions name = {name}/> */}
    </main>
    
     );
}
 
export default Home;