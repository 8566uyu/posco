import React from 'react';
// import {Component} from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
// 클래스형 컴포넌드 render() 함수 필수
  render () {
    console.log(this.props)
    const {name, age} = this.props

    return (
      <div>
        <h1>Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>

      </div>
    )
}

}

ClassComponent.defaultProps = {
  name: '울랄라라',
  age: '334'
}

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string
}
export default ClassComponent;
