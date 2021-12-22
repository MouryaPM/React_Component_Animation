import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List/List";
import Backdrop from "./Components/Backdrop/Backdrop";
import Modal from "./Components/Modal/Modal";
import { Component } from "react";
import Transition from "react-transition-group/Transition";
class App extends Component {
  state = { modalIsOpen: false, showBlock: false };
  showModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div className="App">
        <h1>React Animation</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
          className="Button"
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("Enter")}
          onEntering={() => console.log("Enetering")}
          onEntered={() => console.log("Entered")}
          onExit={() => console.log("Exit")}
          onExiting={() => console.log("Exiting")}
          onExited={() => console.log("Exited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 0.3s ease-out",
                opacity: state === "exited" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal.bind(this)}
        />

        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <Modal show={state} closed={this.closeModal.bind(this)} />
          )}
        </Transition> */}
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal.bind(this)}>
          Open Modal
        </button>
        <h2>Animating List</h2>
        <List />
      </div>
    );
  }
}

export default App;
