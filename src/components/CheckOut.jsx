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

const CheckOut = () => {
  const [accessToken, setAccessToken] = useState(false);
  const [editAccess, setEditAccess] = useState(false);
  const [qtyAccess, setQtyAccess] = useState(Number);
  const [components, setComponents] = useState([]);
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
  const getAssignedComponents = async (studentID) => {
    const { data } = await axios.post(
      `http://localhost:8000/students/components`,
      {
        studentID,
      }
    );
    setComponents(await data);
  };

  useEffect(() => {
    if (tokens) {
      setAccessToken(true);
    } else {
      setAccessToken(false);
    }
  }, []);
  useEffect(() => {
    getAssignedComponents(params);
  }, [params, tokens]);

  return (
    <>
      <div className="assign text-white font-bold text-xl pl-24 pt-10">
        Components for {components[0]?.studentID.studentID}
      </div>

      <div
        className="pt-12 assign flex flex-wrap
               text-center   sm:px-0"
      >
        {components.map(({ component }, i) => (
          <div
            key={i}
            className="max-w-sm rounded overflow-hidden shadow-lg pl-24 "
          >
            <img
              src={`http://localhost:8000` + component.image}
              alt=""
              className="w-full h-40 mx-auto object-contain border-2 bg-gray-800 border-gray-700 "
            />
            <div className="px-6 py-4 bg-prlink flex items-center flex-col">
              <p className="text-xl font-semibold text-grlink  ">
                {component.name}
              </p>
              <div className="px-6  bg-prlink flex items-center my-2 justify-center flex-col">
                <p className="text-lg font-semibold text-white ">
                  Date of Issue: {component.dateOfIssue}
                </p>
                <p className="text-lg font-semibold text-white ">
                  {" "}
                  Quantity: {component.quantity}
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
                      <button className="text-white font-semibold">
                        Return
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckOut;
