import React, { useEffect, useState } from 'react';
import './products.css'; // Assuming you save your styles in a file named profile.css

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     // Fetch user profile data
//     fetch('http://localhost:3000/profile')
//       .then(response => response.json())
//       .then(data => setProfileData(data))
//       .catch(error => console.error('Error fetching profile data:', error));
//   }, []);

//   if (!profileData) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-wrapper">
        <div className="profile-info left-col">
          {/* <img src={profileData.avatar} alt="avatar-photo" /> */}
          <button className="profile-button">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
                <path fill="black" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"></path>
              </svg>
            </span>
            <span>My account</span>
          </button>
          <button className="profile-button">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <g fill="none" stroke="black" stroke-width="2">
                  <rect width="14" height="17" x="5" y="4" rx="2" />
                  <path stroke-linecap="round" d="M9 9h6m-6 4h6m-6 4h4" />
                </g>
              </svg>
            </span>
            <span>My orders</span>
          </button>
          <button className="profile-button">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"></path>
              </svg>
            </span>
            <span>My Wishlist</span>
          </button>
          <button className="profile-button">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
                <rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="56" ry="56" />
                <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z" />
              </svg>
            </span>
            <span>Payment</span>
          </button>
        </div>
        <div className="profile-info right-col">
          <div className="profile-personal-information">
            <h4>Personal Information</h4>
            <label htmlFor="profile-user-name">Name</label>
            {/* <input type="text" name="profile-user-name" value={profileData.name} readOnly /> */}
            <label htmlFor="profile-user-birthDate">Birth Date</label>
            <input type="date" name="profile-user-birthDate" value='' readOnly />
            <label htmlFor="profile-user-phone">Phone</label>
            <input type="text" name="profile-user-phone" value='' readOnly />
            <p>Delivery Address</p>
            <label htmlFor="profile-user-county">County</label>
            <input type="text" name="profile-user-county" value='' readOnly />
            <label htmlFor="profile-user-city">City</label>
            <input type="text" name="profile-user-city" value='' readOnly />
            <label htmlFor="profile-user-address">Address</label>
            <input type="text" name="profile-user-address" value="" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
