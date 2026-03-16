'use strict';

function __STRING_ARRAY__() {
  var _0x1a9ad0 = ["readFileSync", "slice", "14387400DXCpMs", "78DWNliy", "toString", "map", "log", "2402xUhigZ", "join", "utf8", "5208336qbppPe", "14scecib", "1276815xagnQL", "trim", "11672mzhLWq", "934YaWoxL", "3979962bvtzhs", "5372110UPSLqg", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x1a9ad0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(NWefpd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 115;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NWefpd, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("934YaWoxL") / 1 * (parseInt("2402xUhigZ") / 2) + -parseInt("78DWNliy") / 3 * (parseInt("11672mzhLWq") / 4) + parseInt("1276815xagnQL") / 5 + -parseInt("3979962bvtzhs") / 6 + -parseInt("14scecib") / 7 * (-parseInt("5208336qbppPe") / 8) + -parseInt("14387400DXCpMs") / 9 + parseInt("5372110UPSLqg") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 878597);
(function (stdin) {
  var lines = stdin["toString"]();
  var re = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
  var result = function (data) {
    return data["map"](function (v) {
      return v["slice"](-v[1])["map"](Number).reduce(function (str, num) {
        return str["slice"](num) + str["slice"](0, num);
      }, v[0]);
    })["join"]("\n");
  }(lines.match(re)["map"](function (v) {
    return v["trim"]().split("\n");
  }));
  console["log"](result);
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
