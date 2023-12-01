import './App.scss';
import Index from '../src/component/index'
import React, { useEffect, useState } from "react";
import LoadingScreen from './component/loadingScreen/loadingScreen.component';


function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  }
  , []);
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
