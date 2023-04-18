// import React from 'react';
import PropTypes from "prop-types";
import ClassComponent from "./ClassComponent";

function FunctionComponent({ name, age }) {
  return (
    <div>
      <h1>Function Component</h1>
      <h5>{name}</h5>
      <h5>{age}</h5>
    </div>
  );
}

// const FunctionComponent = () => {
//   return (
//     <div>
//       <h1>Function Component</h1>
//     </div>
//   );
// }

FunctionComponent.defaultProps = {
  name: "삐리리리",
  age: "435",
};

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};
export default FunctionComponent;
