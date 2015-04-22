import page from 'page';
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
  React.render(
    <Bags/>,
    document.getElementById('main')
  )
})

page.start({'hashbang': true})
