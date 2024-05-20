import React from "react";

const Taskstodo = (props) => {

    
  return (
    <div>
      <ol>
        {props.tasks.map((curEle) => {
          return (
            <div className="liitem" key={curEle.id}>
              <li>{curEle.name} </li>
              <i
                class="fa-regular fa-rectangle-xmark fa-rotate-90"
                onClick={() => {
                  props.todotask(curEle.id);
                }}
              ></i>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Taskstodo;
