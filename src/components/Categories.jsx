import React from 'react'
import Basic_elc_cmp from '../pages/Basic_elc_cmp'
import Cables from '../pages/Cables'
import Motors from '../pages/Motors'
import Sensors from '../pages/Sensors'
import { Link } from 'react-router-dom'

const Categories = () => {


  return (
    <div className="category">
      <Basic_elc_cmp />
      {/* <Cables/> */}
      {/* <Motors/>
       <Sensors/> */}

      <div className=" h-12 w-52 bg-prlink flex items-center pl-9 rounded-lg">
        <div className=" flex space-x-8 ">
{/*         
          <Link to={"/elec"}>
            <h3 className=" hover:cursor-pointer ">1</h3>
          </Link>
          <Link to={"/cables"}>
            <h3 className=" hover:cursor-pointer ">2</h3>
          </Link>
          <Link to={"/motors"}>
            <h3 className=" hover:cursor-pointer ">3</h3>
          </Link>
          <Link to={"/sensors"}>
            <h3 className=" hover:cursor-pointer ">4</h3>
          </Link> */}
         
        </div>
      </div>
    </div>
  );
}

export default Categories