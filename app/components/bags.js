import React from 'react';

import LocalLink from './localLink';

export default class extends React.Component {
  render() {
    return (
      <ul>
        {this.props.bags.map(bag => 
          <li key={bag}>
            <LocalLink href={`/bags/${bag}`}>{bag}</LocalLink>
          </li>
        )}
      </ul>
    )

  }
}
