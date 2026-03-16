'use strict';

function __STRING_ARRAY__() {
  var _0x20ec83 = ["23722480wevsFJ", "141SXuumP", "8KaXCAe", "toFixed", "3270270PkguOa", "748584uemLKm", "206yqpHRa", "length", "utf8", "pow", "1099071XeMkcJ", "join", "/dev/stdin", "split", "map", "reduce", "toString", "50900FqoBxv", "407043YkIDLY", "2269RfTFnp"];
  __STRING_ARRAY__ = function () {
    return _0x20ec83;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WemyHm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 275;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WemyHm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2269RfTFnp") / 1 * (parseInt("206yqpHRa") / 2) + -parseInt("141SXuumP") / 3 * (parseInt("50900FqoBxv") / 4) + -parseInt("3270270PkguOa") / 5 + -parseInt("748584uemLKm") / 6 + parseInt("407043YkIDLY") / 7 + parseInt("8KaXCAe") / 8 * (-parseInt("1099071XeMkcJ") / 9) + parseInt("23722480wevsFJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 697678);
(function (stdin) {
  var lines = stdin["toString"]();
  var re = /\w+\n[\w\s]*?\n/g;
  var result = function (data) {
    return data["map"](stdev)["join"]("\n");
    function stdev(scores) {
      var count = scores["length"];
      var mean = scores["reduce"](sum) / count;
      return Math.sqrt(scores["map"](function (v) {
        return Math["pow"](v - mean, 2);
      })["reduce"](sum) / count)["toFixed"](8);
    }
    function sum(a, b) {
      return a + b;
    }
  }(lines.match(re).map(function (v) {
    return v["split"]("\n")[1]["split"](" ").slice(0, v["split"]("\n")[0])["map"](Number);
  }));
  console.log(result);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
