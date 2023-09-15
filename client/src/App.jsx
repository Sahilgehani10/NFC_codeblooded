import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./Landing";

import Maps from './pages/maps'

const App = () => {
  return (
    <div className="bg-[#0d1117]">
      <Landing />
    </div>
  );
};

export default App;
