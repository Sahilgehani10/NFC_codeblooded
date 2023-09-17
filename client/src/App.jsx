import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./Landing";
import Maps from './pages/Maps'
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./Homepage";
import Features from "./Features";

const App = () => {
  return (
    <Routes>
  
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />}/>
        <Route path="/features" element={<Features />} />
        <Route path="/maps" element={<Maps />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Route>
      <Route path="/homepage" element={<Homepage />}/>
      </Routes>
   
  );
};

export default App;
