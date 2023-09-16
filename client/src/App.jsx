import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./Landing";


import Maps from './pages/maps'
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
  
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />}/>
        <Route path="/maps" element={<Maps />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>

      </Route>
      </Routes>
   
  );
};

export default App;
