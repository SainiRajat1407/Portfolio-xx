import './App.scss';
import Index from '../src/component/index'
import React, { useEffect, useState } from "react";
import LoadingScreen from './component/loadingScreen/loadingScreen.component';

function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  , []);
  return (
    <div className="App">
      {isloading  ?(<LoadingScreen />) : <Index />}
      
    </div>
  );
}

export default App;
