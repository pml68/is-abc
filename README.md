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
import { is_abc } from 'is-abc'

is_abc('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
// => true

is_abc('abcdefghijklmnopqrstuvwxyz')
// => true

is_abc('anything else')
// => false
```
