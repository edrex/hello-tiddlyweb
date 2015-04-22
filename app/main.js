import page from 'page';
import React from 'react';
import request from 'superagent';

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
    request
      .get("https://tank.peermore.com/bags.json")
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (res.ok) {
          renderMain(<Bags bags={res.body}/>)
        } else {
          alert('Oh no! error ' + res.text);
        }
      });
})

page('*', () => console.log("route not found"))
page.start({'hashbang': true})
