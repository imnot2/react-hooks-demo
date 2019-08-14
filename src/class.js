import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      randomNumber: undefined,
      isLoading: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDocumentScroll = this.handleDocumentScroll.bind(this);
  }
  handleClick() {
    const { isLoading } = this.state;
    if (isLoading) return;
    this.fetchRandom();
  }
  handleDocumentScroll() {
    //do somethings
  }
  fetchRandom() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        randomNumber: (Math.random() * 100) | 0,
        isLoading: false
      });
    }, 2000);
  }
  render() {
    const { randomNumber, isLoading } = this.state;

    return (
      <div>
        <h1>class component</h1>
        {randomNumber !== undefined ? <>randomNumber: {randomNumber}</> : null}
        <button disable={isLoading} onClick={this.handleClick}>
          {isLoading ? "loading..." : "refresh"}
        </button>
      </div>
    );
  }

  componentDidMount() {
    document.title = `randomNumber  is ${this.state.randomNumber}`;
    document.addEventListener("scroll", this.handleDocumentScroll);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.randomNumber !== this.state.randomNumber) {
      document.title = `randomNumber  is ${this.state.randomNumber}`;
    }
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleDocumentScroll);
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
