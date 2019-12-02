import { Subscribe } from "unstated";
import React, { Fragment } from "react";

function withContainers(Containers) {
  return function(Component) {
    return class ComponentWithContainer extends React.Component {
      render() {
        return (
          <Subscribe to={Containers}>
            {(...containers) => {
              const containerObject = {};
              containers.forEach((container, index) => {
                var a = "globalState";
                containerObject[a] = container;
              });

              return <Component {...containerObject} {...this.props} />;
            }}
          </Subscribe>
        );
      }
    };
  };
}

export default withContainers;
