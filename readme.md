# string-surround
[![NPM version](https://badge.fury.io/js/string-surround.svg)](https://badge.fury.io/js/string-surround) [![Build Status](https://travis-ci.org/dustinspecker/string-surround.svg)](https://travis-ci.org/dustinspecker/string-surround) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/string-surround.svg)](https://coveralls.io/r/dustinspecker/string-surround?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/string-surround/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/string-surround) [![Dependencies](https://david-dm.org/dustinspecker/string-surround.svg)](https://david-dm.org/dustinspecker/string-surround/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/string-surround/dev-status.svg)](https://david-dm.org/dustinspecker/string-surround/#info=devDependencies&view=table)

> Surround a string with another string

## Install
```
npm install --save string-surround
```

## Usage
```javascript
import stringSurround from 'string-surround'

stringSurround('hello', '123')
// => '123hello123'

stringSurround('', 'ABC')
// => 'ABCABC'
```

## API

### stringSurround(string, [surroundingString])

Returns `string` surrounded with `surroundingString`.

#### string
type: `string`

The string to surround.

#### surroundingString
type: `string`

default: `''`

The string to surround around `string`.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
