# Hello, [TiddlyWeb](http://tiddlyweb.com/)

TiddlyWeb is an HTTP content store supporting group collaboration and web application hosting. It pretty much does what you'd expect &mdash; an exceptional property.

In this project, I'll be making various requests to a TiddlyWeb server, and displaying the results. It builds on client side module loading research I did in [edrex/hello-systemjs](https://github.com/edrex/hello-systemjs). Reuseful functionality will be factored out into separate projects, as [ES6 modules](https://github.com/jspm/jspm-cli/wiki/Publishing-Packages#writing-a-library-or-application-for-usage-just-with-jspm).

## Questions

 - Which http library to use? Looked at request, but it pulls in half of npm. Trying superagent.

## Roadmap

 - [ ] Show list of bags
 - [ ] Click bag name to load list of documents
 - [ ] Click document name to load document body
 - [ ] Same with recipes
 - [ ] Add token for privileged access
