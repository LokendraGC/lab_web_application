import React, { Suspense, useState } from "react";
import { useUserStore } from "../../store.jsx";
import { useEffect } from "react";
const Card = React.lazy(() => import("./Card.jsx"));

const CardWrapper = ({ base_title, list }) => {
  return (
    <div className="  overflow-auto">
      <div
        className=" max-w-screen-lg mx-auto pr-8 flex flex-col 
        justify-center w-full h-full text-white "
      >
        <div>
          <p className="text-4xl font-bold inline px-8  border-gray-500">
            {base_title}
          </p>
        </div>
        <div
          className="w-[85%] md:w-full grid grid-cols-1 mx-auto md:grid-cols-3 
          gap-8 text-center py-8 px-2 md:px-8 items-center  "
        >
          {list && list.length > 0 ? (
            list.map((c) => (
              <Suspense key={c.id} fallback={<div>Loading</div>}>
                <Card src={c.image} id={c.id} title={c.name} qty={c.quantity} />
              </Suspense>
            ))
          ) : (
            <h1>Nothing to Show</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWrapper;
