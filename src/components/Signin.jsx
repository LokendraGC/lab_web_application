import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAdminStore } from "../../store";

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const statusToken = useAdminStore((state) => state.token);
  const checkToken = useAdminStore((state) => state.checkStatus);
  const addToken = useAdminStore((state) => state.addToken);
  const loginUser = useAdminStore((state) => state.fetch);

  useEffect(() => {
    checkToken();
    if (statusToken) {
      navigate("/");
    }
  }, [checkToken, statusToken]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const getToken = await loginUser(username, password);
    if (getToken) {
      addToken(getToken);
    }
    setUsername("");
    setPassword("");
  };

  const handlePassword = (p) => {
    setPassword(p.target.value);
  };

  return (

    
    <div className="login flex justify-center  items-center ">
      <div className=" box p-5 w-96 mt-40 shadow-xl max-sm:pt-0bg-green-500">
        <div className="pt-4 flex flex-col items-center ">
          <h3 className="text-white font-semibold roll text-lg ">Sign In</h3>
          <div className="flex justify-center ">
            <form action="" onSubmit={handleLogin}>
              <div className="flex items-center flex-col justify-center">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="username"
                  className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                />

                <input
                  value={password}
                  onChange={handlePassword}
                  type="password"
                  name="name"
                  placeholder="password"
                  className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                />
              </div>
              <button className="mx-auto mb-3 bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center text-white font-semibold ">
                Login
              </button>
            </form>
          </div>
          <h1 className="text-white mt-2 font-thin ">
            Create an
            <Link to="/signup" className="text-grlink">
              {" "}
              account
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signin;
