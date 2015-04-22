import page from 'page';
import React from 'react';
import _ from 'fetch';

// import Container from './container';
import AppNav from './nav';

import Home from './home';
import Bags from './bags';

function renderMain(elt) {
  React.render(
    <div>
      <AppNav/>
      {elt}
    </div>,
    document.getElementById('main')
  )
}

page('/', () => renderMain(<Home/>) )
page('/bags', () => {
    var base = "https://tank.peermore.com"
    window.fetch(`${base}/bags.json`)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        renderMain(<Bags bags={json}/>)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
})

page('*', () => console.log("route not found"))
page.start({'hashbang': true})
