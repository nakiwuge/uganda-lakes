# uganda-lakes

[![Build Status](https://travis-ci.org/nakiwuge/uganda-lakes.svg?branch=master)](https://travis-ci.org/nakiwuge/uganda-lakes)
[![Coverage Status](https://coveralls.io/repos/github/nakiwuge/uganda-lakes/badge.svg?branch=master)](https://coveralls.io/github/nakiwuge/uganda-lakes?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/19678c912070010cf222/maintainability)](https://codeclimate.com/github/nakiwuge/uganda-lakes/maintainability)

Node js package for listing all lakes in Uganda and their location coordinates.

## Features

- Get all lakes in uganda with their latitude/longtitude coordinates
- Get one lake by name

## Installing

Using npm:

```bash
$ npm install uganda-lakes
```

Using yarn:

```bash
$ yarn add uganda-lakes
```

## Usage

###  CommonJS usage

####  Getting all lakes

```js
const { getLakes } = require('uganda-lakes');

function lakes(){
  console.log(getLakes)
}

```

####  Getting one lake by name
> **NOTE:** Just provide the lake name. If the lake doesnot exist it will return undifined

```js
const { getLake } = require('uganda-lakes');

const result = getLake('Victoria')
console.log(result)

```

### Es6 usage

####  Getting all lakes

```js
import { getLakes } from 'uganda-lakes';

const lakes =()=>{
  console.log(getLakes)
}

```

####  Getting one lake by name

```js
import { getLakes } from 'uganda-lakes';

const result = getLake('Victoria')
console.log(result)

```
## Tests
To run the test suite, first install the dependencies, then run npm test:
```
npm install
npm test
```
## Contributing
File an issue or submit a pull-request. Before submitting any pull-requests please ensure you've built the project and run the tests.

## Resources

[Wikipedia ](https://en.wikipedia.org/wiki/List_of_lakes_of_Uganda) for data.

## Author
Miriam Nakiwuge

## License

[ISC](https://choosealicense.com/licenses/isc/)
