import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAdminStore, useUserStore } from "../../store";

const ChangePassword = () => {
  const [rollNo, setRollNo] = useState("");
  // const statusToken = useStateStore((state) => state.token);
  // const checkToken = useStateStore((state) => state.checkStatus);
  // const addToken = useStateStore((state) => state.addToken);
  const navigate = useNavigate();
  const checkAdmin = useAdminStore((state) => state.token);
  const checkUser = useUserStore((state) => state.token);
  useEffect(() => {
    if (!checkAdmin && !checkUser) {
      navigate("/");
    }
  }, [checkAdmin, checkUser]);
  const token = useAdminStore((state) => state.tokenValue);
  const createUser = async () => {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:8000/students/",
        { studentID: rollNo },
        headers
      );
      alert(data?.message);
    } catch (err) {
      alert(err);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    createUser();
    // addToken(rollNo);
    // console.log(statusToken);
  };
  const { pathname } = useLocation();
  const [activeCreate, setActiveCreate] = useState(false);
  useEffect(() => {
    if (pathname == "/createuser") {
      setActiveCreate(true);
    } else {
      setActiveCreate(false);
    }
  }, [pathname]);

  return (
    <div className=" ">
      <div className="compo flex  justify-start pt-16  text-white font-semibold  ">
        <div
          className="compo  sidebar w-1/4  ml-5
         border-2 border-gray-600 mt-16 "
        >
          <div className="  space-y-6 ">
            <h3 className="create border-b-2 border-gray-500  p-3 bg-crit">
              Create
            </h3>

            <Link to={"/createuser"}>
              <h3
                className={`border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ${
                  activeCreate ? "bg-dpink" : "bg-none"
                }`}
              >
                User
              </h3>
            </Link>

            <Link to={"/addcompo"}>
              <h3 className="border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ">
                Components
              </h3>
            </Link>
          </div>
        </div>

        <div className="login flex justify-center  w-1/2 ml-4  items-center">
          <div className="box h-60 w-96  shadow-xl">
            <div className="pt-4 flex flex-col items-center">
              <h3 className="text-white font-semibold roll">Roll No.</h3>
              <div className="flex justify-center ">
                <form action="">
                  <div className="flex justify-end">
                    <input
                      onChange={(e) => setRollNo(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="SEC076BEI012"
                      className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                    />
                  </div>
                </form>
              </div>

              <div
                onClick={handleLogin}
                className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center"
              >
                <button className="text-white font-semibold">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
