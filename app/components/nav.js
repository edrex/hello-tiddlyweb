import React from 'react';
import LocalLink from './localLink';

export default class extends React.Component {
  render() {
    return (
      <nav>
        <LocalLink href="/">Start</LocalLink> |&nbsp;
        <LocalLink href="/bags">Bags</LocalLink>
      </nav>
    )
  }
}
