(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("12778tWRLNO") / 1 * (-parseInt("30JcNvfd") / 2) + parseInt("240039JPxBlN") / 3 + -parseInt("325456xQmKQu") / 4 + -parseInt("1180125QsgGAN") / 5 + parseInt("1218726AyCsHW") / 6 + -parseInt("7jmvLuU") / 7 * (parseInt("1713424PRtzpK") / 8) + parseInt("2246517CuclIM") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 192850);
function equal(a, b) {
  var aP = Object["getOwnPropertyNames"](a);
  var bP = Object["getOwnPropertyNames"](b);
  if (aP["length"] != bP["length"]) {
    return false;
  }
  for (var i = 0; i < aP["length"]; i++) {
    if (a[aP[i]] !== b[aP[i]]) {
      return false;
    }
  }
  return true;
}
function pi(text) {
  return parseInt(text, 10);
}
var six = [6, 5, 4, 3, 2, 1]["map"](_ => Math.pow(6, _));
function __STRING_ARRAY__() {
  var _0x4e58e1 = ["min", "1218726AyCsHW", "2246517CuclIM", "log", "1180125QsgGAN", "12778tWRLNO", "7jmvLuU", "30JcNvfd", "length", "/dev/stdin", "pow", "240039JPxBlN", "325456xQmKQu", "getOwnPropertyNames", "map", "utf8", "find", "1713424PRtzpK"];
  __STRING_ARRAY__ = function () {
    return _0x4e58e1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ZaYPEl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 234;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZaYPEl, key);
}
var nine = [5, 4, 3, 2, 1]["map"](_ => Math["pow"](9, _));
function count(i) {
  if (i < 6) {
    return i;
  }
  if (i < 9) {
    return 1 + (i - 6);
  }
  return Math["min"](count(i - six["find"](_ => _ <= i)) + 1, count(i - nine.find(_ => _ <= i)) + 1);
}
function main(input) {
  var i = pi(input);
  console["log"](count(i));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
