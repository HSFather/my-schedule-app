import "./Todo.css";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <>
      <div className="todo_wrap">
        <div className="todo_content">
          <p className="todo_text">{todo.date}</p>
          <p className="todo_text">{todo.text}</p>
        </div>
        <div className="todo_buttons">
          <button className="todo_button" onClick={() => completeTodo(index)}>
            완료버튼
          </button>
          <button className="todo_button" onClick={() => removeTodo(index)}>
            삭제버튼
          </button>
        </div>
      </div>
    </>
  );
}
