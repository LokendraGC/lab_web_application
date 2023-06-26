import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navpage from "./Navpage";
import { getAllComponents } from "./hooks/getComponents";
import "./style.css";

const Main_Page = () => {
  const { data } = getAllComponents();

  return (
    <React.Fragment>
      <section className="overflow-x-hidden ">
        <div className="md:grid md:grid-cols-12 mt-8  ">
          <div className="sidebar  md:w-full w-[98%]  md:col-span-3 md:mt-20 mb-8 md:mb-0 h-max border-2 md:ml-5 border-gray-500 ">
            <Sidebar getAllData={data} />
          </div>
          <div className="md:col-span-9 h-full  md:pl-24 mb-10 md:mb-0 ">
            <Navpage getAllData={data} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main_Page;
