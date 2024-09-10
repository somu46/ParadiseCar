import './App.css';
import BookNowCom from './Components/BookNowCom.js/BookNowCom';
// import BookNowButton from './Components/Button/Button';
import { Home } from './Pages';
// import Navbar from './Components/Navbar/Navbar';

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
