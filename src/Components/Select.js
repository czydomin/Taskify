export default function Select({ valueSelect, onChangeSelect }) {
  const statuses = ["To do", "In Progress", "Done"];

  return (
    <select
      value={valueSelect}
      onChange={(event) => {
        onChangeSelect(event.target.value);
      }}
      className="text-black"
    >
      {statuses.map((status) => {
        return (
          <option key={status} value={status}>
            {status}
          </option>
        );
      })}
    </select>
  );
}
