import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import AdminNavber from '../AdminDashBoard/AdminNavber/AdminNavber';
// import NavBar from '../Components/Share/Header/NavBar/NavBar';
// import { AiOutlineHome } from 'react-icons/ai';
import { AuthContext } from "./../Context/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";

const AdminDashboardLayout = () => {
  const { user } = useContext(AuthContext);

  /// Data load from Mongodb
  // const { data: adminLoginData = [] } = useQuery({
  //   queryKey: ["adminLoginData"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       "https://file-upload-server-gitfair.glitch.me/users/gitfair06@gmail.com"
  //     );
  //     const data = res.json();
  //     return data;
  //   },
  // });

  // console.log(adminLoginData?.role);

  return (
   
    <div className="lg:w-full mx-auto bg-white pl-4 pr-4">
    <div className="drawer drawer-mobile">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col p-5">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <>
          <Outlet />
        </>
      </div>
      <div className="drawer-side rounded-xl ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-black text-white">
          <div>
            <div className="flex flex-col items-center border-b-2 pt-5">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={user?.photoURL}
                alt="imgae"
              />
              <div className="mt-2 flex flex-col items-center">
                {user?.email ? <p>{user?.displayName}</p> : <p>NaN</p>}

                <p className="bg-white rounded-lg text-black px-5 mb-4">
                  <span>Admin</span>
                </p>
              </div>
            </div>
            <div className="mt-5 mb-10">
              <li className="bg-[#66C555] from-blue-[#1e88e5] hover:bg-[#66c555] text-white flex-initial  rounded-md mt-5 text-2xl ">
                <Link to="/adminDashboard">
                  <AiOutlineHome /> Dashboard
                </Link>
              </li>
              <li className="hover:bg-white mt-5 hover:text-black  text-white flex-initial rounded-md text-2xl bg-[#66C555]">
                <Link to="/adminDashboard/allusers">
                  <AiOutlineUser /> All Users
                </Link>
              </li>
              <li className="hover:bg-white mt-5 hover:text-black  text-white flex-initial rounded-md text-2xl bg-[#66C555]">
                <Link to="/adminDashboard/paidusers">
                  <AiOutlineUser /> Paid Users
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default AdminDashboardLayout;
