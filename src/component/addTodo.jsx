import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Modal from "./modal";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
            <div>인풋</div>
            <div>달력</div>
          </Modal>
        </div>
      </form>
    </>
  );
};
export default AddTodo;
