# OpenEval
Eval untrusted and possibly malicious code.

# Installing

```sh
npm install open-eval
```

# Example

```js
const Eval = require("open-eval");
const ev = new Eval();

ev.eval("python3", "print('hello world')")
    .then(data => console.log(data.output));
```

# Note
This package uses **[Piston](https://github.com/engineer-man/piston)** to eval your code.

# Join my discord
**[https://discord.gg/2SUybzb](https://discord.gg/2SUybzb)**