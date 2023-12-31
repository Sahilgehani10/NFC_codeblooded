import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";


export default function Layout(){
    return(
        <div className="flex flex-col">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}