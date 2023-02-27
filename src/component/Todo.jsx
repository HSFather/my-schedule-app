export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
      <p>
        {todo.renderDateRange}
        {todo.text}
      </p>

      <div>
        <button onClick={() => completeTodo(index)}>완료버튼</button>
        <button onClick={() => removeTodo(index)}>삭제버튼</button>
      </div>
    </div>
  );
}
