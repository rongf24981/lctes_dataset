(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1671828ZeCLoi") / 1 + parseInt("290492KEfzxL") / 2 * (parseInt("3kIPrbC") / 3) + parseInt("2532076FUlgpy") / 4 + -parseInt("105bdwUER") / 5 * (parseInt("288306kmBJXa") / 6) + parseInt("2483110YbrDKN") / 7 * (parseInt("40hcPKiP") / 8) + -parseInt("12463335VkuuqS") / 9 + parseInt("1630eigYvy") / 10 * (parseInt("162349tplsZA") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 891918);
function __DECODE_0__(dmTnnn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 335;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dmTnnn, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x9ef8ef = ["toFixed", "40hcPKiP", "readFileSync", "/dev/stdin", "2532076FUlgpy", "12463335VkuuqS", "290492KEfzxL", "1671828ZeCLoi", "2483110YbrDKN", "3kIPrbC", "162349tplsZA", "utf8", "trim", "1630eigYvy", "split", "105bdwUER", "log", "288306kmBJXa"];
  __STRING_ARRAY__ = function () {
    return _0x9ef8ef;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]().split("\n");
for (var i = 0; i < Arr.length; i++) {
  var arr = Arr[i]["split"](",").map(Number);
  (function (x1, y1, x2, y2, xq, yq) {
    var k = x2 - x1 == 0 ? Infinity : (y2 - y1) / (x2 - x1);
    var ans;
    if (k == 0) {
      ans = [xq, y1 - (yq - y1)];
    } else if (k == Infinity) {
      ans = [x1 - (xq - x1), yq];
    } else {
      var a1 = (y2 - y1) / (x2 - x1);
      var a2 = -1 / a1;
      var b1 = y1 - a1 * x1;
      var b2 = yq - a2 * xq;
      var xm = (b2 - b1) / (a1 - a2);
      var x = xm * 2 - xq;
      var y = a2 * x + b2;
      ans = [x, y];
    }
    console["log"](ans[0]["toFixed"](6) + " " + ans[1]["toFixed"](6));
  }).apply(null, arr);
}
