import Navbar from "./Navbar";
import Footer from "./Footer";
import Feedback from "./Feedback";
const App = () => {
  return (
    <div className="h-[1000px] relative">
      <Navbar />
      <Feedback />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
