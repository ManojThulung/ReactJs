function Modal(props) {
  const cancelHandler = () => {
    props.onCancel();
  };
  return (
    <div className="modal">
      <h2>Are You Sure?</h2>
      <button className="btn btn--alt" onClick={props.onConfirm}>
        Hell Yeah
      </button>
      <button className="btn" onClick={cancelHandler}>
        Not Sure
      </button>
    </div>
  );
}

export default Modal;
