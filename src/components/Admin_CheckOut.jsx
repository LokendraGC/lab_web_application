import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import dcmotor from "../assets/images/Motors/brush_less.jpg";
import bluetooth from "../assets/images/Sensors/bluetooth_module.jpg";
import jumper from "../assets/images/cables/f_f_jumper.jpg";
import { useAdminStore, useUserStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { assignComponent } from "./hooks/getComponents";
const addQuantity = (components) => {
  const aggregatedData = {};

  components.forEach((item) => {
    if (aggregatedData[item.id]) {
      aggregatedData[item.id].quantity += item.quantity;
    } else {
      aggregatedData[item.id] = { ...item };
    }
  });

  return Object.values(aggregatedData);
};
const AdminCheckOut = () => {
  const [items, setItems] = useState([{}]);

  // const handleDelete = (id)=>(
  //          const updatedItem = items.filter(item=>item.id!==id)
  //          setItems(updatedItem)

  // )

  // const compo_detail = [
  //   {
  //     id: 1,
  //     sn: 1,
  //     name: "motor",
  //     src: dcmotor,
  //     title: "DC motor",
  //     qty: "1",
  //   },

  //   {
  //     id: 3,
  //     sn: 2,
  //     name: "blue",
  //     src: bluetooth,
  //     title: "Bluetooth",
  //     qty: "4",
  //   },
  // ];
  const navigate = useNavigate();
  const checkAdmin = useAdminStore((state) => state.token);
  const components = useAdminStore((state) => state.components);
  const deleteComponent = useAdminStore((state) => state.deleteComponent);
  const { mutate: postComponent } = assignComponent();

  const checkUser = useUserStore((state) => state.token);
  const [roll, setRoll] = useState("");
  useEffect(() => {
    if (!checkAdmin && !checkUser) {
      navigate("/");
    }
  }, [checkAdmin, checkUser]);
  const updatedData = addQuantity(components);
  const updateData = (components) => {
    console.log(components);

    components.forEach((item) => {
      item["studentID"] = roll.toUpperCase();
    });
    return components;
  };
  const handleProceed = (e) => {
    e.preventDefault();
    const postData = updateData(updatedData);
    console.log(postData);
    postComponent(postData);
  };
  return (
    <div className="admincheck text-white">
      <div className="flex justify-center items-center  space-x-2 pt-12">
        <label>Roll no.</label>
        <input
          onChange={(e) => setRoll(e.target.value)}
          type="text"
          placeholder=" SEC076BEI012"
          className=" text-black rounded-sm outline-none px-2 py-1"
        />
      </div>
      <div className="flex items-center justify-center space-x-28 pr- font-semibold pt-10 ">
        <span className="pr-">SN.</span>
        <span className="pl-4">Name</span>
        <span className="pr-">Quantity</span>
        <span className="pl-6">Delete</span>
      </div>
      {updatedData.map(({ id, pic, component, quantity }, i) => (
        <div
          key={i}
          className="bg-prlink text-xl cheekout flex items-center justify-center space-x-12 border border-gray-500 mr-80 mt-10 ml-80 h-16"
        >
          <span className="">{i + 1}</span>
          <div className=" pt-1 pb-1 ">
            {/* <img src={src} alt="bluetooth" className="borders  h- w-16  " /> */}
          </div>
          <span className="pr-8 borders">{component}</span>

          <span className="pr-32 borders ">{quantity}</span>

          <div className="borders">
            <RxCross2
              onClick={() => deleteComponent(id)}
              className="crush h-7 w-7 bg-dpink hover:cursor-pointer"
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleProceed}
        className="mx-auto bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink  flex items-center justify-center mt-16 text-white font-semibold"
      >
        Proceed
      </button>
    </div>
  );
};

export default AdminCheckOut;
