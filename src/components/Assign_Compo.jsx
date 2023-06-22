import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { useAdminStore, useUserStore } from "../../store";
import axios from "axios";
// import { Assigned_Data } from "../assets/data/Assigned_Data";
// import { Sidebar_Data } from "../assets/data/Sidebar_Data";

const Assign_Compo = () => {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const [uniqueValues, setUniqueValues] = useState([]);
  const navigate = useNavigate();
  const checkAdmin = useAdminStore((state) => state.token);
  const checkUser = useUserStore((state) => state.token);
  useEffect(() => {
    if (!checkAdmin && !checkUser) {
      navigate("/");
    }
  }, [checkAdmin, checkUser]);
  const getAssignedComponents = async () => {
    const { data: getData } = await axios.get(
      `http://localhost:8000/students/components`
    );
    setData(await getData);
  };
  useEffect(() => {
    getAssignedComponents();
  }, []);

  useEffect(() => {
    if (data) {
      const uniqueIds = Array.from(
        new Set(data.map((item) => item.studentID.studentID))
      );
      const formattedData = uniqueIds.map((id) => {
        const matchingItem = data.find(
          (item) => item.studentID.studentID === id
        );
        return {
          // id: matchingItem.studentID.id,
          name: matchingItem.studentID.studentID,
        };
      });
      setUniqueValues(formattedData);
    }
  }, [data]);

  const handleQuery = (e) => {
    let timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setQuery(e.target.value);
    }, 800);
  };
  const allLists = useMemo(() => {
    if (uniqueValues) {
      let l = uniqueValues.filter((a) => a.name.toLowerCase().includes(query));
      return l;
    }
  }, [uniqueValues, query]);
  return (
    <div>
      <div className="assign text-white mt-10 ">
        <form action=""></form>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name="name"
            autoComplete="off"
            onChange={handleQuery}
            placeholder="SEC076BEI012"
            className="p-1  pr-52 pl-2 border-2 rounded-md
            text-black focus:outline-none my-4 border-bl"
          />
          <GrSearch className="h-6 w-6 relative right-8  mr-3 search " />
        </div>
        <h3 className="font-semibold text-2xl pl-24">Components Assigned</h3>

        <div
          className="assign flex bg-dpink space-x-8 pl-24 items-center mt-8 font-semibold 
         "
        >
          {allLists &&
            allLists.map((stud, i) => (
              <Link
                // onClick={() => handleData(stud)}
                to={`/assigned/${stud.name}`}
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
