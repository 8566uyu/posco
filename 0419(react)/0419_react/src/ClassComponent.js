import React from "react";
//import { Component } from 'react';
import PropTypes from "prop-types";
class ClassComponent extends React.Component {
  //state 오브젝트
  state = {
    counter: this.props.age,
  };
  up = (name) => {
    console.log(name);
    //this.counter = this.counter + 1;
    this.setState({ counter: this.state.counter + 1 });
  };
  //클래스형 컴포넌트 render() 함수 필수
  render() {
    console.log(this.props);
    //this.props = { name: "홍길동", age: "13"}
    const { name, age } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
        <h5>{counter}</h5>
        <button onClick={() => this.up("abc")}>숫자업</button>
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  name: "abc",
  age: "11",
};
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};
export default ClassComponent;
