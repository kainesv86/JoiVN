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
