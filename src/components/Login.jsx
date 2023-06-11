import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store";

const Login = () => {
  const navigate = useNavigate();

  const [rollNo, setRollNo] = useState("");
  const statusToken = useUserStore((state) => state.token);
  const checkToken = useUserStore((state) => state.checkStatus);
  const addToken = useUserStore((state) => state.addToken);
  const setRoll = useUserStore((state) => state.setRoll);
  useEffect(() => {
    checkToken();
    if (statusToken) {
      navigate("/");
    }
  }, [statusToken, checkToken]);

  const handleLogin = (e) => {
    e.preventDefault();
    setRoll(rollNo);
    addToken(rollNo);
    console.log(rollNo);
    setRollNo("");
  };

  return (
    <div className="login flex justify-center  items-center">
      <div className="box h-60 w-96 mt-40 shadow-xl">
        <div className="pt-4 flex flex-col items-center">
          <h3 className="text-white font-semibold roll">Roll No.</h3>
          <div className="flex justify-center ">
            <form action="" onSubmit={handleLogin}>
              <div className="flex justify-end">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="SEC076BEI012"
                  className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                />
              </div>
            </form>
          </div>

          <div className="">
            <button className="text-white font-semibold bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
