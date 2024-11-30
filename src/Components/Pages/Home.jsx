<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import Banner from "./Banner";





const Home = () => {


    return (
        <div className="w-full v-screen">
         <Banner></Banner>
         

         <div className="dropdown dropdown-hover p-3 text-center">
  <div  tabIndex={0} role="button" className="btn m-1 bg-purple-400 ">Get Started</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <NavLink to='/teacher_login'><li><a>Login </a></li></NavLink>
    
  </ul>
</div>




</div>
    );
};

=======
import { NavLink } from "react-router-dom";
import Banner from "./Banner";




const Home = () => {


    return (
        <div className="w-full v-screen">
         <Banner></Banner>
         <div className="dropdown dropdown-hover p-3 text-center">
  <div  tabIndex={0} role="button" className="btn m-1 bg-purple-400 ">Get Started</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <NavLink to='/teacher_login'><li><a>Login </a></li></NavLink>
    
  </ul>
</div>
        </div>
    );
};

>>>>>>> d80cf9b5659a0179fa76a9dda2cfa2870e11ff13
export default Home;