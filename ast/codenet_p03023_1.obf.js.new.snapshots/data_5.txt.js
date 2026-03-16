'use strict';

(function (input) {
  input = input["trim"]() - 0;
  console["log"]((input - 2) * 180);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
