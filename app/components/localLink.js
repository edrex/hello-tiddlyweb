import React from 'react';
import page from 'page';

export default class extends React.Component {
  handleClick(event) {
    page(this.props.href);
  }
  render() {
    return <a {...this.props} onClick={this.handleClick.bind(this)}>{this.props.children}</a>
  }
}
