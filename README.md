# is-abc

A test NPM package, for learning purposes

![![NPM Version](https://img.shields.io/npm/v/is-abc)](https://npmjs.com/package/is-abc) &nbsp;
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/pml68/is-abc/main.yml)

## Install

```bash
$ npm install is-abc
```

## Usage

```js
import { isabc } from 'is-abc'

isabc('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
// => true

isabc('abcdefghijklmnopqrstuvwxyz')
// => true

isabc('anything else')
// => false
```
