import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import MainCarousel from "./Customer/Components/HomeCarousel/MainCarousel";
import Homepage from "./Customer/Pages/Homepage/Homepage";
import Footer from "./Customer/Components/Footer/Footer";


function App() {
  return (
    <div className="">
      <Navigation />
     
      <div>
      <Homepage />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
