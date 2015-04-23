import React from 'react';

import LL from './localLink';

export default class extends React.Component {
  render() {
    return (
      <ul>
        {this.props.bags.map(bag => 
          <li key={bag}>
            <LL href={`/bags/${bag}`}>{bag}</LL>
          </li>
        )}
      </ul>
    )

  }
}
