import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navpage from "./Navpage";

const Main_Page = () => {
  const [getAllData, setGetAllData] = useState([]);
  const fetchComponents = async () => {
    const data = await fetch("http://localhost:8000/components/all");
    const res = await data.json();
    if (res) {
      setGetAllData(res);
    }
  };
  useEffect(() => {
    fetchComponents();
  }, []);
  useEffect(() => {
    console.log(getAllData);
  }, [getAllData]);

  return (
    <React.Fragment>
      <section>
        <div className="grid grid-cols-12 mt-8">
          <div className="sidebar col-span-3 h-96 border-2 ml-5 border-gray-500  ">
            <Sidebar getAllData={getAllData} />
          </div>
          <div className="col-span-9 h-screen pl-24 text-green-500">
            <Navpage getAllData={getAllData} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main_Page;
