const Eval = require("../index");
const ev = new Eval();

ev.eval("node", "console.log('hello world')").then(console.log);