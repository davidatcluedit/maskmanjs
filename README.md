# maskmanJS

```js
const MaskMan = require('../index').MaskMan;
const snake_case = require('../index').snake_case;
const camelCase = require('../index').camelCase;

// Convert all key in a object from camelCase to snake_case.
const result = MaskMan.convert(objectCamelCase).to(snake_case);
// or
const maskMan = new MaskMan(objectCamelCase);
const result = maskMan.to(snake_case);

// Convert all key in a object from snake_case to camelCase.
const result = MaskMan.convert(objectSnakeCase).to(camelCase);
// or
const maskMan = new MaskMan(objectSnakeCase);
const result = maskMan.to(camelCase);

// Convert all key in a object from snake_case to another case by a anomymous function.
const result = MaskMan.convert(objectSnakeCase).to((fieldName) => {
  // converting field names...
});
// or
const maskMan = new MaskMan(objectSnakeCase);
const result = maskMan.to((fieldName) => {
  // converting field names...
});
```

## Installation

### With NPM

```bash
npm install --save maskman.js
```
