import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import Swal from 'sweetalert2'

const Teacher_login = () => {
  const {createUser,user}=useContext(AuthContext);

  const { signIn } = useContext(AuthContext); 
   // Access signIn from AuthContext
   const navigate = useNavigate();


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)  // Call signIn from AuthContext
      .then(result => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        navigate('/profile');
        
  
      }).catch(error => {
        Swal.fire({
         title: 'Not Valid',
          text: 'You have to register first !',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
      
  });
};

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log in now!</h1>
          <p className="py-6 text-xl">
            We value your skills. Log in to begin your journey as a tutor.
          </p>
          <div className="mt-2 text-center">
            <Link to='/'>
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </div>
        </div>
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email" 
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            
              
             <input
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
             
            </div>
          </form>
          <p className="text-center mb-4">
            New to TuitionHub? 
            <Link to="/signUpTeacher" className="text-orange-600 font-bold">
              Register
            </Link>
          </p>
          
        </div>
      </div>
      
       
    </div>
  );
};

export default Teacher_login;
