import React, { useState, useEffect } from "react";
import "../components/style.css";
import { useAdminStore, useUserStore } from "../../store";
import { Link } from "react-router-dom";
import authApi from "./hooks/authApi";
import axios from "axios";

const Card = ({ id, src, title, qty }) => {
  //   const components = [
  //     {
  //       id: 1,
  //       src: arduino,
  //       title: "Arduino",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 2,
  //       src: resistor,
  //       title: "Resistor",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 3,
  //       src: capacitor,
  //       title: "Capacitor",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 4,
  //       src: diode,
  //       title: "Diodes",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 5,
  //       src: ic,
  //       title: "ICs",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 6,
  //       src: battery,
  //       title: "Battery",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 7,
  //       src: respbery,
  //       title: "Respberry-Pi",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 8,
  //       src: led,
  //       title: "LEDs",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 9,
  //       src: inductor,
  //       title: "Indcutor",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 10,
  //       src: motor,
  //       title: "Motor",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 9,
  //       src: multimeter,
  //       title: "Multimeter",
  //       qty: "Quantity:",
  //     },
  //     {
  //       id: 9,
  //       src: relay,
  //       title: "Relay",
  //       qty: "Quantity:",
  //     },
  //   ];

  const [accessToken, setAccessToken] = useState(false);
  const [editAccess, setEditAccess] = useState(false);
  const [qtyAccess, setQtyAccess] = useState(Number);
  const adminStatusToken = useAdminStore((state) => state.token);
  const userStatusToken = useUserStore((state) => state.token);

  const checkUserToken = useUserStore((state) => state.checkStatus);
  const checkAdminToken = useAdminStore((state) => state.checkStatus);
  async function deleteItem(id) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3NDMzMzA2LCJpYXQiOjE2ODY1NjkzMDYsImp0aSI6ImI0YWQwNmQzYjJiZjQ4MmM4ZDMyNzFjODM5NDY1NjI5IiwidXNlcl9pZCI6MX0.Ahntz3zXZ038d4PHj5FwX_3kxIidSEftVk3VRXLIAJc";
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.delete(`http://localhost:8000/components/${id}`, headers);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem(id);
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   setAccessToken(true);
    // } else {
    //   setAccessToken(false);
    // }
    checkUserToken();
    checkAdminToken();
  }, []);

  return (
    <>
      {/* {components.map(({ id, src, title, qty }) => ( */}
      <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={`http://localhost:8000${src}`}
          alt=""
          className="w-full h-40 mx-auto object-contain border-2 bg-gray-800 border-gray-700"
        />
        <div className="px-6 py-4 bg-prlink flex items-center flex-col">
          <p className="title text-lg font-semibold  mt-3">{title}</p>

          <p className="text-lg font-semibold text-white mt-3">
            {!editAccess && qty}
            {editAccess && (
              <input
                type="number"
                defaultValue={"0"}
                max={qty}
                className="text-black w-1/6 pl-1"
                onChange={(e) => setQtyAccess(e.target.value)}
              />
            )}{" "}
          </p>
          <div className="flex justify-between w-full">
            <div>
              {adminStatusToken && (
                <Link to={`/${title}/${id}`}>
                  <div className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center">
                    <button className="text-white font-semibold">Edit</button>
                  </div>
                </Link>
              )}
            </div>
            {adminStatusToken && (
              <div className="flex">
                {editAccess ? (
                  <div
                    onClick={() => setEditAccess(false)}
                    className="bg-dpink hover:cursor-pointer ml-2 mt-3 px-3 h-10 hover:bg-grlink rounded-lg flex items-center justify-center"
                  >
                    <button className="text-white font-semibold">Done</button>
                  </div>
                ) : (
                  <div
                    onClick={() => setEditAccess(true)}
                    className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center"
                  >
                    <button className="text-white font-semibold">Assign</button>
                  </div>
                )}
                <div
                  onClick={handleDelete}
                  className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2 ml-2 hover:bg-grlink rounded-lg flex items-center justify-center"
                >
                  <button className="text-white font-semibold">X</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
