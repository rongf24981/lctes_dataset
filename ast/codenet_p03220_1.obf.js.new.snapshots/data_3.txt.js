(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("693774VEceSx") / 1 + parseInt("1091614ZXGfBi") / 2 + -parseInt("3vkWYol") / 3 * (parseInt("3384636MyCHMX") / 4) + -parseInt("1000lyXVyf") / 5 + parseInt("6915180HOzmOP") / 6 + -parseInt("56qQvPSY") / 7 * (parseInt("589504OpffmH") / 8) + parseInt("9DJWHIz") / 9 * (parseInt("10507880iMYgoF") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 619488);
var toInt = x => parseInt(x, 10);
var toIntArr = arr => arr["map"](x => toInt(x));
function __STRING_ARRAY__() {
  var _0x16572b = ["3vkWYol", "log", "1000lyXVyf", "length", "1091614ZXGfBi", "3384636MyCHMX", "693774VEceSx", "split", "9DJWHIz", "6915180HOzmOP", "10507880iMYgoF", "589504OpffmH", "map", "56qQvPSY"];
  __STRING_ARRAY__ = function () {
    return _0x16572b;
  };
  return __STRING_ARRAY__();
}
var abs = x => x > 0 ? x : -x;
function min() {
  var rest = arguments;
  var v = rest[0];
  for (var i = 1; i < rest["length"]; i++) {
    if (rest[i] < v) {
      v = rest[i];
    }
  }
  return v;
}
function max() {
  var rest = arguments;
  var v = rest[0];
  for (var i = 1; i < rest.length; i++) {
    if (rest[i] > v) {
      v = rest[i];
    }
  }
  return v;
}
function __DECODE_0__(BrsPLc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 493;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BrsPLc, key);
}
function gcd() {
  var rest = arguments;
  var v = rest[0];
  var temp = (a, b) => b ? temp(b, a % b) : a;
  for (var i = 1; i < rest["length"]; i++) {
    v = temp(v, rest[i]);
  }
  return v;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function Main(input) {
  var input = input.split("\n");
  var n = toInt(input[0]);
  var ta = toIntArr(input[1].split(" "));
  var hs = toIntArr(input[2]["split"](" "));
  var t = ta[0];
  var a = ta[1];
  var ans = 1;
  var x = abs(t - a - hs[0] * 0.006);
  var y;
  for (var i = 1; i < n; i++) {
    y = abs(t - a - hs[i] * 0.006);
    if (y < x) {
      ans = i + 1;
      x = y;
    }
  }
  console["log"](ans);
}
