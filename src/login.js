import React, { useState } from "react";
import Input from "./input";
import Taskstodo from "./tasks";

const Login = () => {
  const [tasks, setTask] = useState([]);

  // to add item function is here 

  function addItem(inputText) {
    if (!inputText) {
      alert("Please enter a valid task");
    } else {
      const myNewText = {
        id: new Date().getTime().toString(),

        name: inputText,
      };
      setTask((prevValue) => {
        return [...prevValue, myNewText];
      });
    }
  }
  // /to  delete item function is here
  const deleteItem = (index) => {
    const updatedList = tasks.filter((curEle) => {
      return curEle.id !== index;
    });

    setTask(updatedList);
  };

  return (


    // code to be excecuted 
    <>
      <div className="head">
        <h1>To do List</h1>
      </div>
      <div className="body">
        <Input onAdd={addItem} />

        <div className="tasks">
          <h3>Your Tasks</h3>

          <Taskstodo todotask={deleteItem} tasks={tasks}/>
        </div>
      </div>
    </>
  );
};

export default Login;
