import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import {Home} from './Pages/index'
import BookNowCom from './Components/BookNowCom.js/BookNowCom'
function App() {
  return (
    <div className="App flex flex-col justify-center p-3">
      <Home/>
     {/* <BookNowButton/> */}
     <BookNowCom/>
    </div>
  );
}

export default App;
