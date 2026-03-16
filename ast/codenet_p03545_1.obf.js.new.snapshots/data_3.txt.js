'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1647176eyWzIs") / 1 + -parseInt("2777162oXSTSo") / 2 + parseInt("129cGcgYC") / 3 * (parseInt("131728tpiUZI") / 4) + -parseInt("6005175ZZqKht") / 5 + -parseInt("5138106czozIk") / 6 * (-parseInt("14UyVrRS") / 7) + parseInt("8aLzCOx") / 8 * (parseInt("5349663fKgfxF") / 9) + -parseInt("18897980jYwBCh") / 10 * (parseInt("11kORRZe") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 890947);
var lines = require("fs")["readFileSync"](0, "utf8").split("\n");
function __DECODE_0__(Oofrdx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 205;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Oofrdx, key);
}
var str = lines[0];
var n = str["length"] - 1;
var dfs = (i, sum, order) => {
  if (i === n) {
    if (eval(order + str[n]) == 7) {
      return order + str[n];
    } else {
      return "";
    }
  }
  var temp = dfs(i + 1, sum, order + str[i] + "+");
  if (temp) {
    return temp;
  } else {
    return dfs(i + 1, sum, order + str[i] + "-");
  }
};
function __STRING_ARRAY__() {
  var _0x508683 = ["1647176eyWzIs", "8aLzCOx", "2777162oXSTSo", "length", "11kORRZe", "14UyVrRS", "6005175ZZqKht", "18897980jYwBCh", "5138106czozIk", "5349663fKgfxF", "utf8", "129cGcgYC", "131728tpiUZI", "log", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x508683;
  };
  return __STRING_ARRAY__();
}
var ans = dfs(0, 0, "");
console["log"](ans ? ans + "=7" : "");
