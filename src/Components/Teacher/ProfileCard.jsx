const ProfileCard = ({profile}) => {
  console.log(profile);


  
  const {_id,fullName,
    institution,
    age,
    phone,
    email,
    subjects,
    availabilityDays,
    profileImage}=profile
    return (
        <div className="card glass">
         <figure>
        {profileImage ? (
          <img
            src={profileImage}
            alt={`${fullName}'s Profile`}
            className="w-32 h-32 rounded-full object-cover"
          />
        ) : (
          <img
            src="https://via.placeholder.com/150"
            alt="Default Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        )}
      </figure>
        <div className="card-body mt-3">
        <h1>Name:{fullName}</h1>
        <h1>Age:{age}</h1>
        <h1>Institution:{institution}</h1>
        <h1>Phone:{phone}</h1>
        <h1>Email:{email}</h1>
        <h1>Subjects:{subjects}</h1>
        <h1>AvailabilityDays:{availabilityDays}</h1>


          
        </div>
      </div>
    );
};
export default ProfileCard;