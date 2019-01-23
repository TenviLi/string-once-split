# string-once-split

![](https://img.shields.io/npm/v/string-once-split/latest.svg)

> A foreignizing `String.prototype.split` spliting string **only once**.

Originally, it was just a small function I used for pipeline processing😅.

It can continuously split a string into two or more parts in a pipeline until the string can no longer be split😎.

Of course, you can also use it as an ordinary cute little function. It's very easy to use, hah😂.

## Installation

Install with [npm](https://www.npmjs.com/):

```powershell
npm install --save string-once-split
```

## Import

ESM supporting environment:

```javascript
import strbreak from "string-once-split"; // ES6
```

CommonJS environment:

```javascript
const strbreak = require("string-once-split");
```

## Usage

```javascript
// default
strbreak(""); // [""]
strbreak("", ""); // [""]
strbreak("aaa"); // ["aaa"]
strbreak("aaa", ""); // ["aaa"]

// Input String breaker
strbreak("ababa", "b"); // ["a", "aba"]

// Input RegExp breaker
strbreak("ababa", /b/); // ["a", "b", "aba"]
strbreak("test.com:2333", /:(\d+)$/); // ["test.com", "2333"]
strbreak(`today is 2019-01-23 a breautiful day`, /(\d{4})-(\d{2})-(\d{2})/); // ["today is ", "2019", "01", "23", " a breautiful day"]
```

## Parameter

### str

Type: `string`

Default: `""`

### breaker

Type: `string | RegExp`

Default: `""`

Description:

If pass a **string**, it will split the `str` into two parts.

If pass a **RegExp** excluding **capture group**, it will retain the match result and finally split the `str` into two to three parts.

If pass a **RegExp** including **capture group**, it will eliminate the match result, reserve child matching results and finally split the `str` into some parts.

## Contribute

Pull requests and stars are always welcome❤️. For bugs and feature requests, please create an issue.

## License

Copyright © 2018, [gylidian](https://github.com/gylidian). Released under the MIT License.
