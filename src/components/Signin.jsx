import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAdminStore } from "../../store";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const statusToken = useAdminStore((state) => state.token);
  const checkToken = useAdminStore((state) => state.checkStatus);
  const addToken = useAdminStore((state) => state.addToken);
  useEffect(() => {
    checkToken();
    console.log(statusToken);
    if (statusToken) {
      navigate("/");
    }
  }, [checkToken, statusToken]);

  const handleLogin = (e) => {
    e.preventDefault();
    addToken(email);
    setEmail("");
    setPassword("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (p) => {
    setPassword(p.target.value);
  };

  // const handleApi = () => {
  //   console.log({ email, password });
  //   localStorage.setItem("token", email);
  //   navigate("/");
  //   // axios.post('https://reqres.in/api/login',{
  //   //     email:email,
  //   //     password:password
  //   // }).then(result=>{
  //   //     console.log(result.data)
  //   //     // alert('success')
  //   //     localStorage.setItem('token',result.data.token)
  //   //     navigate('/')
  //   // })

  //   // .catch(error=>{
  //   //     alert('service error')
  //   //     console.log(error)
  //   // })
  // };

  return (
    <div className="login flex justify-center  items-center">
      <div className="box h-96 w-96 mt-40 shadow-xl">
        <div className="pt-4 flex flex-col items-center">
          <h3 className="text-white font-semibold roll ">Signin</h3>
          <div className="flex justify-center ">
            <form action="" onSubmit={handleLogin}>
              <div className="flex items-center flex-col justify-center">
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  name="name"
                  placeholder="email"
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
              <button className="mx-auto bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center mt-16 text-white font-semibold">
                Signin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
