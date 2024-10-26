import Home from "./Home/Home";
import ContactUs from "./Contact/contactUs";
import AboutUs from "./About/AbouUs";
import Error from "./Error/Error";

import Cars from "./Cars/car";
import Pricing from "./Pricing/Pricing";
import Faq from "./Faqs/Faq";
import Services from "./Services/Services";
import ErrorBoundary from "./Error/ErrorBondary/ErrorBoundray.js"




function About() {
    return (

      <ErrorBoundary>
        <AboutUs />
      </ErrorBoundary>
      
    );
  }
  
  export default About;



export { Home,ContactUs,About, Error ,Pricing , Cars, Faq, Services  };