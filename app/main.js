import page from 'page';
import request from 'superagent';
import React from 'react';
import Hello from 'hello';
import Bags from './bags';


page('/', () => {
  React.render(
    <Hello name="TiddlyWeb"/>,
    document.getElementById('main')
  )
})
page('/bags', () => {
  request
    .get('https://tank.peermore.com/bags.json')
    .set('Accept', 'application/json')
    .end(function(err, res){
      if (res.ok) {
        React.render(
          <Bags bags={res.body}/>,
          document.getElementById('main')
        )
      } else {
        alert('Oh no! error ' + res.text);
      }
    });

})

page.start({'hashbang': true})
