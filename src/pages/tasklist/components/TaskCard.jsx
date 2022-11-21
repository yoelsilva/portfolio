import { Card, FormCard } from "../styles/TaskCardStyle";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const Taskcard = ({ task }) => {
  const { deleteTask, updateTask } = useContext(TaskContext);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(task)

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleButtonUpdate = () => {
    setUpdate(true);
  };

  const handleUpdate = ()=>{
    updateTask(data);
    setUpdate(false);
  }

  const handleUpdateTitle = (e)=> {
    setData({...data,title:e.target.value})
  }

  const handleUpdateDescription = (e)=> {
    setData({...data,description:e.target.value})
  }



  return !update ? (
    <Card>
      <h3>{task.title}</h3>
      <h5>{task.description}</h5>
      <button onClick={handleButtonUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </Card>
  ) : (
    <FormCard>
      <input value={data.title} onChange={handleUpdateTitle} />
      <textarea rows={3} value={data.description} onChange={handleUpdateDescription} />
      <button onClick={handleUpdate}>Update</button>
    </FormCard>
  );
};

export default Taskcard;
