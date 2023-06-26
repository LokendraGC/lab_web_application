import React from "react";
import { LuCopyright } from "react-icons/lu";
import "./style.css";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh]">
      <div
        className={`md:w-full  footer flex  justify-start items-end space-x-8`}
      >
        <div className="foot  w-full h-20 px-8 ">
          <div className=" pt-7 flex justify-center items-center text-white">
            <div className="pt-1 pr-1">
              <LuCopyright className="" />
            </div>
            <div>Copyright 2023 - EISS</div>
          </div>
          {/* <div className="">
          <h3 className="text-white">
            <LuCopyright className="" />
            Copyright 2023 - EISS
          </h3>
        </div> */}
        </div>
        {/*       
        <h3 className="text-white ">
          <LuCopyright  className=''/>
          Copyright 2023 - EISS
        </h3> */}
      </div>
    </footer>
  );
};

export default Footer;
