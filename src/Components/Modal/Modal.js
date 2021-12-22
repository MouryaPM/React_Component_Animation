import "./Modal.css";
import CSSTransition from "react-transition-group/CSSTransition";
const animateTiming = {
  entry: 300,
  exit: 1000,
};
const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animateTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-in"
    >
      {/**
        fade-in-enter  fade-in-enter-active
        fade-in-exit fade-in-exit-active
     */}
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
