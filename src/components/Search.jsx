import React, { Suspense, useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
const Card = React.lazy(() => import("./Card.jsx"));

import { getAllComponents } from "./hooks/getComponents";

const Search = () => {
  const [query, setQuery] = useState("");
  const [allLists, setAllLists] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const { data } = getAllComponents();
  useEffect(() => {
    if (data) {
      let l = data.filter((a) => a.name.toLowerCase().includes(query));
      setAllLists(l);
    }
  }, [data, query]);

  return (
    <div className="flex flex-col justify-center  ">
      <div className="flex justify-center">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Search"
          className="p-1  w-1/3 pl-2 bg-white border-2 rounded-md
    text-black focus:outline-none my-6 border-bl"
        />
        <GrSearch className="h-6 w-6 relative right-8 mt-8 mr-3 search " />
      </div>
      <div
        className="w-full grid grid-cols-2 sm:grid-cols-3 
          gap-8 text-center py-8 px-8  "
      >
        {allLists.length > 0 ? (
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
