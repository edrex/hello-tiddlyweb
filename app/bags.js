import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <ul>
        {this.props.bags.map(bag => 
          <li key={bag}><a href={`bags/${bag}`}>{bag}</a></li>
        )}
      </ul>
    )

  }
}
