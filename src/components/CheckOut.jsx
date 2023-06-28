import React from "react";
import Card from "./Card";
import ir from "../assets/images/Sensors/IR.jpg";
import brush_dc from "../assets/images/Motors/brush_dc.jpg";
import coaxial from "../assets/images/cables/coaxial.jpg";
import arduino from "../assets/images/basic_elc_cmp/Arduino2.jpg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAdminStore, useUserStore } from "../../store";
import axios from "axios";
import { getAStudentComponents, returnComponent } from "./hooks/getComponents";
const AssigendCard = ({
  setEditAccess,
  component,
  accessToken,
  editAccess,
  setQtyAccess,
  handleAccess,
  handleReturn,
  qtyAccess,
}) => {
  return (
    <div
      key={component.quantity}
      className="group max-w-sm rounded overflow-hidden shadow-lg p-8 "
    >
      <img
        src={`http://localhost:8000` + component.component.image}
        alt=""
        className="w-full h-40 mx-auto object-contain border-2 bg-gray-800 border-gray-700 "
      />
      <div className="px-6 py-4 bg-prlink flex items-center flex-col">
        <p className="text-xl font-semibold text-grlink  ">
          {component.component.name}
        </p>
        <div className="px-6  bg-prlink flex items-center my-2 justify-center flex-col">
          <p className="text-lg font-semibold text-white ">
            Date of Issue: {component.component.dateOfIssue}
          </p>
          <p className="text-lg font-semibold text-white ">
            {" "}
            Quantity:{" "}
            {!editAccess && parseInt(component.quantity) < 0
              ? 0
              : component.quantity - parseInt(qtyAccess)}
            {editAccess && (
              <input
                type="number"
                defaultValue={"0"}
                min={0}
                max={parseInt(component.quantity)}
                className="text-black"
                onChange={(e) => setQtyAccess(e.target.value)}
              />
            )}
            {""}
          </p>
          <p className="text-lg font-semibold text-white ">
            {" "}
            Returned:{JSON.stringify(component.returned)}
          </p>
          <div className="flex space-x-16">
            <div>
              {!component.returned && accessToken && !editAccess && (
                <div
                  onClick={() => setEditAccess(true)}
                  className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center w-20"
                >
                  <button className="text-white font-semibold ">Edit</button>
                </div>
              )}

              {!component.returned && accessToken && editAccess && (
                <div
                  onClick={() =>
                    handleAccess((name = component.component.name))
                  }
                  className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center w-20"
                >
                  <button className="text-white font-semibold ">Done</button>
                </div>
              )}
            </div>

            {!component.returned && accessToken && (
              <div
                onClick={() =>
                  handleReturn({
                    name: component.component.name,
                    qty: component.quantity,
                  })
                }
                className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center"
              >
                <button className="text-white font-semibold">Return</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const CheckOut = () => {
  const [accessToken, setAccessToken] = useState(false);
  const [editAccess, setEditAccess] = useState(false);
  const [qtyAccess, setQtyAccess] = useState(Number);
  const tokens = useAdminStore((state) => state.tokenValue);
  const checkAdmin = useAdminStore((state) => state.token);
  const checkUser = useUserStore((state) => state.token);

  useEffect(() => {
    console.log(checkAdmin, checkUser);
    if (!checkAdmin && !checkUser) {
      navigate("/");
    }
  }, [checkAdmin, checkUser]);

  const { id: params } = useParams();
  const navigate = useNavigate();

  const { data: components } = getAStudentComponents({ params });

  useEffect(() => {
    if (tokens) {
      setAccessToken(true);
    } else {
      setAccessToken(false);
    }
  }, []);

  const updateQuantity = async (name) => {
    console.log({
      studentID: components[0]?.studentID.studentID,
      quantity: qtyAccess,
      returned: false,
      component: name,
    });
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      };

      const { data } = await axios.put(
        "http://localhost:8000/students/postComponent",
        {
          studentID: components[0]?.studentID.studentID,
          quantity: qtyAccess,
          returned: false,
          component: name,
        },
        headers
      );
      console.log(await data);
      alert(data?.message);
    } catch (err) {
      alert(err.response.data.detail ?? err);
    }
  };
  const { mutate: returnComp } = returnComponent();
  // const returnComp = async (name, qty) => {
  //   try {
  //     const headers = {
  //       headers: {
  //         Authorization: `Bearer ${tokens}`,
  //       },
  //     };

  //     const { data } = await axios.put(
  //       "http://localhost:8000/students/postComponent",
  //       {
  //         studentID: components[0]?.studentID.studentID,
  //         quantity: parseInt(qty) - qtyAccess,
  //         returned: true,
  //         component: name,
  //       },
  //       headers
  //     );
  //     alert(data?.message);
  //   } catch (err) {
  //     alert(err.response.data.detail ?? err);
  //   }
  // };
  const handleAccess = (name) => {
    setEditAccess(false);
    updateQuantity(name);
  };
  const handleReturn = ({ name, qty }) => {
    returnComp({
      name,
      qty: parseInt(qty) - qtyAccess,
      studentID: components[0]?.studentID.studentID,
    });
  };
  return (
    <>
      <div
        className="assign text-white font-bold text-xl pl-8 mt-10
       "
      >
        Components for {components[0]?.studentID.studentID}
      </div>

      <div
        className="mt-5 max-sm:bg-crit grid grid-cols-4  gap-y-5  items-start
               text-center   sm:px-0 max-sm:flex max-sm"
      >
        {components.map((component, i) => (
          <AssigendCard
            key={i}
            qtyAccess={qtyAccess}
            component={component}
            accessToken={accessToken}
            editAccess={editAccess}
            setQtyAccess={setQtyAccess}
            handleAccess={handleAccess}
            handleReturn={handleReturn}
            setEditAccess={setEditAccess}
          />
          // <div
          //   key={i}
          //   className="group max-w-sm rounded overflow-hidden shadow-lg p-8 "
          // >
          //   <img
          //     src={`http://localhost:8000` + component.component.image}
          //     alt=""
          //     className="w-full h-40 mx-auto object-contain border-2 bg-gray-800 border-gray-700 "
          //   />
          //   <div className="px-6 py-4 bg-prlink flex items-center flex-col">
          //     <p className="text-xl font-semibold text-grlink  ">
          //       {component.component.name}
          //     </p>
          //     <div className="px-6  bg-prlink flex items-center my-2 justify-center flex-col">
          //       <p className="text-lg font-semibold text-white ">
          //         Date of Issue: {component.component.dateOfIssue}
          //       </p>
          //       <p className="text-lg font-semibold text-white ">
          //         {" "}
          //         Quantity:{" "}
          //         {!editAccess && parseInt(component.quantity) < 0
          //           ? 0
          //           : component.quantity - parseInt(qtyAccess)}
          //         {editAccess && (
          //           <input
          //             type="number"
          //             defaultValue={"0"}
          //             min={0}
          //             max={parseInt(component.quantity)}
          //             className="text-black"
          //             onChange={(e) => setQtyAccess(e.target.value)}
          //           />
          //         )}
          //         {""}
          //       </p>
          //       <p className="text-lg font-semibold text-white ">
          //         {" "}
          //         Returned:{JSON.stringify(component.returned)}
          //       </p>
          //       <div className="flex space-x-16">
          //         <div>
          //           {!component.returned && accessToken && !editAccess && (
          //             <div
          //               onClick={() => setEditAccess(true)}
          //               className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center w-20"
          //             >
          //               <button className="text-white font-semibold ">
          //                 Edit
          //               </button>
          //             </div>
          //           )}

          //           {!component.returned && accessToken && editAccess && (
          //             <div
          //               onClick={() =>
          //                 handleAccess((name = component.component.name))
          //               }
          //               className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center w-20"
          //             >
          //               <button className="text-white font-semibold ">
          //                 Done
          //               </button>
          //             </div>
          //           )}
          //         </div>

          //         {!component.returned && accessToken && (
          //           <div
          //             onClick={() =>
          //               handleReturn({
          //                 name: component.component.name,
          //                 qty: component.quantity,
          //               })
          //             }
          //             className="bg-dpink hover:cursor-pointer  mt-3 px-3 py-2  hover:bg-grlink rounded-lg flex items-center justify-center"
          //           >
          //             <button className="text-white font-semibold">
          //               Return
          //             </button>
          //           </div>
          //         )}
          // </div>
          // </div>
          // </div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default CheckOut;
