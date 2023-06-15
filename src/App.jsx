import "./App.css";
import { GrSearch } from "react-icons/gr";

// hal ko lagi yo component use vaxaina

function App() {
  const activeLink =
    "hover:cursor-pointer hover:bg-pink-600 w-full h-14 flex justify-start items-center text-white pl-4 font-semibold bg-pink-600";
  const normalLink =
    "hover:cursor-pointer hover:bg-pink-600 w-full h-14 flex justify-start items-center text-white pl-4 font-semibold";

  return (
    <>
      <form action="">
        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="search"
            autoComplete="off"
            aria-label="search"
            className="px-3 py-2 font-semibold placeholder:gray-500 rounded-md border-no ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
          <GrSearch className="h-6 w-6 absolute" />
        </div>
      </form>

      <div>
        <NavLink
          to={item.path}
          className={({ isActive }) => {
            isActive ? activeLink : normalLink;
          }}
        >
          <span>{item.title}</span>
        </NavLink>
      </div>
    </>
  );
}

export default App;
