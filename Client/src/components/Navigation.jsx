import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <div>
      <Link to="/task">
        <h1>Task App</h1>
      </Link>
      <Link to="/task-create">Create Tasl</Link>
    </div>
  );
}
