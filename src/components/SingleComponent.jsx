import React, { useEffect, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { Link, redirect, useNavigate } from "react-router-dom";
import { updateComponent } from "./hooks/getComponents";

const SingleComponent = ({ list }) => {
  const [componentsName, setComponentsName] = useState(list?.name);
  const [quantity, setQuantity] = useState(list?.quantity);
  const [fileHandler, setFileHandler] = useState();
  const { mutate: putComponent } = updateComponent();
  const [category, setCategory] = useState(list?.category);
  const navigate = useNavigate();
  const handleFile = (e) => {
    setFileHandler(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      putComponent({
        id: list.id,
        name: componentsName,
        image: fileHandler,
        quantity: quantity,
        category: category,
      });
    } catch (err) {
      alert("Something is wrong");
    } // consol
    navigate("/");
  };
  useEffect(() => {
    console.log(fileHandler);
  }, [fileHandler]);

  return (
    <div className="login flex justify-center  w-1/2 ml-4  items-center max-sm:pl-[155px]">
      <div className="box  w-96  shadow-xl">
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
                <h3 className="text-white font-semibold roll ">Category</h3>
                <input
                  type="text"
                  name="name"
                  defaultValue={list.category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  <h1 className="text-grlink">
                    {(fileHandler && fileHandler.name) || list.image}
                  </h1>
                </div>

                <h3 className="text-white mt-3">Quantity:</h3>
                <input
                  type="number"
                  name=""
                  onChange={(e) => setQuantity(e.target.value)}
                  defaultValue={list?.quantity}
                  min={0}
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
