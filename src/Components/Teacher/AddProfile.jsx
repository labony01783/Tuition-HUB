
import Swal from 'sweetalert2'
//import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Pages/Authentication/Providers/AuthProvider";

import React, { useContext } from 'react';

const AddProfile = (e) => {
  const { user } = useContext(AuthContext); 
  console.log(user);



 
    const handleSubmit = (e) => {
     
        e.preventDefault();
        console.log()
        const form = e.target;
        const fullName = form.fullName.value;
        const age = form.age.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const subjects = form.subjects.value;
        const availabilityDays = form.availabilityDays.value;
        const profileImage = form.profileImage.files[0];
         const institution =form.institution.value;
         const uid=user;
        
  const addProfile={fullName,
            institution,
            age,
            phone,
            email,
            subjects,
            availabilityDays,
            profileImage,uid}
          


       /*  const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('institution', institution);
    formData.append('age', age);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('subjects', subjects);
    formData.append('availabilityDays', availabilityDays);
    formData.append('profileImage', profileImage);*/
        // Handle form submission logic
       console.log(addProfile);

        //send data to the server
        fetch('http://localhost:3000/tuitionHub',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addProfile)
        })
        .then(res=>res.json())
        .then(data => {
         console.log(data);
          if (data.insertedId) {
            console.log('inserted')
                 Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                   icon: 'success',
                    confirmButtonText: 'Cool'
                    
                  });
               
          }
      })
    }
  
    


    
        // You can handle file upload logic here or other data operations
      

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="  bg-white shadow-lg rounded-lg p-8 space-y-4 w-full max-w-3xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Your Profile</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>
          
           {/* Full Name */}
           <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Current Institution</span>
            </label>
            <input
              type="text"
              name="institution"
              placeholder="Enter your institution"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Age */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Age</span>
            </label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Subjects */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Subjects</span>
            </label>
            <input
              type="text"
              name="subjects"
              placeholder="Enter subjects you teach"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Availability Days */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Availability Days</span>
            </label>
            <input
              type="text"
              name="availabilityDays"
              placeholder="Enter your available days"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Profile Image */}
          <div className="form-control w-full md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">Profile Image</span>
            </label>
            <input
              type="file"
              name="profileImage"
              className="file-input file-input-bordered w-full"
              accept="image/*"
              required
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button type="submit" value="AddCoffee" className="btn btn-primary w-full md:w-auto">
            Submit Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProfile;