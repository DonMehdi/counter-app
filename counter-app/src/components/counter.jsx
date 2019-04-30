import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imgUrl: "https://picsum.photos/200",
    tags: ["Tag1", "Tag2", "Tag3"]
  };

  style = {
    fontWeight: "bold",
    fontSize: 10,
    padding: 10
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement(product) {
    console.log("handlae increment");
    // this.state.count++; //not working in react like Angular (binding)
    console.log(this);
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //   onClick={this.handleIncrement.bind(this)} commented since onclick takes a fucntion ref so we cannot pass parameter
          onClick={() => {
            this.handleIncrement();
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}

        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(params) {
    const { value } = this.state;
    return value === 0 ? "ZERO" : value;
  }
}

export default Counter;
