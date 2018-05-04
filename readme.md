## Install

```
$ yarn add menhera menhera-utils
```

## Example

```js
import Mhr, { $core } from "menhera";
import { data, methods, lifeCycle } from "../src";

let a = {
  _hooks: {
    data
  },
  data: {
    foo: 1,
    bar: {
      lol: 2
    }
  }
};
Mhr.$use(a);
console.log("a", a);

let b = {
  _hooks: {
    methods
  },
  methods: {
    foo: () => {},
    bar: () => {}
  }
};

Mhr.$use(b);
console.log("b", b);

let c = {
  _hooks: {
    lifeCycle
  },
  start() {
    console.log("c", this);
  },
  lifeCycle: {
    run: ["start"]
  }
};

Mhr.$use(c);
```
