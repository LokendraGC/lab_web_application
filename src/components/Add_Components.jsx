import React from "react";
import { BsCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Add_Compo = () => {
  return (
    <div className="">
      <div className=" compo flex   pt-16    text-white font-semibold ">
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
          <div className="box h-96 w-96  shadow-xl">
            <div className="pt-4 flex flex-col items-start">
              <div className="flex justify-center ">
                <form action="">
                  <div className="ml-8">
                    <h3 className="text-white font-semibold roll ">
                      Component Name
                    </h3>
                    <input
                      type="text"
                      name="name"
                      placeholder="DC motor"
                      className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                    />
                    <h3 className="text-white font-semibold roll ">
                      Upload Image
                    </h3>

                    <div className=" flex justify-items-start ">
                      <input
                        type="photo"
                        name=""
                        placeholder=""
                        className="p-1  pr-32 pl-2  border-2 rounded-sm
                      text-black focus:outline-none my-6 border-bl hover:cursor-pointer"
                      />
                      <BsCameraFill className=" fill-black h-6 w-6 absolute mt-7 ml-2 hover:cursor-pointer " />
                    </div>

                    <h3>Quantity:</h3>
                    <input type="number" name="" className="text-black mt-4" />
                  </div>
                </form>
              </div>

              <Link to={"/"}>
                <div className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center mt-7 ml-32">
                  <button className="text-white font-semibold ">Submit</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Compo;
