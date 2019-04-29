import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["Tag1", "Tag2", "Tag3"]
  };

  style = {
    fontWeight: "bold",
    fontSize: 10
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
    this.setState({ count: this.state.count + 1 });
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
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(params) {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
