import "./App.css";
import { useState, useEffect } from "react";
import Header from "./component/header";
import Home from "./pages/home";
import Details from "./pages/details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setMode("Light Mode")
    } else {
      document.documentElement.classList.remove("dark");
      setMode("Dark Mode")
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [mode, setMode] = useState("Dark Mode")
  const [countries, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const [name, setName] = useState("");
  const [showCountry, setShowCountry] = useState(true);
  const [showRegion, setShowRegion] = useState(false);
  const [region, setRegion] = useState("");
  const [changeRegion, setChangeRegion] = useState([]);
  const [details, setDetails] = useState("");
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        // console.log(users)
        setCountry(users);
      });
  }, []);

  useEffect(() => {
    // console.log(name);
    let userSearch = name.toLowerCase();
    // console.log(name)
    fetch(`https://restcountries.com/v3.1/name/${userSearch}`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            `Something went wrong, please ensure you spell the country correctly. ${res.status}`
          );
        return res.json();
      })
      .then((users) => {
        // console.log(users)
        setSearchCountry(users);
        setShowCountry(false);
        setShowRegion(false);
      });
    //  .catch(err => {console.error(err)
    //  })
  }, [name]);

  useEffect(() => {
    // console.log(region);

    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Something went wrong. ${res.status}`);
        return res.json();
      })
      .then((users) => {
        // console.log(users)
        setChangeRegion(users);
        setShowRegion(true);
        setShowCountry(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [region]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${details}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Something went wrong. ${res.status}`);
        return res.json();
      })
      .then((users) => {
        setShowDetails(users);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [details]);

  const showName = (e) => {
    let el = e.currentTarget.dataset.testId;
    setDetails(el);
    console.log(e.currentTarget.dataset);
    console.log(el);
  };

  return (
    <div className="font-nunito h-screen bg-veryLightGrayLM dark:bg-veryDarkBlueDM">
      <Header onSwitch={handleThemeSwitch} mode={mode}/>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                region={region}
                setRegion={setRegion}
                countries={countries}
                showName={showName}
                changeRegion={changeRegion}
                searchCountry={searchCountry}
                showCountry={showCountry}
                showRegion={showRegion}
              />
            }
          />

          <Route
            path="/details"
            element={<Details showDetails={showDetails} details={details} />}
          />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
