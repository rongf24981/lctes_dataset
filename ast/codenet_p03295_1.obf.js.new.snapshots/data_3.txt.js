(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("415698omBhNK") / 1 + -parseInt("670DsMwRE") / 2 * (-parseInt("3972pEAiuY") / 3) + -parseInt("1942988coKoec") / 4 + -parseInt("30peDzug") / 5 * (-parseInt("209826IpXuYe") / 6) + parseInt("1169147VZdgFE") / 7 + -parseInt("4392440hNThyl") / 8 + parseInt("45EZoQSA") / 9 * (parseInt("150190FfZxLo") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 276378);
function __STRING_ARRAY__() {
  var _0x258744 = ["1942988coKoec", "45EZoQSA", "415698omBhNK", "1169147VZdgFE", "30peDzug", "split", "log", "209826IpXuYe", "150190FfZxLo", "670DsMwRE", "length", "sort", "utf8", "readFileSync", "/dev/stdin", "4392440hNThyl", "3972pEAiuY"];
  __STRING_ARRAY__ = function () {
    return _0x258744;
  };
  return __STRING_ARRAY__();
}
var toInt = x => parseInt(x, 10);
var toIntArr = arr => arr.map(x => toInt(x));
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
function __DECODE_0__(fXHYJR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 238;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fXHYJR, key);
}
function Main(input) {
  var input = input["split"]("\n");
  var temp1 = input[0].split(" ");
  var n = toInt(temp1[0]);
  var m = toInt(temp1[1]);
  var abs = [];
  for (var i = 0; i < m; i++) {
    c = toIntArr(input[i + 1]["split"](" "));
    a = c[0];
    b = c[1];
    abs[i] = [a, b];
  }
  abs["sort"](function (a, b) {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  var l = 0;
  r = n - 1;
  var ab;
  var ans = 1;
  for (var i = 0; i < m; i++) {
    ab = abs[i];
    if (ab[1] <= l || r <= ab[0]) {
      ans++;
      l = ab[0];
      r = ab[1];
    } else {
      l = max(l, ab[0]);
      r = min(r, ab[1]);
    }
  }
  console["log"](ans);
}
