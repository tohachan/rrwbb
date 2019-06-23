# RRWBB
#### Yet another one setup with multiple nice features
[![Build Status](https://travis-ci.org/tohachan/rrwbb.svg?branch=master)](https://travis-ci.org/tohachan/rrwbb)
&nbsp;
##### [See demo](https://rrwbb.com/)
&nbsp;

### What is this?
This is a starter pack for build front end application of any (probably) complexity.

### Why you might need this?
Because it can save a lot of time when you need to start your next project.

### Motivation
My goal was to create setup for future projects without too much of "black box" solutions and with support of all requred features for production.
I mostly borrow all the ideas from all around the Internet and put them all together.

## Includes
- webpack 4
- babel 7
- webpack dev/hot/hot-server middlewares for comfortable development
- React 16.8.6
- Redux with persist support
- Redux saga with data-preload on server side
- React router connected to redux
- Reducer and saga injections
- Code splitting with @loadable/component
- SSR with code splitting support
- i18n
- Helmet
- Scss with code splitting support
- Css load optimization
- Bulma

## Todo
- Tests
- Storybook
- Separate SPA build html file
- Close to real world i18n usage
- More sample pages
- Better requests handler


### Usage:
clone this repository or download the zip file.
change directory into the cloned folder.
run the following command in your terminal.

```javascript
npm i
```

start dev server
```javascript
npm run dev
```

build and start prod server
```javascript
npm run prod
```

build and analyze bundle size
```javascript
npm run analyze
```

build without start
```javascript
npm run build
```

separate start command (should build first)
```javascript
npm run start:prod
```

generate page
```javascript
npm run gen page
```
