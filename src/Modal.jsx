import { useState } from "react";
import { Calendar } from "react-calendar";
import "./modal.css";
import moment from "moment";

export default function Modal(props) {
  const [date, onChange] = useState(new Date());
  const { open, close, header, addTodo } = props;
  const [value, setValue] = useState("");

  const onchange = (date) => onChange(date);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    console.log(value);
    addTodo(value);
    setValue("");
    // submit으로 data 전송 후 modal 창을 close 한다.
    close();
  };
  console.log(date);

  return (
    <form onSubmit={handleSubmit}>
      <div className={open ? "openModal modal" : "modal"}>
        {" "}
        {open ? (
          <section>
            <header>
              날짜 선택
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <label htmlFor="">오늘 할 일</label>
              <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Calendar value={date} onChange={onchange} />
              <div className="">{moment(date).format("YYYY년 MM월 DD일")}</div>
            </main>
            <footer>
              <button className="modal_submit">Submit</button>
              <button className="close" onClick={close}>
                Close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </form>
  );
}
