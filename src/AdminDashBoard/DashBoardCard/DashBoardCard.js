import React from "react";
import "../DashBoardCard/DashBoardCard.css";
import MileChart from "../DashBoardCard/Charts/MileChart";
import CarStatsChart from "../DashBoardCard/Charts/CarStatsChart";
import { useQuery } from "@tanstack/react-query";
import {  BiUserPlus } from "react-icons/bi";
import {  FaDollarSign } from "react-icons/fa";
import {  TbFreeRights } from "react-icons/tb";
import {  MdAccountBalance } from "react-icons/md";



const DashBoardCard = () => {
  const { data: usersData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://file-upload-server-gitfair.glitch.me/users");
      const data = await res.json();
      return data;
    },
  });
 
  const dashboardData = [
    {
      id: "1",
      title: "Total user",
      totalNumber: usersData.length,
      icon: <BiUserPlus />,
    },

    {
      id: "2",
      title: "Paid User",
      totalNumber: 1,
      icon:<FaDollarSign />,
    },

    {
      id:"3",
      title: "Unpaid user",
      totalNumber: "15",
      icon:<TbFreeRights />,
    },

    {
      id: "4",
      title: "Total Balance",
      totalNumber: "1500k",
      icon:<MdAccountBalance />,
    },
  ];

  
  return (
    <div className="dashboard ">
      <div className="dashboard__wrapper ">
        <div className="dashboard__cards  ">
          
          {dashboardData.map((dashboardDatas,index) => (
            <>
              <div key={index} className="single__card  ">
                <div   className="card__content ">
                  <h4 >{dashboardDatas.title}</h4>
                  <span>{dashboardDatas.totalNumber}+</span>
                </div>
                <span className="card__icon">
                  <i>{dashboardDatas.icon}</i>
                </span>
              </div>
            </>
          ))}
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Total User</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Paid User</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
