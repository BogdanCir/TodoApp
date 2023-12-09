import React, { useState, useEffect, createContext } from "react";

export const TaskContext = createContext();
function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  useEffect(() => {
    setFilteredTasks(
      tasks?.filter((task) =>
        task?.name.toLowerCase().includes(search?.toLowerCase())
      )
    );
  }, [search, setFilteredTasks, tasks]);
  return (
    <TaskContext.Provider
      value={{
        task: [tasks, setTasks],
        filterTask: [filteredTasks, setFilteredTasks],
        searchParan: [search, setSearch],
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContextProvider;
