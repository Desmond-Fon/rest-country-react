import './App.css';
import { useState, useEffect } from 'react';
import Header from './component/header';
import Home from './pages/home';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(()=> {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);


  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }


  return (
    <div className="font-nunito h-screen bg-veryLightGrayLM dark:bg-veryDarkBlueDM">
      <Header onSwitch = {handleThemeSwitch} />
      <Home />
    </div>
  );
}

export default App;
