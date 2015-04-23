import React from 'react';
import LL from './localLink';

export default class extends React.Component {
  render() {
    return (
      <nav>
        <LL href="/">Start</LL> |&nbsp;
        <LL href="/bags">Bags</LL>
      </nav>
    )
  }
}
