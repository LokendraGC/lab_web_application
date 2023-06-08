import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  
  
  return (
   
   
   <div className="login flex justify-center  items-center">
      <div className="box h-60 w-96 mt-40 shadow-xl">
        <div className="pt-4 flex flex-col items-center">
          <h3 className="text-white font-semibold roll">Roll No.</h3>
          <div className="flex justify-center ">
            <form action="">
              <div className="flex justify-end">
                <input
                  type="text"
                  name="name"
                  placeholder="SEC076BEI012"
                  className="p-1  pr-32 pl-2 bg-white border-2 rounded-sm
            text-black focus:outline-none my-6 border-bl"
                />
              </div>
            </form>
          </div>


         <Link to={'/details'}>
          <div className="bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center">
            <button className="text-white font-semibold">Login</button>
          </div>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
