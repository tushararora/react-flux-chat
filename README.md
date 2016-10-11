# react-flux-chat (whatsapp-web-demo)

## Setup
Download current version of Node.js [here](https://nodejs.org/en/) (v6.7.0)

## Installation

``` 
npm install
```
## Launch

```
npm start
```
Visit [http://localhost:8080](http://localhost:8080) 
## Test
```
npm test
```
## Technologies Used
* [ReactJS](https://facebook.github.io/react/) ([Flux](https://facebook.github.io/flux/))
* [Bootstrap](http://getbootstrap.com/)
* [Webpack](https://webpack.github.io/) (Module bundler)
* [Eslint](http://eslint.org/) (Linting ES6 and ReactJS)
* [Babel](https://babeljs.io/) (ES6 transpilation)
* [Mocha](https://mochajs.org/) (Test runner)
* [Enzyme](http://airbnb.io/enzyme/) (Test utility for ReactJS)
* [Chai](http://chaijs.com/) (Assertions)
* [Sinon](http://sinonjs.org/) (Test Spy)
* Websockets
* [DexieJS](http://dexie.org/) (IndexedDB wrapper library)

## Thought Process
1. I started with setting up a basic build system for **React** and **ES6** using **babel** and **webpack**. It involved basic housekeeping and moving some files from src to dist. 
2. Then I focused on getting a single component on the screen to look and feel like a chat application with two column layout.
3. Looked for some lightweight css library or framework. After looking at multiple options like Skeleton and Cardinal, I settled for **Bootstrap** (Even though it has a lot of components which I did not want but it's possible to compile whichever less or sass components we need for the project) for its simplicity and my previous experience using it.
4. Started writing css for the component. At first I took css classnames as whatever looked appropriate at that time, then renamed them afterwards according to the layout and semantics.
5. Made sure that layouts worked on mobile and tablet devices and wrote media queries for that. (Only 2-3 media queries were required to be manually written, rest were handled by bootstrap).
6. Then I thought about breaking that single component into pieces. Now, there is one main component 'App'. It has two child components as 'ThreadPanel' as the left column and 'ChatPanel' as the right column. These two components have their own child components as well.
7. Wrote APIUtils as POJO Singletons so that instance need not be created before use.
8. Then I reasoned about Flux architecture and how to integrate it to the application to ensure unidirectional data flow.
9. Meanwhile I setup the test environment using **Mocha**. Used **chai** for assertions, **sinon** for spying on functions and **jsdom** for mocking browser like enviromnment. Among testing utilities I compared between Jest and Enzyme and found Enzyme's API more expressive and simpler to use.
10. Started writing components and their respective tests. Had to refactor and rewrite code multiple times to create components with featurs like single responsiblity and easy to test.
11. Worked on setting up unidirectional data flow using **Flux**. Setup **Dispatcher**, **Action Creators**, **Stores** and made sure that components are receiving the appropriate data and dispatched events.
12. Started looking for client side storage solutions. I was familiar with cookies/localStorage/sessionStorage but wanted to try out some something more structured. IndexedDB was my first choice (supports indexes) but it would have taken some time to setup low level stuff, so I used **DexieJS** which is a wrapper library for cross browser IndexedDB implementation.
13. Wrote **WebSockets** and **Dexie** utils (POJO Singletons) for getting echoed response and saving data to IndexedDB respectively. Created basic schema for message object.
14. Improved upon build process by moving frontend resources to be installed as node_modules and made sure that css, html and other resources bundling was automated.

## Structure
![React-Flux-Demo-Structure](https://github.com/tushararora/react-flux-chat/blob/master/structure.png "react-flux-chat structure")

## Parameters for choice of technologies
1. Does it follow the current direction of web? (Web Components, Web Views)
2. Does it have good documentation and community support?
3. Is it actively maintained?
4. Does it have simple and expressive API?
5. Is it ready to use?

## Notes
1. Tested on latest versions of Firefox and Chrome on Ubuntu 14.04
2. Used Node.js v6.7.0 and npm v3.10.3