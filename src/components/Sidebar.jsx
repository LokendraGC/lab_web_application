import React from "react";
import { Sidebar_Data } from "../assets/data/Sidebar_Data";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <React.Fragment>
      <section>
        <div className="">
          <div
            className=" w-full h-12 flex justify-start border-b-2 border-gray-500  bg-crit text-grlink 
                 font-semibold px-4 pt-2"
          >
            All Categories
          </div>
          {Sidebar_Data.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#B54297" : "",
                      color: isActive ? "white" : "white",
                    };
                  }}
                  className="hover:cursor-pointer px-4 hover:bg-dpink w-full h-12 flex justify-start border-b-2 border-gray-500  items-center text-white 
                 font-semibold "
                >
                  <span>{item.title}</span>
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
