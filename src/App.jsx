import React, { useState } from "react";
import Todo from "./component/Todo";
import Modal from "./component/Modal";
import CompletedTodo from "./component/completedTodo";
import "./App.css";
// import "react-calendar/dist/Calendar.css";

/* todo
{
  task: "밥 먹기",
  from : Date,
  to: Date,
  complte: false,
  fail, false,
  created: Date
}
*/

// const displayDate = (date) => {
//   return moment(date).format("")
// }

function App(props) {
  const [todos, setTodos] = useState([]);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  const handleOpenCalendarModal = () => {
    setCalendarModalOpen(true);
  };

  const handleCloseCalendarModal = () => {
    setCalendarModalOpen(false);
  };

  const addTodo = ({ text, renderDateRange }) => {
    const newTodos = [...todos, { text, renderDateRange, complete: false }];

    setTodos(newTodos);
  };

  // map으로 바꾸기
  const completeTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          complete: true,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    const newTodos = todos.filter((todo, i) => i !== index);

    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>

      <div>
        <button onClick={handleOpenCalendarModal}>추가하기</button>
        <Modal
          open={calendarModalOpen}
          close={handleCloseCalendarModal}
          addTodo={addTodo}
        ></Modal>
      </div>

      <div>
        {todos.map((todo, index) =>
          todo.complete === false ? (
            <Todo
              key={index}
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
