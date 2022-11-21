import { useContext } from "react";
import Taskcard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { Tasks } from "../styles/TaskListStyle";

const TaskList = () => {
  const { tasks, search } = useContext(TaskContext);

  return (
    <Tasks>
      {tasks.length === 0
        ? "There aren´t Tasks yet "
        : search === ""
        ? tasks.map((task) => <Taskcard key={task.id} task={task} />)
        : tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase())).length === 0
        ? "Not Found".toUpperCase()
        : tasks
            .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
            .map((task) => <Taskcard key={task.id} task={task} />) ||
          "Sin resultados"}
    </Tasks>
  );
};

export default TaskList;
