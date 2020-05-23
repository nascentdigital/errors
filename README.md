# Errors
> A set of Typescript and Javascript `Error` subclasses to simplify strongly typed (or prototyped)
application error handling.

[![NPM](https://img.shields.io/npm/v/@nascentdigital/errors.svg)](https://www.npmjs.com/package/@nascentdigital/errors)

## Features

- Provides a reusable set of common `Error` subclasses that can be leveraged for convenience.
- Simple base class that you can just extend for your own custom errros.
- Maintains the proper prototype chain so that your custom errors show up correctly in a stacktrace.
- Javascript support in Node.js and browsers.
- Typescript 3 support.


## Installation

```sh
$ npm i -s @nascentdigital/errors
```


## Usage

### Leveraging existing errors

Just import the errors that you need and start throwing!

```javascript
import {ArgumentError} from "@nascentdigtal/errors";

function failure(expected) {

    // validate arguments
    if (!expected) {
        throw new ArgumentError("expected");
    }

    // ...
}
```

### Creating custom errors

Creating your own custom errors is just as easy.
Simply extend the base `RuntimeError`, ensuring you call the base method.

```javascript
import {RuntimeError} from "@nascentdigtal/errors";

// define simple error (hands free)
export class SimpleError extends RuntimeError {}

// define complex error
export class ComplexError extends RuntimeError {

    constructor(message, value) {

        // call base constructor (does the heavy lifting)
        super(message);

        // do your stuff
        this.value = value;
    }
}

function deathwish() {
    throw new ComplexError("This isn't smart", -1);
}
```
