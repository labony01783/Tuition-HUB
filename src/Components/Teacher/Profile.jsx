<<<<<<< HEAD
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/src/sweetalert2.js'
const Profile = () => {
  const profile = useLoaderData();

  if (!profile) {
    return <div>No profile data found.</div>;  // Handle case where no data is returned
  }

  const { _id, fullName, institution, age, phone, email, subjects, availabilityDays, profileImage } = profile;
 
  return (
    <div className="card align-text-bottom mx-4 my-10 mt-6 mb-10 w-96 text-center  glass w-3/8">
    <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car!" />
        </figure>
   

        <div className="card-body ali font-semibold text-justify">
        <h1><span className="font-black">Name:            </span>  {fullName}</h1>
        <h1><span className="font-black">Age:             </span>  {age}</h1>
        <h1><span className="font-black">Institution:     </span>  {institution}</h1>
        <h1><span className="font-black">Phone:           </span>   {phone}</h1>
        <h1><span className="font-black">Email:           </span>      {email}</h1>
        <h1><span className="font-black">Subjects:        </span>{subjects}</h1>
        <h1><span className="font-black">AvailabilityDays:</span>{availabilityDays}</h1>

         <div className="flex">
        <Link to={`UpdateProfile/${_id}`}>
         <button 
          className="btn btn-secondary">Edit</button>
        </Link>
         </div>
          
        </div>
      </div>
  );
};

export default Profile;
=======


const Profile = () => {
    return (
        <div>
          <h1>Your Profile !</h1>  
        </div>
    );
};

export default Profile;
>>>>>>> d80cf9b5659a0179fa76a9dda2cfa2870e11ff13
