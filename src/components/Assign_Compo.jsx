import React from "react";
import { Link } from "react-router-dom";
// import { Assigned_Data } from "../assets/data/Assigned_Data";
// import { Sidebar_Data } from "../assets/data/Sidebar_Data";

const Assign_Compo = () => {
  return (
    <div>
      <div className="assign text-white pt-10 ">
        <h3 className="font-semibold text-2xl pl-24">Components Assigned</h3>

        <div
          className="assign flex bg-dpink space-x-8 pl-24 items-center pt-10 font-semibold 
         "
        >
         <Link to={'/checkout'}>
          <h3 className="bg-dpink h-9 w-36 pl-8 pt-1 hover:cursor-pointer">
            SEC076BEI012
          </h3>
         </Link>
         <Link to={'/checkout'}>
          <h3 className="bg-dpink h-9 w-36 pl-8 pt-1 hover:cursor-pointer">
            SEC076BEI012
          </h3>
         </Link>
         <Link to={'/checkout'}>
          <h3 className="bg-dpink h-9 w-36 pl-8 pt-1 hover:cursor-pointer">
            SEC076BEI012
          </h3>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Assign_Compo;
