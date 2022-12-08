import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
          <p className="form_p">추가하기</p>
          <button
            className="add_btn"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>
    </>
  );
};
export default AddTodo;
