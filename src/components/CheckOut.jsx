import React from "react";
import Card from "./Card";
import ir from "../assets/images/Sensors/IR.jpg";
import brush_dc from "../assets/images/Motors/brush_dc.jpg";
import coaxial from "../assets/images/cables/coaxial.jpg";
import arduino from "../assets/images/basic_elc_cmp/Arduino2.jpg";
import { useState, useEffect } from "react";

const Components = [
  {
    id: 1,
    src: arduino,
    title: "Arduino",
    date: "Issued Date:2023-8-5",
    qty: "Quantity:",
  },
  {
    id: 2,
    src: ir,
    title: "IR",
    date: "Issued Date:2023-8-5",
    qty: "Quantity:",
  },
  {
    id: 3,
    src: brush_dc,
    title: "Brush DC",
    date: "Issued Date:2023-8-5",
    qty: "Quantity:",
  },
  {
    id: 4,
    src: coaxial,
    title: "Coaxial",
    date: "Issued Date:2023-8-5",
    qty: "Quantity:",
  },
];

const CheckOut = () => {
  const [accessToken, setAccessToken] = useState(false);
  const [editAccess, setEditAccess] = useState(false);
  const [qtyAccess, setQtyAccess] = useState(Number);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessToken(true);
    } else {
      setAccessToken(false);
    }
  }, []);

  return (
    <>
      <div className="assign text-white font-bold text-xl pl-24 pt-10">
        Components for SEC076BEI012
      </div>

      <div
        className="pt-12 assign grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-6 px-8 sm:px-0"
      >
        {Components.map(({ id, src, title, date, qty }) => (
          <div
            key={id}
            className="max-w-sm rounded overflow-hidden shadow-lg pl-24 pt-8"
          >
            <img src={src} alt="" className="w-full h-40 mx-auto" />
            <div className="px-6 py-4 bg-prlink flex items-center flex-col">
              <p className="text-lg font-semibold text-grlink mt-3 ">{title}</p>
            </div>
            <div className="px-6 py-4 bg-prlink flex items-start flex-col">
              <p className="text-lg font-semibold text-white mt-3">{date}</p>
              <p className="text-lg font-semibold text-white mt-3">
                {" "}
                {qty}
                {qtyAccess}
                {editAccess && (
                  <input
                    type="number"
                    defaultValue={"2"}
                    className="text-black"
                    onChange={(e) => setQtyAccess(e.target.value)}
                  />
                )}
                {""}
              </p>

              <div className="flex space-x-16">
                <div>
                  {accessToken && !editAccess && (
                    <div
                      onClick={() => setEditAccess(true)}
                      className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center w-20"
                    >
                      <button className="text-white font-semibold ">
                        Edit
                      </button>
                    </div>
                  )}

                  {accessToken && editAccess && (
                    <div
                      onClick={() => setEditAccess(false)}
                      className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center w-20"
                    >
                      <button className="text-white font-semibold ">
                        Done
                      </button>
                    </div>
                  )}
                </div>

                {accessToken && (
                  <div className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center">
                    <button className="text-white font-semibold">Assign</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckOut;
