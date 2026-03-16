(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("712079RCbBrt") / 1 + parseInt("23770EBdoQq") / 2 * (parseInt("189rywnGT") / 3) + -parseInt("1624016exKJAs") / 4 + -parseInt("3994880QWtMAb") / 5 + -parseInt("4136772YIFjKO") / 6 + -parseInt("10069458rtgoVA") / 7 + parseInt("32621864sTXqyW") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 781473);
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
function __DECODE_0__(JdHRUA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 352;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JdHRUA, key);
}
function __STRING_ARRAY__() {
  var _0x4793a5 = ["length", "readFileSync", "utf8", "log", "23770EBdoQq", "32621864sTXqyW", "split", "10069458rtgoVA", "712079RCbBrt", "map", "1624016exKJAs", "4136772YIFjKO", "189rywnGT", "3994880QWtMAb"];
  __STRING_ARRAY__ = function () {
    return _0x4793a5;
  };
  return __STRING_ARRAY__();
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
function Main(input) {
  var input = input["split"]("\n");
  var temp = toIntArr(input[0].split(" "));
  var n = temp[0];
  var x = temp[1];
  var xs = toIntArr(input[1].split(" "));
  var ss = [xs[0]];
  for (var i = 1; i < n; i++) {
    ss[i] = xs[i] + ss[i - 1];
  }
  var ans = (n + 1) * x;
  var has = 0;
  for (var i = n - 1; i > -1; i--) {
    has++;
    if (has > 2 && x < ss[i] * (has - 1) * 2 - xs[i] * 2) {
      has = 1;
      ans += x;
    }
    ans += xs[i] * (max(has, 2) * 2 + 1);
  }
  console["log"](ans);
}
