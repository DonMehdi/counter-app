import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 3 }, { id: 3, value: 4 }]
  };

  handleReset = () => {
    const c = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: c });
  };

  handleIncrement = c => {
    const counters = [...this.state.counters];
    counters[counters.indexOf(c)].value++;
    this.setState(counters);
    console.log(c);
    //  c.value++;
    // this.setState({ counters: c });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
