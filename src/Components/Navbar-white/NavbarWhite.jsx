import React from "react";
import userImage from "../../assets/Data Wrangling.png";
import "./NavbarWhite.css";

function NavbarWhite() {
  return (
    <div className='white-nav'>
      <h1>EDYODA</h1>
      <div className='user-details'>
        <p>Hi Test learner!</p>
        <img src={userImage} alt='userImage' />
      </div>
    </div>
  );
}

export default NavbarWhite;
