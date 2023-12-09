import React from "react";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
function Search() {
  const { searchParan } = useContext(TaskContext);
  const [, setSearch] = searchParan;
  return (
    <div className="flex flex-col lg:pl-[100px] lg:flex-row lg:justify-between lg:align-baseline">
      <div className="lg:pr-96 text-2xl">Task Manager App</div>
      <div className="mt-1">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="filtrare..."
          type="text"
          autoComplete="off"
          name="text"
          className="w-[200px] lg:w-[350px] border"
        />
      </div>
    </div>
  );
}
export default Search;
