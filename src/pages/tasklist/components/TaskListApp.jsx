import { TaskContextProvider } from "../context/TaskContext";
import Navbar from "./Navbar";
import Tasklist from "./TaskList";
import Wrapper from "./Wrapper";

const TaskListApp = () => {
  return (
    <>
      <TaskContextProvider>
        <Navbar />
        <Wrapper />
        <Tasklist />
      </TaskContextProvider>
    </>
  );
};

export default TaskListApp;
