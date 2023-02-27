import moment from "moment";
export default function CompletedTodo({ item, date }) {
  return (
    <div>
      <p>
        {moment(date).format("YYYY년 MM월 DD일")}
        {item.text}
      </p>
    </div>
  );
}
