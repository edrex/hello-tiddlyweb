import Hello from 'hello';
import React from 'react';
import request from 'superagent';

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

export default class extends React.Component {
  render() {
    return <Hello name="TiddlyWeb"/>;
  }
}
