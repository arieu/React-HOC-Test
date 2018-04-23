import React from "react";

const HOC = propName => WrappedComponent => {
  return class HOC extends React.Component {
    isEmpty(prop) {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty("length") && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      );
    }
    "";

    render() {
      const myProps = {
        name: "teststsat"
      };

      return this.isEmpty(this.props[propName]) ? (
        <div>Sorry no props yet</div>
      ) : (
        <WrappedComponent {...this.props} {...myProps} />
      );
    }
  };
};

export default HOC;
