# Hello, [TiddlyWeb](http://tiddlyweb.com/)

TiddlyWeb is an HTTP content store supporting group collaboration and web application hosting. It pretty much does what you'd expect &mdash; an exceptional property.

In this project, I'll be making various requests to a TiddlyWeb server, and displaying the results. It builds on client side module loading research I did in [edrex/hello-systemjs](https://github.com/edrex/hello-systemjs). Reuseful functionality will be factored out into separate projects, as [ES6 modules](https://github.com/jspm/jspm-cli/wiki/Publishing-Packages#writing-a-library-or-application-for-usage-just-with-jspm).

## Roadmap

 - [x] Add routing
 - [ ] /bags: Show list of bags
   - bags property
 - [ ] /bags/{bag}/tiddlers Lists tiddlers in bag
 - [ ] /bags/{bag}/tiddlers/{tiddler} Shows body of tiddler
   - [ ] if tiddler.type == "text/x-markdown", render the markdown
 - [ ] Same with recipes
 - [ ] Add token for privileged access

## Stack

- **Module loading**: [jspm](http://jspm.io/) / [SystemJS](https://github.com/systemjs/systemjs)
- **Data binding**: [React](https://facebook.github.io/react/)
- **HTTP client**: [window.fetch](https://fetch.spec.whatwg.org/) [polyfill](https://github.com/github/fetch)
- **View routing**: [Page.js](http://visionmedia.github.io/page.js/)

## References

 - http://visionmedia.github.io/superagent/
 - http://visionmedia.github.io/page.js/ 
 
### React

 - https://github.com/kriasoft/react-starter-kit
 - http://facebook.github.io/react/docs/pure-render-mixin.html
 - https://facebook.github.io/flux/docs/todo-list.html
 - https://facebook.github.io/react/docs/update.html
 - https://github.com/facebook/immutable-js/wiki/Immutable-as-React-state 

### TiddlyWeb

 - https://tank.peermore.com/dash
