import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Maps from "./pages/maps";

const App = () => {
  return (
    <Routes>
      <Route path="/maps" element={<Maps />} />
    </Routes>
  );
};

export default App;
