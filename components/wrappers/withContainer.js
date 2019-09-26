import { Subscribe } from 'unstated';
import React, { Fragment } from 'react';

function withContainers(Containers) {
  return function(Component) {
    return class ComponentWithContainer extends React.Component {
      render() {
        return (
          <Subscribe to={Containers}>
            {(...containers) => {
              const containerObject = {};
              Object.values(containers).forEach(container => {
                let key = container.key;
                if (!key) {
                  key = container.constructor.name;
                }
                containerObject[key] = container;
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
