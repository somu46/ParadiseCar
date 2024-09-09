import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";


const Root=()=>{

    return(
        <>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </>
    );
}


export default Root;