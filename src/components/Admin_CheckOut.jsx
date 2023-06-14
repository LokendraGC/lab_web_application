import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import dcmotor from "../assets/images/Motors/brush_less.jpg";
import bluetooth from "../assets/images/Sensors/bluetooth_module.jpg";
import jumper from "../assets/images/cables/f_f_jumper.jpg";

const AdminCheckOut = () => {
  const [items, setItems] = useState([{}]);

  // const handleDelete = (id)=>(
  //          const updatedItem = items.filter(item=>item.id!==id)
  //          setItems(updatedItem)

  // )

  const compo_detail = [
    {
      id: 1,
      sn: 1,
      name: "motor",
      src: dcmotor,
      title: "DC motor",
      qty: "1",
    },

    {
      id: 3,
      sn: 2,
      name: "blue",
      src: bluetooth,
      title: "Bluetooth",
      qty: "4",
    },
  ];

  return (
    <div className="admincheck text-white">
      <div className="flex justify-center pt-12"></div>
      <div className="flex items-center justify-center space-x-28 pr- font-semibold pt-10 ">
        <span className="pr-">SN.</span>
        <span className="pl-4">Name</span>
        <span className="pr-">Quantity</span>
        <span className="pl-6">Delete</span>
      </div>
      {compo_detail.map(({ id, sn, src, title, qty }) => (
        <div
          key={id}
          className="bg-prlink text-xl cheekout flex items-center justify-center space-x-12 border border-gray-500 mr-80 mt-10 ml-80 h-16"
        >
          <span className="">{sn}</span>
          <div className=" pt-1 pb-1 ">
            {/* <img src={src} alt="bluetooth" className="borders  h- w-16  " /> */}
          </div>
          <span className="pr-8 borders">{title}</span>

          <span className="pr-32 borders ">{qty}</span>

          <div className="borders">
            <RxCross2
              onClick={() => handleDelete(item.id)}
              className="crush h-7 w-7 bg-dpink hover:cursor-pointer"
            />
          </div>
        </div>
      ))}

      <button className="mx-auto bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink  flex items-center justify-center mt-16 text-white font-semibold">
        Proceed
      </button>
    </div>
  );
};

export default AdminCheckOut;
