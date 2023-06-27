import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Details from "./components/Details";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Add_Compo from "./components/Add_Components";
import Admin_Create_User from "./components/Admin_Create_User";
import CheckOut from "./components/CheckOut";
import Assign_Compo from "./components/Assign_Compo";
import AdminCheckOut from "./components/Admin_CheckOut";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./components/Search";
import UpdateUser from "./components/Settings/UpdateUser";
import About from "./components/About";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools className="absolute bottom-0" initialIsOpen={false} />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen overflow-hidden flex flex-col ">
          <Routes>
            <Route path="/checkout" element={<AdminCheckOut />} />
            <Route path="/assigned" element={<Assign_Compo />} />
            <Route path="/assigned/:id" element={<CheckOut />} />
            <Route path="/createuser" element={<Admin_Create_User />} />
            <Route path="/addcompo" element={<Add_Compo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/details" element={<Details />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings/updateuser" element={<UpdateUser />} />
            <Route path="/*" exact element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
