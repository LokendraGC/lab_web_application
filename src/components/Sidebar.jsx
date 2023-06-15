import React, { useEffect, useState } from "react";
import { Sidebar_Data } from "../assets/data/Sidebar_Data";
import { NavLink } from "react-router-dom";
import { useUserStore } from "../../store";
import { GrSearch } from "react-icons/gr";

function Sidebar({ getAllData }) {
  const uniqueCategories = [
    ...new Set(getAllData.map((item) => item.category)),
  ];

  // Store unique categories in an array in React state

  return (
    <React.Fragment>
      <section className="">
        <div className="  ">
          <div
            className=" w-full h-12 flex justify-start border-b-2 border-gray-500  bg-crit text-grlink 
                 font-semibold px-4 pt-2"
          >
            Categories
          </div>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#B54297" : "",
                color: isActive ? "white" : "white",
              };
            }}
            className="hover:cursor-pointer px-4 hover:bg-dpink w-full h-12 flex justify-start border-b-2 border-gray-500  items-center text-white 
                 font-semibold "
          >
            <span>All Categories</span>
          </NavLink>
          {uniqueCategories.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#B54297" : "",
                      color: isActive ? "white" : "white",
                    };
                  }}
                  className="hover:cursor-pointer px-4 hover:bg-dpink w-full h-12 flex justify-start border-b-2 border-gray-500  items-center text-white 
                 font-semibold "
                >
                  <span>{item}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Sidebar;
