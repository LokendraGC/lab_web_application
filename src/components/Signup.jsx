import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAdminStore } from "../../store";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const statusToken = useAdminStore((state) => state.token);
  const checkToken = useAdminStore((state) => state.checkStatus);
  const addToken = useAdminStore((state) => state.addToken);

  useEffect(() => {
    checkToken();
    if (statusToken) {
      navigate("/");
    }
  }, [checkToken, statusToken]);

  const handleRegister = async (username, password, email) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    };
    const data = await fetch(
      "http://localhost:8000/user/register",
      requestOptions
    );
    const res = await data.json();
    if (res.token) return res.token;
    else {
      alert("Failed to Login");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const getToken = await handleRegister(username, password, email);
    if (getToken) {
      addToken(getToken);
    }
    setUsername("");
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
              <button className="mx-auto bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink rounded-lg flex items-center justify-center text-white font-semibold">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
