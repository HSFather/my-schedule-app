import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import Modal from "./modal";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  useEffect(() => {
    if (value.length > 20) {
      setValue(value.slice(0, 20));
    }
  }, [value]);

  return (
    <>
      <form className="todo_input" onSubmit={handleSubmit}>
        <div className="todo_head">
          추가하기{" "}
          <button className="add_btn" onClick={openModal}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <Modal open={modalOpen} close={closeModal} header="스케쥴 추가하기">
            <form onSubmit={handleSubmit}>
              <div className="modal_input">
                <label htmlFor="">해야 할 일</label>
                <input
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="please add task"
                />
                <button type="submit" disabled={value.length < 1}>
                  Submit
                </button>
              </div>
              <div className="calendar">
                <Calendar onChange={setDate} value={date} />
              </div>
            </form>
          </Modal>
        </div>
      </form>
    </>
  );
};
export default AddTodo;
