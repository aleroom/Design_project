import Header from "./components/Header/Header";
import FirstBlock from "./components/FirstBlock";
import LogoPage from "./components/LogoPage/logoPage";
import "./index.css";
import Slider from "./components/Slider/Slider.jsx";


function App() {
    return (
    <div className="container">
      <Header/>
      <FirstBlock/>
      <LogoPage/>
      <Slider/>

    </div>
  );
}

export default App;
