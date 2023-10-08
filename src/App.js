import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation';
import MainCarousel from './Customer/Components/HomeCarousel/MainCarousel';
import Homepage from './Customer/Pages/Homepage/Homepage';


function App() {
  return (
    <div className="">
      <Navigation/>
      <Homepage/>
      <div>
        Hello
      </div>
    </div>
  );
}

export default App;
