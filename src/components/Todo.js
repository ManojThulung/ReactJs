import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modelOpen, setModalOpen] = useState(false);

  const deleteHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modelOpen && <Backdrop onChange={closeModalHandler} />}
    </div>
  );
}

export default Todo;
