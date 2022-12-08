import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faClose,
  faRoadCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="todo">
      <p className="p">{todo.text}</p>
      <div className="todo__option">
        <button className="todo_option" onClick={() => completeTodo(index)}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <button className="todo_option" onClick={() => removeTodo(index)}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
};
export default Todo;
