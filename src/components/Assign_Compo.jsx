import React, { useEffect, useState } from "react";
import authApi from "./hooks/authApi";
// import { Assigned_Data } from "../assets/data/Assigned_Data";
// import { Sidebar_Data } from "../assets/data/Sidebar_Data";

const Assign_Compo = () => {
  const data = authApi("http://localhost:8000/students/", "get");

  return (
    <div>
      <div className="assign text-white pt-10 ">
        <h3 className="font-semibold text-2xl pl-24">Components Assigned</h3>

        <div
          className="assign flex bg-dpink space-x-8 pl-24 items-center pt-10 font-semibold 
         "
        >
          {data &&
            data.map((stud) => (
              <h3
                key={stud.id}
                className="bg-dpink h-9 w-36 text-center pt-1 hover:cursor-pointer"
              >
                {stud.studentID}
              </h3>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Assign_Compo;
