import React from "react";

class ClassComponent extends React.Component {
  //state 오브젝트
  state = {
    counter: 0,
  };
  up = () => {
    //this.counter = this.counter + 1;
    this.setState({ counter: this.state.counter + 2 });
  };
  down = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  //클래스형 컴포넌트 render() 함수 필수
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h5>{counter}</h5>
        <button onClick={() => this.up("abc")}>숫자업</button>
        <button onClick={() => this.down("abc")}>숫자다운</button>
      </div>
    );
  }
}
export default ClassComponent;
