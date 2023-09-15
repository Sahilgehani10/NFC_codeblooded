import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="h-[1000px] relative">
      <Navbar />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
