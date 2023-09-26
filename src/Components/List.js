import Item from "./Item";
export default function List({ taskList, taskStatus, onConfirm }) {
  return (
    <ul className="text-white flex flex-col w-1/4 gap-4">
      <h1 className="text-3xl">{taskStatus}</h1>
      {taskList
        .filter((task) => {
          return task.status === taskStatus;
        })
        .map((task) => {
          return <Item key={task.title} task={task} onConfirm={onConfirm} />;
        })}
    </ul>
  );
}
