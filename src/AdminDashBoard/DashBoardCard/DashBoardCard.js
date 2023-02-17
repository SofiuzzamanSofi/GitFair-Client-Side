import React from "react";
import "./DashBoardCard.css";
import TransactionChart from "./TransactionChart";
import { BiUserPlus } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";


const dashBoardCards = [

    

  {
    image: <BiUserPlus />,
    title: "Total Blance",
    incom: "$150k",
    increment:<span><span className="text-[#5DAF50]">+25%</span> than last week</span> 
  },
  {
    image: <BiUserPlus />,
    title: "Total User",
    incom: 1500,
    increment:<span> <span className="text-[#5DAF50]">+35%</span> than last week</span> 
  },
  {
    image: <BiUserPlus />,
    title: "paid User",
    incom: 500,
    increment:<span> <span className="text-[#5DAF50]">+5%</span> than last week</span> 
  },
  {
    image: <BiUserPlus />,
    title: "Total Upload",
    incom: 1000,
    increment:<span> <span className="text-[#5DAF50]">+25%</span> than last week</span> ,
  },
  
  
];

const DashBoardCard = () => {

   

  return (
    <div className=" ">
        {/* <AdminNavber /> */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-[50px] gap-3">
        {dashBoardCards?.map((dashBoardC) => (
          <div className="text-black mx-auto card shadow-2xl w-full mb-6 ">
            <div className="flex flex-row justify-between cards-deatails  ">
              <div className="iconbx">
                <div className="icons">{dashBoardC?.image}</div>
              </div>
              <div>
                <h1 className="">{dashBoardC?.title}</h1>
                <p>{dashBoardC?.incom}</p>
              </div>
            </div>
            <div className="text-center card-text">
              <p>
              {dashBoardC?.increment}
                {/* <span className="text-[#5DAF50]">+55%</span> than last week */}
              </p>
            </div>
          </div>
        ))}      
      </div>
      <div className="mt-10">
        <TransactionChart />
      </div>
    </div>
  );
};

export default DashBoardCard;
