import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useStore from "../Store/store";


const Root=()=>{
  const [isDarkMode, setIsDarkMode] = useState(false);

const {setDarkMode}=useStore();

  // Toggle dark mode
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Add/remove dark mode class on body
  };
  useEffect(()=>{
    setDarkMode(isDarkMode);
  },[isDarkMode])

    return(
        <>
         <Navbar isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
          <Outlet/>
          <Footer isDarkMode={isDarkMode} />
        </>
    );
}


export default Root;