import React, { useEffect, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createComponent } from "./hooks/getComponents";
import { useAdminStore, useUserStore } from "../../store";

const Add_Compo = () => {
  const [componentsName, setComponentsName] = useState("");
  const [quantity, setQuantity] = useState(Number);
  const [category, setCategory] = useState("");
  const [fileHandler, setFileHandler] = useState({});
  const handleFile = (e) => {
    // console.log(e.target.files);
    setFileHandler(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      postComponent({
        name: componentsName,
        image: fileHandler,
        quantity: quantity,
        category: category,
      });
    } catch (err) {
      alert("Something is wrong");
    } // console.log(componentsName, fileHandler, qunatity);
    setCategory("");
    setFileHandler();
    setComponentsName("");
    setQuantity("");
  };

  const { pathname } = useLocation();
  const [activeCreate, setActiveCreate] = useState(false);
  const { mutate: postComponent } = createComponent();
  const navigate = useNavigate();
  const checkAdmin = useAdminStore((state) => state.token);
  const checkUser = useUserStore((state) => state.token);
  useEffect(() => {
    if (!checkAdmin && !checkUser) {
      navigate("/");
    }
  }, [checkAdmin, checkUser]);
  useEffect(() => {
    console.log(pathname);
    if (pathname == "/addcompo") {
      setActiveCreate(true);
    } else {
      setActiveCreate(false);
    }
  }, [pathname]);
  return (
    <div className="max-sm:flex max-sm:overflow-hidden">
      <div className=" compo flex  justify-start pt-16  text-white font-semibold border-gray-500  ">
        <div className="compo  sidebar w-1/4 h-40 ml-5  border-2 border-gray-600 mt-16 max-sm:h-24 max-sm:w-36 ">
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

        <div className="login flex justify-center  w-1/2 ml-4  items-center max-sm:pr-3 ">
          <div className="box  w-96  shadow-xl max-sm:mt-64 max-sm:mr-[530px]">
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
                      value={componentsName}
                      onChange={(e) => setComponentsName(e.target.value)}
                      placeholder="DC motor"
                      className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
    text-black focus:outline-none my-6 border-bl"
                    />
                    <h3 className="text-white font-semibold roll ">Category</h3>
                    <input
                      type="text"
                      name="name"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Electronics"
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
                      <h1 className="text-grlink">
                        {fileHandler && fileHandler.name}
                      </h1>
                    </div>

                    <h3 className="text-white mt-3">Quantity:</h3>
                    <input
                      type="number"
                      name=""
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="text-black mt-4"
                    />
                  </div>
                </form>
              </div>

              <div
                onClick={handleSubmit}
                className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center mt-7 ml-32 max-sm:mb-5"
              >
                <button className="text-white font-semibold">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Compo;
