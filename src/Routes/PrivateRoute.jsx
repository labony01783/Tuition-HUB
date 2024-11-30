<<<<<<< HEAD
import { useContext } from "react";
import { AuthContext } from "../Components/Pages/Authentication/Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
  
    if(user){
        return children;
    }

    return <Navigate to='/teacher_login'></Navigate>
        
    
};


export default PrivateRoute;
=======
import { useContext } from "react";
import { AuthContext } from "../Components/Pages/Authentication/Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
  
    if(user){
        return children;
    }

    return <Navigate to='/teacher_login'></Navigate>
        
    
};


export default PrivateRoute;
>>>>>>> d80cf9b5659a0179fa76a9dda2cfa2870e11ff13
