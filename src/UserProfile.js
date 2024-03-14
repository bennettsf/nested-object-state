import React, { useState } from "react";

function UserProfile() {
  // create userProfile object for manipulation
  const [userProfile, setUserProfile] = useState({
    name: "Bennett",
    email: "bennett.fife@gmail.com",
    address: {
      street: "",
      city: "",
      country: "",
    },
  });

  // create useState for the 3 submission possibilities
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  // onChange handlers for the submission forms
  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // update state of the object with street, city, and country useState values
  // object update uses spread syntax!
  const updateAddress = (event) => {
    // prevent page reload with onSubmit call
    event.preventDefault()
    setUserProfile((prevAddress) => ({
      ...prevAddress,
      address: {
        ...prevAddress.address,
        street: street,
        city: city,
        country: country,
      },
    }));
  };

  return (
    <div>
      <form onSubmit={updateAddress}>
        <label>
            Street: 
            <input type="text" value={street} onChange={handleStreetChange}/><br/>
        </label>
        <label>
            City:
            <input type="text" value={city} onChange={handleCityChange}/><br/>
        </label>
        <label>
            Country:
            <input type="text" value={country} onChange={handleCountryChange}/><br/>
        </label>
        <input type='submit'/>
      </form>
      <h3>Name: {userProfile.name}</h3>
      <h3>Email: {userProfile.email}</h3>
      <h3>Street: {userProfile.address.street}</h3>
      <h3>City: {userProfile.address.city}</h3>
      <h3>Country: {userProfile.address.country}</h3>
    </div>
  );
}

export default UserProfile;
