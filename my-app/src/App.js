import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header/header";
import FirstBlock from "./components/FirstBlock";


function App() {
    return (
    <div className="wrapper">
      <Header/>
      <FirstBlock/>

      
    </div>
  );
}

export default App;
