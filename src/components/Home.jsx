import React, { useState, useEffect } from "react";
import "./style.css";
import { GrSearch } from "react-icons/gr";
import Main_Page from "./Main_Page";
import { useUserStore } from "../../store.jsx";
function Home() {
  return (
    <div className="main relative  w-full">
      <Main_Page />
    </div>
  );
}

export default Home;
