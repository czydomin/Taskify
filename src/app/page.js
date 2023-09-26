"use client";
import { useState } from "react";
import List from "/src/Components/List.js";
import Select from "~/Components/Select";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([
    { id: 1, title: "read a book", desc: "Pan Kleks", status: "Done" },
    {
      id: 2,
      title: "clean the house",
      desc: "bla bla bla",
      status: "In Progress",
    },
    { id: 3, title: "shopping", desc: "grocery", status: "To do" },
  ]);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To do");

  function handleOnConfirm(taskId, updatedStatus) {
    console.log(taskId);

    const updateList = taskList.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          status: updatedStatus,
        };
      }
      console.log(updatedStatus);
      return task;
    });
    setTaskList(updateList);
  }

  return (
    <main className="flex flex-col gap-4 my-2 mx-2">
      <h1 className="text-5xl">Taskify</h1>
      <div className="flex  gap-4">
        <input
          className="text-black"
          type="text"
          placeholder="task name"
          value={taskName}
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
        />
        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          className="text-black w-96"
          placeholder="description..."
        ></textarea>

        <Select
          valueSelect={status}
          onChangeSelect={(newValue) => {
            setStatus(newValue);
          }}
        />

        <button
          onClick={() => {
            const newTask = {
              title: taskName,
              desc: description,
              status: status,
              id: uuidv4(),
            };
            setTaskList([...taskList, newTask]);

            setTaskName("");
            setDescription("");
            setStatus("To do");
          }}
          className="border border-1 p-2"
        >
          Add task
        </button>
      </div>
      <div className="flex  gap-4 ">
        <List
          taskList={taskList}
          taskStatus="To do"
          onConfirm={handleOnConfirm}
        />
        <List
          taskList={taskList}
          taskStatus="In Progress"
          onConfirm={handleOnConfirm}
        />
        <List
          taskList={taskList}
          taskStatus="Done"
          onConfirm={handleOnConfirm}
        />
      </div>
    </main>
  );
}
