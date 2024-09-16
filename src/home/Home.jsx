import React, { useEffect, useState } from "react";
import Create from "../createForm/Create";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { BsCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import "./style.scss";

function Home() {
  const [todos, setTodos] = useState([]);
  const query = useParams();
  //direct can be http://localhost:3001/
  useEffect(() => {
    axios
      .get(`https://todolistbe-whmw.onrender.com/get/` + query.date)
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, [query.date]);

  // Update state directly instead of reloading
  const checkHandler = (id) => {
    axios
      .put(`https://todolistbe-whmw.onrender.com/check/` + id)
      .then(() => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo._id === id ? { ...todo, done: !todo.done } : todo
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = (id) => {
    axios
      .delete("https://todolistbe-whmw.onrender.com/delete/" + id)
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleTaskAdded = (newTask) => {
    setTodos((prevTodos) => [...prevTodos, newTask]);
  };

  return (
    <div className="container">
      <div className="body">
        <div className="date">
          <h2>{query.date}</h2>
        </div>
        <Create date={query.date} onTaskAdded={handleTaskAdded}/>

        {todos.length === 0 ? (
          <div>
            <h2>No task</h2>
          </div>
        ) : (
          <div className="tasks">
            {todos.map((todo, index) => (
              <div key={index} className="task">
                <div
                  className="checkBox"
                  onClick={() => checkHandler(todo._id)}
                >
                  {todo.done ? <BsCheckCircleFill /> : <BsCircleFill />}
                  {todo.task}
                </div>
                <MdDelete onClick={() => deleteHandler(todo._id)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
