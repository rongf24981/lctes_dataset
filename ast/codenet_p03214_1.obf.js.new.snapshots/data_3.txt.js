(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("150618usMYeE") / 1 + -parseInt("2822314NwIteh") / 2 + parseInt("2448228dBQCdi") / 3 + -parseInt("5963516VpqjDb") / 4 + -parseInt("5tNEbmW") / 5 * (-parseInt("9146910bUuspy") / 6) + -parseInt("736113MUDChD") / 7 * (-parseInt("56ypXzRh") / 8) + -parseInt("5020020GegqLO") / 9 * (-parseInt("10wzfxGS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 883036);
var toInt = x => parseInt(x, 10);
var toIntArr = arr => arr["map"](x => toInt(x));
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
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(ysPxER, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 110;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ysPxER, key);
}
function __STRING_ARRAY__() {
  var _0xbabc77 = ["5963516VpqjDb", "150618usMYeE", "length", "56ypXzRh", "split", "9146910bUuspy", "utf8", "map", "736113MUDChD", "2822314NwIteh", "5020020GegqLO", "10wzfxGS", "2448228dBQCdi", "readFileSync", "5tNEbmW"];
  __STRING_ARRAY__ = function () {
    return _0xbabc77;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var input = input["split"]("\n");
  var n = toInt(input[0]);
  var as = toIntArr(input[1].split(" "));
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += as[i];
  }
  var bs = as["map"]((el, ind, arr) => abs(sum - n * el));
  var ans = 0;
  var min = bs[0];
  for (var i = 1; i < n; i++) {
    if (bs[i] < min) {
      min = bs[i];
      ans = i;
    }
  }
  console.log(ans);
}
