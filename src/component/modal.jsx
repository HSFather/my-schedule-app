function Modal({ setOpenModal }) {
  const [change, setChage] = useState(new Date());
  const [values, setValue] = useState("");

  return (
    <>
      <div className="modal_background">
        <div className="modal_container">
          <input
            type="text"
            className="modal_input"
            placeholder="Add here"
            value={values}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
