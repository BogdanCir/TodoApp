import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import Search from "./Search";
import CreateTask from "./CreateTask";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
function Homepage() {
  const { task, filterTask } = useContext(TaskContext);
  const [tasks] = task;
  const [filteredTasks] = filterTask;
  const [toggle, setToggle] = useState(false);
  // console.log(tasks);

  return (
    <div>
      <div className="h-auto">
        <div className="flex flex-col items-center mx-auto lg:flex-row mt-[40px] lg:justify-between">
          <div>
            <Search />
          </div>
          <div className="m-4 lg:pr-[80px] lg:flex">
            <button
              onClick={() => setToggle(!toggle)}
              type="submit"
              className="w-[150px] m-1 border"
            >
              CREATE TASK
            </button>
          </div>
          <span className="flex lg:hidden">
            <div className="flex justify-center"></div>
            {toggle ? <CreateTask /> : <></>}
          </span>
        </div>
        <div className="flex flex-row pt-[60px] justify-around">
          <div className="border flex flex-row flex-wrap justify-around p-12 overflow-y-auto w-[500px] max-h-[500px] mb-10 lg:w-[1200px] lg:h-[600px] shadow-lg">
            {filteredTasks.length > 0
              ? filteredTasks.map((task, index) => (
                  <Card
                    key={index}
                    id={task.id}
                    name={task.name}
                    status={task.status}
                    shortDescription={task.shortDescription}
                    data={task.data}
                    longDescription={task.longDescription}
                  />
                ))
              : tasks.map((task, index) => (
                  <Card
                    key={index}
                    id={task.id}
                    name={task.name}
                    status={task.status}
                    shortDescription={task.shortDescription}
                    data={task.data}
                    longDescription={task.longDescription}
                  />
                ))}
          </div>
          <span className=" hidden  lg:flex lg:flex-col ">
            <div className="flex justify-center"></div>
            {toggle ? <CreateTask /> : <></>}
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Homepage;
