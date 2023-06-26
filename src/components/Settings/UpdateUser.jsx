import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAdminStore, useUserStore } from "../../../store";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
  const updateUser = async () => {
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        "http://localhost:8000/user/update",
        { username: username, email: email },
        headers
      );
      alert(data?.message);
    } catch (err) {
      alert(err);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    updateUser();
    // addToken(rollNo);
    // console.log(statusToken);
  };
  const { pathname } = useLocation();
  const [activeCreate, setActiveCreate] = useState(false);
  useEffect(() => {
    if (pathname == "/settings/updateuser") {
      setActiveCreate(true);
    } else {
      setActiveCreate(false);
    }
  }, [pathname]);

  return (
    <div className=" max-sm: ">
      <div className="compo flex  justify-start pt-16  text-white font-semibold  ">
        <div
          className="compo  sidebar w-1/4  ml-5
         border-2 border-gray-600 mt-16 max-sm:h-24 max-sm:w-full 
         max-sm:ml-8 max-sm:border-0"
        >
          <div className="space-y-6 max-sm:w-[200]">
            <h3 className="create border-b-2 border-gray-500  p-3 bg-crit
            max-sm:border-0">
              Settings
            </h3>

            <Link to={"/settings/updateuser"}>
              <h3
                className={`border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ${
                  activeCreate ? "bg-dpink" : "bg-none"
                }`}
              >
                Update User
              </h3>
            </Link>

            <Link to={"/settings/changepassword"}>
              <h3 className="border-b-2 border-gray-500 p-3  hover:cursor-pointer hover:bg-dpink ">
                Change Password
              </h3>
            </Link>
          </div>
        </div>

        <div
          className="login flex justify-center  w-1/2 ml-4  items-center max-sm:pr-[187px] 
        "
        >
          <div className="box h-60 w-96  shadow-xl  max-sm:mt-[300px]">
            <div className="pt-4 flex flex-col items-center">
              <h3 className="text-white font-semibold roll">Username.</h3>
              <div className="flex justify-center ">
                <form action="">
                  <div className="flex justify-end">
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="SEC076BEI012"
                      className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                    />
                  </div>
                </form>
              </div>
              <h3 className="text-white font-semibold roll">Email</h3>
              <div className="flex justify-center max-sm:mb-12">
                <form action="">
                  <div className="flex justify-end">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
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
                className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center "
              >
                <button className="text-white font-semibold">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
