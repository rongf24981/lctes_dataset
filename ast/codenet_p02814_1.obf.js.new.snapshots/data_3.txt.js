(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("132140QjAxBu") / 1 * (-parseInt("6dgDUMw") / 2) + -parseInt("387423GhtOIj") / 3 + parseInt("191748PlkMgF") / 4 + parseInt("2029850qEmmas") / 5 + -parseInt("576vvrfRp") / 6 * (-parseInt("20048JJXhPV") / 7) + -parseInt("733024oQUeRH") / 8 + -parseInt("63nudiaq") / 9 * (-parseInt("242300EkgXrr") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 281272);
function main(input) {
  var N = input[0]["split"](" ")[0] - 0;
  var M = input[0]["split"](" ")[1] - 0;
  var list = input[1].split(" ")["map"](v => v / 2);
  var l = lcm(list);
  console["log"](Math.trunc(M / l) - Math["trunc"](M / (l * 2)));
}
function __DECODE_0__(YJWwGt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 112;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YJWwGt, key);
}
function lcm(args) {
  var a = args;
  var g = (n, m) => m ? g(m, n % m) : n;
  var l = (n, m) => n * m / g(n, m);
  var ans = a[0];
  for (var i = 1; i < a["length"]; i++) {
    ans = l(ans, a[i]);
  }
  return ans;
}
main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]()["split"]("\n"));
function __STRING_ARRAY__() {
  var _0x573696 = ["map", "20048JJXhPV", "utf8", "576vvrfRp", "trim", "242300EkgXrr", "trunc", "132140QjAxBu", "191748PlkMgF", "log", "63nudiaq", "split", "733024oQUeRH", "length", "6dgDUMw", "387423GhtOIj", "2029850qEmmas", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x573696;
  };
  return __STRING_ARRAY__();
}
