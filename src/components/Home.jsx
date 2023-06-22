import React, { useState, useEffect } from "react";
import "./style.css";
import { GrSearch } from "react-icons/gr";
import Main_Page from "./Main_Page";
import { useUserStore } from "../../store.jsx";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
function Home() {
  const { pathname: path } = useLocation();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (path === "/") setToggle(true);
    else {
      setToggle(false);
    }
  }, [path, toggle]);

  return (
    <div className="main relative bg-green-500 w-full">
      <Main_Page />
      {/* {toggle && <Footer view={true} />} */}
    </div>
  );
}

export default Home;
