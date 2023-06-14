import React, { useEffect } from "react";
import "./style.css";
import logo from "../assets/images/text_logo_thumb.png";
import { MdLogin } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAdminStore, useUserStore } from "../../store";

function Navbar() {
  const userStatusToken = useUserStore((state) => state.token);
  const checkUserToken = useUserStore((state) => state.checkStatus);
  const rollNo = useUserStore((state) => state.rollNo);
  const removeUserToken = useUserStore((state) => state.removeToken);
  const studId = useUserStore((state) => state.studId);

  const adminStatusToken = useAdminStore((state) => state.token);
  const checkAdminToken = useAdminStore((state) => state.checkStatus);
  const removeAdminToken = useAdminStore((state) => state.removeToken);

  useEffect(() => {
    checkUserToken();
    checkAdminToken();
  }, [userStatusToken, adminStatusToken, checkUserToken, checkAdminToken]);

  const handleLogout = () => {
    if (adminStatusToken) removeAdminToken();
    else {
      removeUserToken();
    }
  };

  return (
    <div
      className="header flex justify-between items-center w-full
    h-20 px-8 text-white sticky top-0 shadow-lg"
    >
      <Link to="/">
        <div className="flex align-middle hover:cursor-pointer">
          <img src={logo} className="h-16 w-60 " alt="" />
        </div>
      </Link>
      {userStatusToken && !adminStatusToken && (
        <div className="flex space-x-4">
          <Link to={"/assigned/" + studId.id}>
            {rollNo?.length > 0 && rollNo}
          </Link>
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
        <div className="flex justify-center items-center space-x-5">
          <Link to="/createuser">
            <h1>Create</h1>
          </Link>

          <Link to={"/checkout"}>
            <h1 className="hover:cursor-pointer">Checkout</h1>
          </Link>

          <Link to={"/assigned"}>
            <h1 className="hover:cursor-pointer">Assigned</h1>
          </Link>

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
      {!adminStatusToken && !userStatusToken && (
        <Link to={"/login"}>
          <div className="pr-20 font-bold hover:cursor-pointer grid grid-flow-col">
            <div className="pt-1 pr-1">
              <MdLogin />
            </div>
            Login
          </div>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
