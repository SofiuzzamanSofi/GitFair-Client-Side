import axios from "axios";
import React, { useContext } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";
import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import {  BiUserPlus } from "react-icons/bi";




const navLinks = [
  {
    path: "/adminDashboard",
    icon: <AiOutlineHome />,
    display: "Dashboard",
  },
  {
    path: "/adminDashboard/allusers",
    icon: <BiUserPlus/>,
    display: "All Users",
  },
  {
    path: "/adminDashboard/paidusers",
    icon: <BiUserPlus />,
    display: "Paid Users",
  },
 
];

const Sidebar = () => {
  const {  logout } = useContext(AuthContext)

  const Navigate = useNavigate()
  const handleLogout = () => {
    logout()
        .then(() => {
            axios.defaults.withCredentials = true;
            axios.get("http://localhost:5000/cookieClear", { withCredentials: true })
                .then(res => console.log(res.data))
            Navigate('/login')
        })
        .catch(err => {
            console.log(err)

        })
}

  return (
    <div className="sidebar">
      <div className="sidebar__top mt-3 ">
        
        
          <img src={logo} alt="logo"  />
        
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  {item.icon}
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom mb-10">
          <span>
          <Link onClick={handleLogout} to='' className="btn btn-error  uppercase text-sm] text-white rounded-lg">Logout</Link>
           
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
