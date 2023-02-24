import React, { useContext } from "react";
import "./top-nav.css";
import { AuthContext } from "./../../Context/AuthProvider/AuthProvider";

const TopNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="search or type" />
          
        </div>
        <div className="top__nav-right">
        
          <div className="profile">
           
            <img
                className="w-[50px] h-[50px] rounded-full"
                src={user?.photoURL}
                alt="imgae"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
