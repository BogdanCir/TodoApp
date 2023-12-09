import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
function CreateTask() {
  const { task } = useContext(TaskContext);

  const [, setTasks] = task;
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [shortD, setShortD] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("ro-RO"));
  const [longD, setLongD] = useState("");

  const sendData = (event) => {
    event.preventDefault();
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      status: status,
      data: date,
      shortDescription: shortD,
      longDescription: longD,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <form className="flex flex-col ">
      <input
        onChange={(e) => setName(e.target.value)}
        name="name"
        value={name}
        placeholder="name..."
        title="name"
        className="w-[250px]  my-5 border"
        type="text"
      />
      <input
        onChange={(e) => setStatus(e.target.value)}
        name="status"
        title="status"
        placeholder="status..."
        value={status}
        className="w-[250px] mb-5 border"
        type="text"
      />
      <input
        onChange={(e) => setShortD(e.target.value)}
        name="shortDescription"
        value={shortD}
        placeholder="short description"
        // maxLength={30}
        className="w-[250px] mb-5 border"
        type="text"
      />
      <input
        onChange={(e) => setDate(e.target.value)}
        value={date}
        name="date"
        className="w-[250px] mb-5 border"
        type="date"
      />
      <input
        onChange={(e) => setLongD(e.target.value)}
        name="longDescription"
        value={longD}
        placeholder="long description..."
        className="w-[250px] mb-5 border"
        type="text"
      />
      <div className="flex justify-center">
        <button className="w-[150px]   mb-5 border" onClick={sendData}>
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default CreateTask;
