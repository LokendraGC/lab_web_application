import React, { useEffect, useState } from "react";
import authApi from "./hooks/authApi";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { useAdminStore } from "../../store";
// import { Assigned_Data } from "../assets/data/Assigned_Data";
// import { Sidebar_Data } from "../assets/data/Sidebar_Data";

const Assign_Compo = () => {
  const [uniqueValues, setUniqueValues] = useState([]);
  const data = authApi("http://localhost:8000/students/components", "get");

  useEffect(() => {
    if (data) {
      const uniqueIds = Array.from(
        new Set(data.map((item) => item.studentID.id))
      );
      const formattedData = uniqueIds.map((id) => {
        const matchingItem = data.find((item) => item.studentID.id === id);
        return {
          id: matchingItem.studentID.id,
          name: matchingItem.studentID.studentID,
        };
      });
      setUniqueValues(formattedData);
    }
  }, [data]);

  return (
    <div>
      <div className="assign text-white pt-10 ">
        <form action=""></form>
        <h3 className="font-semibold text-2xl pl-24">Components Assigned</h3>
        <div className="flex flex-col mt-2 justify-center items-center">
          <h3 className=" pr-3 text-xl font-semibold">Search by Roll No.</h3>
          <div className="">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="SEC076BEI012"
              className="p-1  pr-52 pl-2 border-2 rounded-md
            text-black focus:outline-none my-4 border-bl"
            />
          </div>
        </div>

        <div
          className="assign flex bg-dpink space-x-8 pl-24 items-center mt-8 font-semibold 
         "
        >
          {uniqueValues &&
            uniqueValues.map((stud, i) => (
              <Link
                // onClick={() => handleData(stud)}
                to={`/assigned/${stud.id}`}
                key={i}
              >
                <h3 className="bg-dpink h-9 w-36 text-center pt-1 hover:cursor-pointer">
                  {stud.name}
                </h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Assign_Compo;
