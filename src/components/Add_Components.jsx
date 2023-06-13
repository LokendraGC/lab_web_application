import React, { useEffect, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Add_Compo = () => {
  const [componentsName, setComponentsName] = useState("");
  const [qunatity, setQuantity] = useState(Number);
  const [fileHandler, setFileHandler] = useState();
  const handleFile = (e) => {
    setFileHandler(e.target.files[0].name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(componentsName, fileHandler, qunatity);
  };

  const { pathname } = useLocation();
  const [activeCreate, setActiveCreate] = useState(false);
  useEffect(() => {
    console.log(pathname);
    if (pathname == "/addcompo") {
      setActiveCreate(true);
    } else {
      setActiveCreate(false);
    }
  }, [pathname]);
  return (
    <div className="">
      <div className=" compo flex  justify-start pt-16  text-white font-semibold border-gray-500  ">
        <div className="compo  sidebar w-1/4 h-56 ml-5  border-2 border-gray-600 mt-16 ">
          <div className="  space-y-6 ">
            <h3 className="create border-b-2 border-gray-500  p-3 bg-crit">
              Create
            </h3>
            <Link to="/createuser">
              <h3 className="border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ">
                User
              </h3>
            </Link>
            <Link to="/addcompo">
              <h3
                className={`border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ${
                  activeCreate ? "bg-dpink" : "bg-none"
                }`}
              >
                Components
              </h3>
            </Link>
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
                      onChange={(e) => setComponentsName(e.target.value)}
                      placeholder="DC motor"
                      className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
    text-black focus:outline-none my-6 border-bl"
                    />
                    <h3 className="text-white font-semibold roll ">
                      Upload Image
                    </h3>

                    <div className=" flex flex-col justify-items-center">
                      <input
                        type="file"
                        onChange={handleFile}
                        name=""
                        placeholder=""
                        className="p-1  w-full  text-sm pl-2  bg-white border-2 rounded-sm
              text-black focus:outline-none my-2 border-bl hover:cursor-pointer"
                      />
                      <h1 className="text-grlink">{fileHandler}</h1>
                    </div>

                    <h3 className="text-white mt-3">Quantity:</h3>
                    <input
                      type="number"
                      name=""
                      onChange={(e) => setQuantity(e.target.value)}
                      className="text-black mt-4"
                    />
                  </div>
                </form>
              </div>

              <div
                onClick={handleSubmit}
                className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center mt-7 ml-32"
              >
                <button className="text-white font-semibold ">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Compo;
