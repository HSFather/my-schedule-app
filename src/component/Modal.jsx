import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./modal.css";

export default function Modal({ open, close, addTodo, }) {
  const [value, setValue] = useState("");
  const [date, setDate] = useState([new Date(), new Date()]);

  const renderDateRange = () => {
    if (date && date.length === 2) {
      return (
        <p>
          {date[0].toLocaleDateString()} ~ {date[1].toLocaleDateString()}
        </p>
      );
    } else {
      return <p>날짜를 선택해주세요</p>;
    }
  };

  const handleChangeCalendar = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    addTodo({ text: value, date: moment(date).format("YYYY년 MM월 DD일") });
    setValue("");

    close();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>
              날짜 선택
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <label htmlFor=""></label>
              <input
                className="calendar_input"
                type="text"
                value={value}
                placeholder="할 일을 입력하세요"
                onChange={(e) => setValue(e.target.value)}
              />
              <div>
                <DateRangePicker
                  value={date}
                  onChange={handleChangeCalendar}
                  // selectRange={true}
                />
                <div className="">{renderDateRange()}</div>
              </div>
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
