<<<<<<< HEAD
import { useLoaderData } from "react-router-dom";
import ProfileCard from "../Teacher/ProfileCard";


const Teachers_info = () => {

  const profiles=useLoaderData();
  const handleSearch=()=>{
    console.log('clicked')

  }



    return (
        <div>


<div className="m-4  ml-4 p-4 ">
          
         <div className="p-4 m-4 flex">
         <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
         <button onClick={ handleSearch} className="btn btn-active ml-4">Search</button>
         </div>
         <div className="grid md:grid-cols-3 gap-4 ">
         {
            profiles.map(profile=><ProfileCard key={profile._id} profile={profile}></ProfileCard>)
         } 
         </div>
        </div>


        </div>
    );
};

=======


const Teachers_info = () => {
    return (
        <div>
         <h1>Teachers info</h1>   
        </div>
    );
};

>>>>>>> d80cf9b5659a0179fa76a9dda2cfa2870e11ff13
export default Teachers_info;