## `select-search` feature

Select search feature using [Choices.js](https://joshuajohnson.co.uk/Choices/).

### Global dependencies

* [`gi-js-base`](https://github.com/Goldinteractive/js-base)

### Dependencies

* [`Choices.js`](https://joshuajohnson.co.uk/Choices/)

### Installation

Install this package with sackmesser:

    make feature-install-select-search

or when sackmesser is not used:

    yarn install gi-feature-select-search

After the installation has completed, you can import the module files:

#### JS:

```javascript
// import feature class
import SelectSearch from 'gi-feature-select-search'
// ...
base.features.add('select-search', SelectSearch)
```

Make sure you provide the global dependencies in your webpack config file:

```javascript
new webpack.ProvidePlugin({
  base: 'gi-js-base'
})
```

#### Styles:

```sass
@import 'gi-feature-select-search/src/style';
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 10 and above

### Development

* `make build` or `npm run build` - Build production version of the feature.
* `make dev` or `npm run dev` - Build demo of the feature, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the feature.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish` - Publish npm package.
