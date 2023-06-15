import React, { useState, useEffect } from "react";
import "./style.css";
import { GrSearch } from "react-icons/gr";
import Main_Page from "./Main_Page";
import { useUserStore } from "../../store.jsx";
function Home() {
  const [query, setQuery] = useState("");
  const getQuery = useUserStore((state) => state.getQuery);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    getQuery(query);
  }, [query]);

  return (
    <div className="main  w-full">
      <div className="flex justify-center ">
        <form action="">
          <div className="flex justify-end">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Search"
              className="p-1  pr-52 pl-2 bg-white border-2 rounded-md
            text-black focus:outline-none my-6 border-bl"
            />
            <GrSearch className="h-6 w-6 absolute mt-8 mr-3 search " />
          </div>
        </form>
      </div>

      <Main_Page />
    </div>
  );
}

export default Home;
