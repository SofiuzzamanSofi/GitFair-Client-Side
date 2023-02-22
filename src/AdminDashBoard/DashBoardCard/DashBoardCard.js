import React from "react";
import "../DashBoardCard/DashBoardCard.css";
import SingleCard from "../DashBoardCard/SingleCard";

import MileChart from "../DashBoardCard/Charts/MileChart";
import CarStatsChart from "../DashBoardCard/Charts/CarStatsChart";




const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const DashBoardCard = () => {
  return (
    <div className="dashboard ">
      <div className="dashboard__wrapper w-full ">
        <div className="dashboard__cards  ">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default DashBoardCard;
