# maskmanJS

you can convert object's own property names from camelCase to snake_case or from snake_case to camelCase using maskmanJS!

## Example

```js
const { MaskMan, camelCase, snake_case } = require('maskman.js');

// Convert all key in an object from camelCase to snake_case.
const result = MaskMan.convert(objectCamelCase).to(snake_case);
// or
const maskMan = new MaskMan(objectCamelCase);
const result = maskMan.to(snake_case);

// Convert all key in an object from snake_case to camelCase.
const result = MaskMan.convert(objectSnakeCase).to(camelCase);
// or
const maskMan = new MaskMan(objectSnakeCase);
const result = maskMan.to(camelCase);

// Convert all key in an object from snake_case to another case by an anomymous function.
const result = MaskMan.convert(objectSnakeCase).to(key => {
  // converting keys...
});
// or
const maskMan = new MaskMan(objectSnakeCase);
const result = maskMan.to(key => {
  // converting keys...
});
```

## Installation

### With NPM

```bash
npm install --save maskman.js
```

### With Yarn

```bash
yarn add maskman.js
```

## Integration with axios

```js
const axios = require('axios')
const { MaskMan, camelCase } = require('maskman.js')

axios.interceptors.response.use(
  function(response) {
    return {
      ...response,
      data: MaskMan.convert(response.data).to(camelCase)
    }
  },
  function(error) {
    return Promise.reject(error)
  }
)
```
