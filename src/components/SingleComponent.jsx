import React, { useEffect, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleComponent = ({ list }) => {
  const [componentsName, setComponentsName] = useState("");
  const [qunatity, setQuantity] = useState(Number);
  const [fileHandler, setFileHandler] = useState(list?.image);
  const handleFile = (e) => {
    setFileHandler(e.target.files[0].name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(componentsName, fileHandler, qunatity);
  };

  return (
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
                  defaultValue={list.name}
                  onChange={(e) => setComponentsName(e.target.value)}
                  placeholder="DC motor"
                  className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
    text-black focus:outline-none my-6 border-bl"
                />
                <h3 className="text-white font-semibold roll ">Upload Image</h3>

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
                  defaultValue={list?.quantity}
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
  );
};

export default SingleComponent;
