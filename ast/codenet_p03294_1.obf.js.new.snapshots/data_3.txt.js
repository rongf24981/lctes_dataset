function __DECODE_0__(VHqGxF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 265;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VHqGxF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("192886YbmPLs") / 1 * (parseInt("2HZuNSf") / 2) + parseInt("962556PmHOlM") / 3 + parseInt("14116wTdnQi") / 4 * (-parseInt("1135tDHXZP") / 5) + parseInt("3838680iwmoII") / 6 + parseInt("7560553yfniRE") / 7 + parseInt("1877240FECDvv") / 8 + -parseInt("8923977JGiHpY") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 675616);
var toInt = x => parseInt(x, 10);
function __STRING_ARRAY__() {
  var _0x2d3764 = ["2HZuNSf", "7560553yfniRE", "split", "log", "14116wTdnQi", "8923977JGiHpY", "192886YbmPLs", "utf8", "1135tDHXZP", "3838680iwmoII", "readFileSync", "map", "length", "962556PmHOlM", "1877240FECDvv"];
  __STRING_ARRAY__ = function () {
    return _0x2d3764;
  };
  return __STRING_ARRAY__();
}
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
  for (var i = 1; i < rest.length; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function Main(input) {
  var input = input["split"]("\n");
  var n = toInt(input[0]);
  var as = toIntArr(input[1]["split"](" "));
  as.length = n;
  var ans = -n;
  for (var i = 0; i < n; i++) {
    ans += as[i];
  }
  console["log"](ans);
}
