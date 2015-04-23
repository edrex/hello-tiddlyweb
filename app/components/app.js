import page from 'page';
import React from 'react';
import _ from 'fetch';

import AppNav from './nav';
import Home from './home';
import Bags from './bags';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: <div/>
    }
  }

  componentWillMount() {
    page('/', () => this.setState({page: <Home/>}))
    page('/bags', () => {
      var base = "https://tank.peermore.com"
      window.fetch(`${base}/bags.json`)
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          this.setState({page: <Bags bags={json}/>})            
        }.bind(this)).catch(function(ex) {
          console.log('parsing failed', ex)
        })
    })
    page('*', () => console.log("route not found"))
    page.start({'hashbang': true})
  }
  render() {
    return (
      <div>
        <AppNav/>
        {this.state.page}
      </div>
    )
  }
}
