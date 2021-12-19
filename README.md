# joi-vn-lang

Change language of joi error messages to Vietnamese

## Installation

### Npm

```sh
npm install joi-vn-lang
```

### Yarn

```sh
yarn add joi-vn-lang
```

## Joi extend language

- StringVnLang
- AlternativesVnLang
- AnyVnLang
- ArrayVnLang
- BinaryVnLang
- BooleanVnLang
- DateVnLang
- FunctionVnLang
- KeysVnLang
- NumberVnLang
- ObjectVnLang
- SymbolVnLang

## Usage Javascript

```js
const joi = require("joi");
const JoiVnLang = require("joi-vn-lang");

const schema = joi.string().messages(JoiVnLang.StringVnLang);
const { error } = schema.validate(null);
console.log(error.details[0].message); //"value" phải là biến string
```

## Usage Typescript

```ts
import Joi from "joi";
// For all message
import JoiVnLang from "joi-vn-lang";
// For specific variable
import { StringVnLang } from "joi-vn-lang";

const username = Joi.string().alphanum().min(8).max(40).required().messages(StringVnLang);
const password = Joi.string().alphanum().min(8).max(40).required().messages(JoiVnLang);
const { err1 } = username.validate(null);
const { err2 } = password.validate(null);
console.log(err1.details[0].message); //"value" phải là biến string
console.log(err2.details[0].message); //"value" phải là biến string
```
