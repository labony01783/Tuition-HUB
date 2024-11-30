<<<<<<< HEAD
import { Outlet } from "react-router-dom";

import Header from "../Pages/Header";
import Footer from "../Pages/Footer";


const Roots = () => {
    return (
        <div className="max-auto">
            <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

=======
import { Outlet } from "react-router-dom";

import Header from "../Pages/Header";
import Footer from "../Pages/Footer";


const Roots = () => {
    return (
        <div className="max-auto">
            <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

>>>>>>> d80cf9b5659a0179fa76a9dda2cfa2870e11ff13
export default Roots;