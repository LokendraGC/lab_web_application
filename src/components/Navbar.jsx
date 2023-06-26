import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../assets/images/text_logo_thumb.png";
import { MdLogin } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAdminStore, useUserStore } from "../../store";
import axios from "axios";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const userStatusToken = useUserStore((state) => state.token);
  const checkUserToken = useUserStore((state) => state.checkStatus);
  const rollNo = useUserStore((state) => state.rollNo);
  const removeUserToken = useUserStore((state) => state.removeToken);
  const studId = useUserStore((state) => state.studId);

  const adminStatusToken = useAdminStore((state) => state.token);
  const checkAdminToken = useAdminStore((state) => state.checkStatus);
  const removeAdminToken = useAdminStore((state) => state.removeToken);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    checkUserToken();
    checkAdminToken();
    if (userStatusToken && adminStatusToken) {
      localStorage.removeItem("token");
      localStorage.removeItem("userToken");
    }
  }, [userStatusToken, adminStatusToken, checkUserToken, checkAdminToken]);

  const handleLogout = () => {
    if (adminStatusToken) {
      const logoutFunc = async () => {
        const headers = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        await axios.post("http://localhost:8000/user/logout", {}, headers);
      };
      logoutFunc();
      removeAdminToken();
    } else {
      removeUserToken();
    }
  };

  const handleLinkClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`bg-head flex justify-between items-center w-full
    h-20 px-8 text-white sticky top-0 shadow-lg z-50 font-semibold 
    ${
      open
        ? " max-sm:h-20 max-sm:pt-4 max-sm:duration-300 overflow-auto max-sm:absolute max-sm:top-0 z-50"
        : " max-sm:h-max max-sm:pb-10 max-sm:w-full overflow-auto max-sm:bg-head max-sm:duration-500 max-sm:text-white max-sm:absolute max-sm:top-0 z-50"
    }`}
      >
        <Link to="/">
          <div
            className={`flex align-middle hover:cursor-pointer ${
              open ? "max-sm:ml-[-40px]" : "max-sm:hidden"
            }`}
          >
            <img src={logo} className="h-16 w-60 " alt="" />
          </div>
        </Link>
        {userStatusToken && !adminStatusToken && (
          <div className="flex space-x-4">
            <Link to={"/assigned/" + rollNo}>{rollNo && rollNo}</Link>

            <div
              className="pr-20 font-bold hover:cursor-pointer grid grid-flow-col"
              onClick={handleLogout}
            >
              <div className="pt-1 pr-1">
                <BiLogOut />
              </div>
              Logout
            </div>
          </div>
        )}
        {adminStatusToken && !userStatusToken && (
          <div
            className={`flex justify-center   w-full items-center space-x-5 
          md:flex-row flex-col  md:space-y-0 max-sm:space-y-7
          ${
            open
              ? "max-sm: "
              : " max-sm:text-xl max-sm:pt-12 max-sm:text-center w-full"
          }`}
          >
            <Link to="/createuser" className="w-full">
              <h1
                onClick={handleLinkClick}
                className={` ${open ? "max-sm:hidden " : ""}`}
              >
                Create
              </h1>
            </Link>

            <Link to={"/assigned"} className="w-full">
              <h1
                onClick={handleLinkClick}
                className={`hover:cursor-pointer ${
                  open ? "max-sm:hidden" : ""
                } `}
              >
                Assigned
              </h1>
            </Link>
            <Link to={"/checkout"} className="w-full">
              <h1
                onClick={handleLinkClick}
                className={`hover:cursor-pointer ${
                  open ? "max-sm:hidden" : ""
                }`}
              >
                Checkout
              </h1>
            </Link>
            <Link to={"/settings/updateuser"} className="w-full">
              <h1
                onClick={handleLinkClick}
                className={`hover:cursor-pointer ${
                  open ? "max-sm:hidden" : ""
                }`}
              >
                Settings
              </h1>
            </Link>
            <div
              className={`pr-20 font-bold hover:cursor-pointer grid grid-flow-col 
            max-sm:ml-9 max-sm:pr-0  ${open ? "max-sm:hidden" : " "}`}
              onClick={handleLogout}
            >
              <div className="pt-1 pr-1">
                <BiLogOut />
              </div>
              <div onClick={handleLinkClick}>Logout</div>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className={`text-3xl absolute right-0 hover:cursor-pointer md:hidden  ${
                open ? "max-sm:pb-10" : "max-sm:pb-96 max-sm:pr-4"
              }`}
            >
              {open ? (
                <AiOutlineMenu className="max-sm:mr-3 " />
              ) : (
                <IoCloseSharp  className="max-sm:mt-16"/>
              )}
            </div>
          </div>
        )}
        {!adminStatusToken && !userStatusToken && (
          <Link to={"/login"}>
            <div
              className={`pr-20 font-bold hover:cursor-pointer grid grid-flow-col max-sm:pr-0 max-sm:mt-5${
                open ? "" : " "
              }`}
            >
              <div className="pt-1 pr-1">
                <MdLogin />
              </div>
              Login
            </div>
          </Link>
        )}
      </div>
    </>
  );
}

export default Navbar;
