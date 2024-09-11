import './App.css';
import {Home} from './Pages/index'
import BookNowCom from './Components/BookNowComponent/BookNowCom'
function App() {
  return (
    <div className="App flex flex-col justify-center p-3">
      <Home/>
     <BookNowCom/>
    </div>
  );
}

export default App;
