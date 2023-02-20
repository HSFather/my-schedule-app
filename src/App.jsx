import React, { useEffect, useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import Todo from "./Todo";
import Modal from "./Modal";
import CompletedTodo from "./completedTodo";

function App(props) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "놀러가기",
      complete: false,
    },
    {
      id: 2,
      text: "잠자기",
      complete: false,
    },
    {
      id: 3,
      text: "먹기",
      complete: false,
    },
  ]);

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
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <button onClick={openModal}>추가하기</button>
        <Modal open={modalOpen} close={closeModal} addTodo={addTodo}></Modal>
      </div>
      <div>
        {todos.map((todo, index) =>
          todo.complete === false ? (
            <Todo
              key={todo.id}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              onchange={onchange}
            />
          ) : (
            ""
          )
        )}
      </div>
      <hr />
      <div>
        <h1>완료목록</h1>
        {todos.map((item) =>
          item.complete === true ? (
            <CompletedTodo item={item} key={item.id} />
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}

export default App;
