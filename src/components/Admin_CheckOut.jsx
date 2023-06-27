import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import dcmotor from "../assets/images/Motors/brush_less.jpg";
import bluetooth from "../assets/images/Sensors/bluetooth_module.jpg";
import jumper from "../assets/images/cables/f_f_jumper.jpg";
import { RxCross1 } from "react-icons/rx";
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
  const resetComponent = useAdminStore((state) => state.resetComponent);
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
    postComponent(postData);
    // resetComponent();
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

      <div className=" pt-24 flex justify-center">
        <table className="min-w- divide-y divide-gray-200 mr-12 ml-12 ">
          <thead className=" text-white">
            <tr>
              <th className="py-3 px-6  text-center">SN.</th>
              <th className="py-3 px-6  text-center">Name</th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-center ">Delete</th>
            </tr>
          </thead>
          {updatedData.map(({ id, pic, component, quantity }, i) => (
            <tbody
              key={i}
              className="bg-prlink text-white divide-y divide-gray-200"
            >
              <tr>
                <td className="py-4 px-6 text-center pt-">{id}</td>
                <td className="py-4 px-6 text-center">{component}</td>
                <td className="py-4 px-6 text-center">{quantity}</td>
                <td
                  onClick={() => deleteComponent(id)}
                  className="py-4 px-6 text-center crush h-5 w-5 bg-dpink hover:cursor-pointer"
                >
                  <RxCross1 className="h-7 w-7 ml-3 " />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

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
