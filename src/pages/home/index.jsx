import SearchBar from "./component/SearchBar";
import Select from "./component/Select";
import { useState, useEffect } from 'react';
import DisplayCountry from "./component/DisplayCountry";
import DisplaySearch from "./component/DisplaySearch";
import DisplayRegions from "./component/DisplayRegions";


const Home = () => {

    const [countries, setCountry] = useState([]);
    const [searchCountry, setSearchCountry] = useState([]);
    const [name, setName] = useState('');
    const [showCountry, setShowCountry] = useState(true);
    const [showRegion, setShowRegion] = useState(false);
    const [region, setRegion] = useState('');
    const [changeRegion, setChangeRegion] = useState([]);
    

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
        return data;
    }



    useEffect(() => {
        console.log(name);
        let userSearch = name.toLowerCase();
        console.log(name)
      fetch(`https://restcountries.com/v3.1/name/${userSearch}`)
      .then(res => {
         if(!res.ok) throw new Error(`Something went wrong, please ensure you spell the country correctly. ${res.status}`)
         return res.json()
       })
      .then(users => {
        console.log(users)
        setSearchCountry(users)
        setShowCountry(false)
        setShowRegion(false)
}
      )
   .catch(err => {console.error(err)
   })
    }, [name])


    useEffect(() => {
        console.log(region);

      fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then(res => {
         if(!res.ok) throw new Error(`Something went wrong, please ensure you spell the country correctly. ${res.status}`)
         return res.json()
       })
      .then(users => {
        console.log(users)
        setChangeRegion(users)
        setShowRegion(true)
        setShowCountry(false)
}
      )
   .catch(err => {console.error(err)
   })
    }, [region])


 

    return ( <main className="px-5 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
        <SearchBar name = {name} setName = {setName}/>
        <Select region = {region} setRegion = {setRegion}/>
        {/* <DisplayRegions changeRegion = {changeRegion}/> */}
        {showCountry ? <DisplayCountry countries = {countries}/> : showRegion ?
         <DisplayRegions changeRegion = {changeRegion}/> : <DisplaySearch searchCountry = {searchCountry} />}
        
    </main>
    
     );
}
 
export default Home;