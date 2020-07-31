class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      answer: 0,
    };
  }
  changeX = (event) => {
    this.setState({
      x: Number(event.target.value),
    });
  };
  changeY = (event) => {
    this.setState({
      y: Number(event.target.value),
    });
  };
  handleAdd = (event) => {
    this.setState((state, props) => ({
      answer: state.x + state.y,
    }));
  };
  handleMultiply = (event) => {
    this.setState((state, props) => ({
      answer: state.x * state.y,
    }));
  };

  handleDivide = (event) => {
    this.setState((state, props) => ({
      answer: state.x / state.y,
    }));
  };

  handleSubtract = (event) => {
    this.setState((state, props) => ({
      answer: state.x - state.y,
    }));
  };

  render() {
    return (
      <div>
        <h1>My Calculator</h1>
        <form>
          <label>X Input</label>
          <input type="number" onChange={this.changeX} />
          <br />
          <label>Y Input</label>
          <input type="number" onChange={this.changeY} />
        </form>
        <button onClick={this.handleAdd}> + </button>
        <button onClick={this.handleSubtract}> - </button>
        <button onClick={this.handleMultiply}> * </button>
        <button onClick={this.handleDivide}> / </button>
        <h3>{this.state.answer}</h3>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
