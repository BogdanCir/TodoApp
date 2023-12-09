import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
function Card(props) {
  const { task } = useContext(TaskContext);

  const [tasks, setTasks] = task;
  function deleteTask() {
    const remainingTasks = tasks.filter((task) => props.id !== task.id);
    setTasks(remainingTasks);
  }
  return (
    <div className="p-4">
      <div>
        <div className="border w-[300px] h-[350px] pl-[10px] pb-[25px] shadow-2xl ">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex flex-row justify-around">
                <div className="text-xl font-bold">{props.name}</div>
                <div className="text">{props.status}</div>
              </div>
            </div>
            <div className="flex justify-center ">{props.shortDescription}</div>

            <div className="flex justify-center pt-20">
              <button
                onClick={deleteTask}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                DELETE
              </button>
            </div>
            <div className="flex justify-around">
              <div>
                <Link to={`/task/${props.id}`}>view details...</Link>
              </div>
              {props.data}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
