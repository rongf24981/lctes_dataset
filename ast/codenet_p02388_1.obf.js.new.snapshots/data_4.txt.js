'use strict';

(function (stdin) {
  var inputs = stdin["toString"]()["trim"]()["split"]("\n");
  (function (x) {
    console["log"](x * x * x);
  })(parseInt(inputs[0], 10));
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
