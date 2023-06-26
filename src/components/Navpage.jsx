import React from "react";
import { Route, Routes } from "react-router-dom";

import CardWrapper from "./CardWrapper";

import SingleComponent from "./SingleComponent";
import Search from "./Search";

const Navpage = ({ getAllData }) => {
  const uniqueCategories = [
    ...new Set(getAllData.map((item) => item.category)),
  ];
  const uniqueTitle = [...new Set(getAllData.map((item) => item.name))];
  return (
    <React.Fragment>
      <section className="min-h-screen ">
        <Routes>
          {/* <Route path="/admin" element={<CardWrapper 
          list={basic_electrical}
          
          />} /> */}
          <Route path="/" element={<Search />} />

          {uniqueCategories.map((item, index) => (
            <Route
              key={index}
              path={`/${item}`}
              element={
                <CardWrapper
                  list={getAllData.filter((i) => i.category === item)}
                  base_title={item}
                />
              }
            />
          ))}
          {uniqueTitle.map((item, index) => (
            <Route
              key={index}
              path={`/${item}/:id`}
              element={
                <SingleComponent
                  list={getAllData.filter((i) => i.name === item)[0]}
                  base_title={item}
                />
              }
            />
          ))}

          <Route
            path="/"
            element={
              <CardWrapper
                list={getAllData.filter(
                  (i) => i.category === uniqueCategories[0]
                )}
                base_title={uniqueCategories[0]}
              />
            }
          />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default Navpage;
