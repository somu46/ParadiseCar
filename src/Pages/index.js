import Home from "./Home/Home";
import ContactUs from "./Contact/contactUs";
import AboutUs from "./About/AbouUs";
import Error from "./Error/Error";
import BookNows from "./BookNow/BookNow";
import Cars from "./Cars/car";
import Pricing from "./Pricing/Pricing";
import Faq from "./Faqs/Faq";
import ErrorBoundary from "./Error/ErrorBondary/ErrorBoundray.js"


function BookNow() {
    return (

      <ErrorBoundary>
        <BookNows />
      </ErrorBoundary>
      
    );
  }
  
function About() {
    return (

      <ErrorBoundary>
        <AboutUs />
      </ErrorBoundary>
      
    );
  }
  
  export default About;



export { Home,ContactUs,About,BookNow, Error ,Pricing , Cars, Faq };