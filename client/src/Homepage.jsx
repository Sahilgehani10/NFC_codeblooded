import "./Homepage.css";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const nav = useNavigate();
  return (
    <div className="container">
      <div className="split-left hover-left">
        <h1 className="heading">OFFER RIDE</h1>
        <button className="btn" onClick={() => nav("/maps")}>
          Look for bookings
        </button>
      </div>
      <div className="split-right hover-right">
        <h1 className="heading">FIND RIDE</h1>
        <button className="btn" onClick={() => nav("/maps")}>
          Book Now
        </button>
      </div>
    </div>
  );
}
