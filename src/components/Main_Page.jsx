import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navpage from "./Navpage";
import { getAllComponents } from "./hooks/getComponents";

const Main_Page = () => {
  const { data } = getAllComponents();
  return (
    <React.Fragment>
      <section>
        <div className="grid grid-cols-12 mt-8 ">
          <div className="sidebar col-span-3  h-max border-2 ml-5 border-gray-500  ">
            <Sidebar getAllData={data} />
          </div>
          <div className="col-span-9 h-full pl-24 ">
            <Navpage getAllData={data} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main_Page;
