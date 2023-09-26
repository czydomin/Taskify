"use client";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Select from "./Select";

export default function Item({ task, onConfirm }) {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);

  return (
    <li className="border border-1 flex justify-between p-2" key={task.title}>
      <div>
        {task.title}

        {isOpen === true && (
          <div className="flex gap-4 items-end ">
            <Select
              valueSelect={updatedStatus}
              onChangeSelect={(newValue) => {
                setUpdatedStatus(newValue);
              }}
            />
            <CheckIcon
              onClick={() => {
                onConfirm(task.id, updatedStatus);
              }}
              className=" h-6 w-6"
            />
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen === true && (
          <div className="flex flex-col  items-end gap-2">
            <span>{task.desc}</span>

            <ArrowUpIcon />
          </div>
        )}
        {isOpen === false && <ArrowDownIcon />}
      </button>
    </li>
  );
}
