import React from 'react'
import Sidebar from './Sidebar'
import Navpage from './Navpage'

const Main_Page = () => {
  return (
    <React.Fragment>
      <section>
        <div className="grid grid-cols-12 mt-8">
          <div className="sidebar col-span-3 h-96 border-2 ml-5 border-gray-500  ">
            <Sidebar />
          </div>
          <div className="col-span-9 h-screen pl-24 text-green-500">
            <Navpage />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Main_Page
