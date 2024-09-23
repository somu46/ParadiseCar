import Home from "./Home/Home";
import ContactUs from "./Contact/contactUs";
import AboutUs from "./About/AbouUs";
import Error from "./Error/Error";
import BookNow from "./BookNow/BookNow";
import ErrorBoundary from "./Error/ErrorBondary/ErrorBoundray.js"


function About() {
    return (

      <ErrorBoundary>
        <AboutUs />
      </ErrorBoundary>
      
    );
  }
  
  export default About;



export { Home,ContactUs,About,BookNow, Error };