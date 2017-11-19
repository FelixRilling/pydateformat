# pyslice

An implementation of pythons strftime() in JS.

<https://docs.python.org/3.7/library/datetime.html#strftime-strptime-behavior>

## Usage

```js
const dateformat = require("pydateformat");

dateformat(new Date(0), "foo: %A, %H:%M:%S") //=>"foo: Thursday, 1:00:00"
```
