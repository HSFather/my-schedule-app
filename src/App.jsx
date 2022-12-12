import React, { useEffect, useState } from "react";
import AddTodo from "./component/addTodo";
import Todo from "./component/todo";

const App = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "redux 배우기", complete: false },
    { id: 2, text: "typescript 배우기 ", complete: false },
    { id: 3, text: "react 배우기", complete: false },
  ]);

  useEffect(() => {
    if (todos.length > 10) {
      setTodos(todos.slice(0, 10));
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: Date.now(), text, complete: false }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    todos[index].complete = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app_container">
      <div>
        <AddTodo addTodo={addTodo} />
      </div>
      <hr />
      <div>
        {todos.map((todo, index) =>
          todo.complete === false ? (
            <Todo
              key={index.id}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ) : (
            ""
          )
        )}
      </div>
      <hr />
      <div>
        {todos.map((item) =>
          item.complete === true ? (
            <li className="completed_list">{item.text}</li>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default App;
