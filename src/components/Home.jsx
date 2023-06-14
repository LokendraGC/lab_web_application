import React from "react";
import "./style.css";
import { GrSearch } from "react-icons/gr";
import Main_Page from "./Main_Page";

function Home() {
  return (
    <div className="main  w-full">
      <div className="flex justify-center ">
        <form action="">
          <div className="flex justify-end">
            <input
              type="text"
              name="name"
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
