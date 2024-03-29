import React from "react";
import { Link } from "react-router-dom";

const Admin_Create_User = () => {
  return (
    <div className="">
      <div className="compo flex   pt-16    text-white font-semibold ">
        <div className="compo px-4 sidebar w-1/4 h-72 ml-5  ">
          <div className=" pt-12  space-y-6 ">
            <h3 className="create border-b-2 border-gray-500  p-3 hover:cursor-pointer hover:bg-dpink   bg-crit">
              Create
            </h3>
            <h3 className="border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ">
              User
            </h3>
            <h3 className="border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ">
              Components
            </h3>
          </div>
        </div>

        <div className="login flex justify-center  w-1/2 ml-4  items-center">
          <div className="box h-60 w-96 shadow-xl">
            <div className="pt-4 flex flex-col items-center">
              <h3 className="text-white font-semibold roll">Roll No.</h3>
              <div className="flex justify-center ">
                <form action="">
                  <div className="flex justify-end">
                    <input
                      type="text"
                      name="name"
                      placeholder="SEC076BEI012"
                      className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                    />
                  </div>
                </form>
              </div>

              <div className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center">
                <button className="text-white font-semibold">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Create_User;
