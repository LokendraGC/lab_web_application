import React, { useState, useEffect } from "react";
import "../components/style.css";
import arduino from "../assets/images/basic_elc_cmp/Arduino2.jpg";
import resistor from "../assets/images/basic_elc_cmp/Resistors_Array.jpg";
import capacitor from "../assets/images/basic_elc_cmp/capacitor.jpg";
import diode from "../assets/images/basic_elc_cmp/diod.jpg";
import ic from "../assets/images/basic_elc_cmp/ICs.jpg";
import battery from "../assets/images/basic_elc_cmp/lipo_battery.jpg";
import respbery from "../assets/images/basic_elc_cmp/raspberry_pi.jpg";
import led from "../assets/images/basic_elc_cmp/leds.jpg";
import inductor from "../assets/images/basic_elc_cmp/inductor.jpg";
import motor from "../assets/images/basic_elc_cmp/motor.jpg";
import multimeter from "../assets/images/basic_elc_cmp/multimeter.jpg";
import relay from "../assets/images/basic_elc_cmp/relay.jpg";

const Basic_elc_cmp = () => {
  const components = [
    {
      id: 1,
      src: arduino,
      title: "Arduino",
      qty: "Quantity:",
    },
    {
      id: 2,
      src: resistor,
      title: "Resistor",
      qty: "Quantity:",
    },
    {
      id: 3,
      src: capacitor,
      title: "Capacitor",
      qty: "Quantity:",
    },
    {
      id: 4,
      src: diode,
      title: "Diodes",
      qty: "Quantity:",
    },
    {
      id: 5,
      src: ic,
      title: "ICs",
      qty: "Quantity:",
    },
    {
      id: 6,
      src: battery,
      title: "Battery",
      qty: "Quantity:",
    },
    {
      id: 7,
      src: respbery,
      title: "Respberry-Pi",
      qty: "Quantity:",
    },
    {
      id: 8,
      src: led,
      title: "LEDs",
      qty: "Quantity:",
    },
    {
      id: 9,
      src: inductor,
      title: "Indcutor",
      qty: "Quantity:",
    },
    {
      id: 10,
      src: motor,
      title: "Motor",
      qty: "Quantity:",
    },
    {
      id: 9,
      src: multimeter,
      title: "Multimeter",
      qty: "Quantity:",
    },
    {
      id: 9,
      src: relay,
      title: "Relay",
      qty: "Quantity:",
    },
  ];

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
      <div className="">
        <div
          className="max-w-screen-lg mx-auto pr-8 flex flex-col 
               justify-center w-full h-full text-white"
        >
          <div>
            <p
              className="text-4xl font-bold inline border-gray-500
                 "
            >
              Basic Electronics Components
            </p>
          </div>
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0 "
          >
            {components.map(({ id, src, title, qty }) => (
              <div
                key={id}
                className="shadow-md group  shadow-gray-500 hover:scale-110 duration-500 rounded-lg
                py-2 "
              >
                <img src={src} alt="" className="w-42 h-32 mx-auto" />
                <p className="title text-lg font-semibold  mt-3">{title}</p>
             
                <p className="text-lg font-semibold text-white mt-3">{qty}{qtyAccess}
               {editAccess &&<input type="number" defaultValue={"3"} className="text-black" onChange={(e)=>setQtyAccess(e.target.value)}/>} </p>

                {accessToken && !editAccess  && (
                  <div onClick={()=>setEditAccess(true)} className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center">
                    <button className="text-white font-semibold">Edit</button>
                  </div>
                )}
                {accessToken && editAccess  && (
                  <div onClick={()=>setEditAccess(false)} className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center">
                    <button className="text-white font-semibold">Done</button>
                  </div>
                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
      {/* <Categories/> */}
    </>
  );
};

export default Basic_elc_cmp;
