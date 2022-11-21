import { Container } from "../styles/WraperStyle";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Wrapper = () => {
  const { addTask } = useContext(TaskContext);

  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue({title:"",description:""})
  };

  const handleTitle = (e) => {
    setInputValue({ ...inputValue, title: e.target.value });
  };

  const handleDescription = (e) => {
    setInputValue({ ...inputValue, description: e.target.value });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Insert New task</h3>
        <input
          type="text"
          onChange={handleTitle}
          placeholder="Title"
          value={inputValue.title}
        ></input>
        <textarea
          name=""
          id=""
          rows="5"
          onChange={handleDescription}
          placeholder="Descripion for this Task"
          value={inputValue.description}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default Wrapper;
