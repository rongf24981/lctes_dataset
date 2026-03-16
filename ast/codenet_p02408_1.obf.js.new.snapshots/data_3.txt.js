'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2KBTKWR") / 1 * (parseInt("234652QSXVEM") / 2) + -parseInt("457959zonpti") / 3 + parseInt("28820mbyJNF") / 4 * (-parseInt("95WwQVia") / 5) + -parseInt("1641510flOTJK") / 6 + -parseInt("1408428IvByvI") / 7 + -parseInt("1098544pBdYXZ") / 8 + parseInt("2438811zfwjbD") / 9 * (parseInt("30pwmfNP") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 145934);
function __STRING_ARRAY__() {
  var _0x3b8325 = ["utf8", "readFileSync", "join", "1408428IvByvI", "slice", "indexOf", "457959zonpti", "1098544pBdYXZ", "95WwQVia", "length", "1641510flOTJK", "28820mbyJNF", "2438811zfwjbD", "push", "234652QSXVEM", "2KBTKWR", "30pwmfNP"];
  __STRING_ARRAY__ = function () {
    return _0x3b8325;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PGhnMj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 267;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PGhnMj, key);
}
(function (stdin) {
  var lines = stdin.toString().split("\n");
  var result = function (data) {
    return new Deck().filter(function (v) {
      return this["indexOf"](v) === -1;
    }, data)["join"]("\n");
    function Deck() {
      var deck = [];
      ["S", "H", "C", "D"].forEach(function (v) {
        for (var i = 0; i < 13; i++) {
          deck["push"]([v, i + 1].join(" "));
        }
      });
      return deck;
    }
  }(lines["slice"](0, lines.shift()));
  if (result["length"] !== 0) {
    console.log(result);
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
