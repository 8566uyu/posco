import React from "react";

class Handler_ex extends React.Component {
  state = {
    name: "Hello World",
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <button
          onClick={(Bye) => {
            this.setState({ name: "Bye World" });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}

export default Handler_ex;
