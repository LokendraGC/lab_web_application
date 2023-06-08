import React from "react";
import "./style.css";
import logo from "../assets/images/text_logo_thumb.png";
import { MdLogin } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  const [token, setToken] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      setToken(false);
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
      {!token ? (
        <Link to={"/login"}>
          <div className="pr-20 font-bold hover:cursor-pointer grid grid-flow-col">
            <div className="pt-1 pr-1">
              <MdLogin />
            </div>
            Login
          </div>
        </Link>
      ) : (
        <div className="flex justify-center items-center space-x-5">
          <Link to="/createuser">
            <h1>Create</h1>
          </Link>

         <Link to={'/checkout'}>
          <h1 className="hover:cursor-pointer">Checkout</h1>
         </Link>
         
          <Link to={'/assigned'}>
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
    </div>
  );
}

export default Navbar;
