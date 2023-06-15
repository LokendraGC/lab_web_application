import React, { Suspense, useState } from "react";
import { useUserStore } from "../../store.jsx";
import { useEffect } from "react";
const Card = React.lazy(() => import("./Card.jsx"));

const CardWrapper = ({ base_title, list }) => {
  const [allLists, setAllLists] = useState([]);
  const query = useUserStore((state) => state.query);
  useEffect(() => {
    if (list) {
      let l = list.filter((a) => a.name.toLowerCase().includes(query));
      setAllLists(l);
    }
  }, [list, query]);

  return (
    <div className="">
      <div
        className="max-w-screen-lg mx-auto pr-8 flex flex-col 
           justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold inline px-8  border-gray-500">
            {base_title}
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
          gap-8 text-center py-8 px-8  "
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
