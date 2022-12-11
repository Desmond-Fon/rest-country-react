import SearchBar from "./component/SearchBar";
import Select from "./component/Select";
import { useState, useEffect } from 'react';
import DisplayCountry from "./component/DisplayCountry";
import DisplaySearch from "./component/DisplaySearch";
// import DisplayRegions from "./component/DisplayRegions";


const Home = () => {

    const [countries, setCountry] = useState([]);
    const [searchCountry, setSearchCountry] = useState([]);
    const [name, setName] = useState('');
    const [showCountry, setShowCountry] = useState(true);
    const [keypressName, setKeypressName] = useState('');
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
}
      )
   .catch(err => {console.error(err)
   })
    }, [name])
 

    return ( <main className="px-5 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
        <SearchBar name = {name} setName = {setName}/>
        <Select />
        {showCountry ? <DisplayCountry countries = {countries}/> :
        <DisplaySearch searchCountry = {searchCountry}/>}
        {/* <DisplayRegions name = {name}/> */}
    </main>
    
     );
}
 
export default Home;