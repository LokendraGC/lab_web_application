import React, { Suspense, useEffect, useMemo, useState } from "react";
import { GrSearch } from "react-icons/gr";
const Card = React.lazy(() => import("./Card.jsx"));

import { getAllComponents } from "./hooks/getComponents";
import Footer from "./Footer";

const Search = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    let timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);
  };

  const { data } = getAllComponents();

  const allLists = useMemo(() => {
    if (data) {
      let l = data.filter((a) => a.name.toLowerCase().includes(query));
      return l;
    }
  }, [query, data]);

  return (
    <div
      className=" max-sm:ml-5 -mt-4 max-w-screen-lg mx-auto pr-8 flex flex-col 
    justify-center w-full h-full text-white "
    >
      <div className="flex justify-center mb-2 ml-7 md:ml-0">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Search"
          className="p-1  w-full md:w-1/3 pl-2 bg-white border-2 rounded-md
    text-black focus:outline-none my-6 border-bl"
        />
        <GrSearch className="h-6 w-6 relative right-8 mt-8 mr-3 search " />
      </div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3 
          gap-8 text-center px-8  "
      >
        {allLists && allLists.length > 0 ? (
          allLists.map((c) => (
            <Suspense key={c.id} fallback={<div>Loading</div>}>
              <Card
                src={c.image}
                id={c.id}
                title={c.name}
                qty={c.quantity}
                category={c.category}
              />
            </Suspense>
          ))
        ) : (
          <h1>Nothing to Show</h1>
        )}
      </div>
    </div>
  );
};

export default Search;
