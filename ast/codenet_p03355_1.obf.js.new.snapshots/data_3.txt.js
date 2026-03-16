(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("54835LkDsfo") / 1 * (-parseInt("4aNofcA") / 2) + parseInt("993387uCLtTg") / 3 + -parseInt("2600rwrfWe") / 4 * (parseInt("9395soLitI") / 5) + -parseInt("1290CgOLxf") / 6 * (-parseInt("27307BcKUMU") / 7) + -parseInt("6689272MOvEQL") / 8 * (parseInt("9WEwNpl") / 9) + -parseInt("10rCxJRW") / 10 * (-parseInt("1132538MTReaM") / 11) + -parseInt("4545624lOyqmH") / 12 * (-parseInt("52ohiHSE") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 620831);
function __STRING_ARRAY__() {
  var _0x3456d3 = ["log", "993387uCLtTg", "4aNofcA", "push", "sort", "6689272MOvEQL", "4545624lOyqmH", "1290CgOLxf", "split", "9WEwNpl", "1132538MTReaM", "9395soLitI", "2600rwrfWe", "slice", "27307BcKUMU", "length", "10rCxJRW", "52ohiHSE", "map", "54835LkDsfo", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x3456d3;
  };
  return __STRING_ARRAY__();
}
var toInt = x => parseInt(x, 10);
var toIntArr = arr => arr["map"](x => toInt(x));
function __DECODE_0__(SjkcNb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 253;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SjkcNb, key);
}
var abs = x => x > 0 ? x : -x;
function min() {
  var rest = arguments;
  var val = rest[0];
  for (var i = 1; i < rest["length"]; i++) {
    if (rest[i] < val) {
      val = rest[i];
    }
  }
  return val;
}
function max() {
  var rest = arguments;
  var val = rest[0];
  for (var i = 1; i < rest["length"]; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function Main(input) {
  var input = input["split"]("\n");
  var s = input[0];
  var k = toInt(input[1]);
  var l = s.length;
  var arr = [];
  var x;
  for (var i = 0; i < l; i++) {
    for (var j = i; j < i + 5; j++) {
      x = s["slice"](i, j + 1);
      if (arr.indexOf(x) === -1) {
        arr["push"](x);
      }
    }
  }
  arr["sort"]((a, b) => a < b ? -1 : 1);
  ans = arr[k - 1];
  console["log"](ans);
}
