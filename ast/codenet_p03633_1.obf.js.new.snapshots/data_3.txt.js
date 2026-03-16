(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1024313VOIjtQ") / 1 + -parseInt("874032rBkpUI") / 2 + parseInt("1818189klrJeb") / 3 + parseInt("16396fjhYZf") / 4 * (parseInt("5bvCufR") / 5) + -parseInt("6061650mGpZxA") / 6 + -parseInt("6079164hwwycG") / 7 + parseInt("10045096BFzkJb") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 574369);
log = console["log"];
var stdin = require("fs")["readFileSync"]("/dev/stdin", "UTF-8");
var lines = stdin.split("\n");
var N = lines[0]["split"](" ").map(Number)[0];
var T = lines.slice(1)["filter"](v => v !== "")["map"](Number);
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
function lcm(a, b) {
  return a * b / gcd(a, b);
}
function __DECODE_0__(KLJNYW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 287;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KLJNYW, key);
}
for (var i = 1; i < N; i++) {
  T[i] = lcm(T[i], T[i - 1]);
}
log(T[N - 1]);
function __STRING_ARRAY__() {
  var _0x520ab3 = ["1024313VOIjtQ", "10045096BFzkJb", "readFileSync", "6061650mGpZxA", "5bvCufR", "874032rBkpUI", "map", "1818189klrJeb", "6079164hwwycG", "UTF-8", "filter", "16396fjhYZf", "split", "log"];
  __STRING_ARRAY__ = function () {
    return _0x520ab3;
  };
  return __STRING_ARRAY__();
}
