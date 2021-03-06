# RRWBB
#### Yet another one setup with multiple nice features
[![Build Status](https://travis-ci.org/tohachan/rrwbb.svg?branch=master)](https://travis-ci.org/tohachan/rrwbb)
&nbsp;
##### [See demo](https://rrwbb.com/)
&nbsp;

### What is this?
This is a starter pack for build front end React application of any (probably) complexity.

### Why you might need this?
Because it can save a lot of time when you need to start your next project.

### Motivation
My goal was to create setup for future projects without too much of "black box" solutions and with support of all required features for differrent needs. So there is no SSG, just webpack and babel.
I also wanted to have clear, explicit and decoupled configs. It should also be optimized and use modern best practices.
I couldn't find setup that could do all of that the way i want it, so i made this one.
I mostly borrow all the ideas from all around the Internet (especially from [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)) and put them all together.


### Requirements
Required node >=9.0 && <12.4 since right now node-sass have some problem to install with 12.4

## Includes
- webpack 4
- babel 7
- webpack dev/hot/hot-server middlewares for comfortable development
- React 16.9.0
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
- Basic scaffolding
- Separate SPA build for static hosting [See demo](https://spa.rrwbb.com/)

## Todo
- Tests
- Storybook
- More sample pages
- Better requests handler
- PWA


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

separate start command (should make build first)
```javascript
npm run start:prod
```

---
### Generators
generate page
```javascript
npm run gen page
```

generate component
```javascript
npm run gen component
```

extract intl lexems to JSON files
```javascript
npm run extract-intl
```

---
### SPA:
SPA build
```javascript
npm run build:spa
```

SPA local server start
```javascript
npm run start:spa
```
---

### Lint
Check code style
```javascript
npm run lint
```

Fix code style
```javascript
npm run lint:fix
```
---

### Dir tree
```sh
.
├── assets                              # Assets folder
│   ├── image                           # Images
│   │   └── favicons                    # Favicons
│   ├── intl                            # Translations in .json
│   └── manifest                        # Manifest
├── config                              # Configs
│   ├── env                             # Environment specific configs
│   └── webpack                         # Webpack configs
├── generators                          # Generators for scaffolding
│   ├── component                       # Component generator
│   └── page                            # Page generator
├── scripts                             # Starters
└── src                                 # Source files
    ├── client                          # Client only code
    ├── server                          # Server only code
    └── shared                          # Isomorphic code
        ├── components                  # Components
        │   ├── Nav                     # Site navigation
        │   ├── WithReducer             # HOC for reducer injection
        │   └── WithSaga                # HOC for Saga injection
        └── containers                  # Containers
            ├── App                     # Main app container
            ├── ConnectedIntlProvider   # IntlProvider wrapper with redux
            └── pages                   # Pages
                ├── FullPage            # Example page with multiple features
                ├── LoadablePage        # Example page with loadable
                ├── Main                # Example main page
                └── Static              # Example static page
```
