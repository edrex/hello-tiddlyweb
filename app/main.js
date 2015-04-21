"use babel";

import React from 'react';
import Hello from 'hello';
import request from 'superagent';

React.render(
  <Hello name="TiddlyWeb"/>,
  document.getElementById('main')
);

request
  .get('https://tank.peermore.com/bags.json')
  .set('Accept', 'application/json')
  .end(function(err, res){
    if (res.ok) {
      console.log(res.body);
    } else {
      alert('Oh no! error ' + res.text);
    }
  });
