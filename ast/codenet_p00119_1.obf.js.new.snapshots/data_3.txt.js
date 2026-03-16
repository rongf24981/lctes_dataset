(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2wdVXes") / 1 * (parseInt("499354qSvbnL") / 2) + -parseInt("2862FETajh") / 3 * (-parseInt("5596cuKwGS") / 4) + parseInt("3405UyxNws") / 5 * (-parseInt("1542oUpkOa") / 6) + -parseInt("5609786HKFazE") / 7 + -parseInt("1303168wsOEKB") / 8 * (-parseInt("27TAeqGa") / 9) + parseInt("9303330wzLwko") / 10 + parseInt("11EEBmmn") / 11 * (-parseInt("6998028bKXSpO") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 694729);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
var m = Arr["shift"]() - 0;
var n = Arr.shift() - 0;
var M = [];
var check = [];
for (var i = 0; i < m; i++) {
  M[i] = [];
}
function __DECODE_0__(XenCdS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XenCdS, key);
}
for (var i = 0; i < m; i++) {
  check[i] = false;
}
function __STRING_ARRAY__() {
  var _0x4e0450 = ["3405UyxNws", "trim", "5609786HKFazE", "/dev/stdin", "reverse", "9303330wzLwko", "map", "1542oUpkOa", "forEach", "2862FETajh", "2wdVXes", "27TAeqGa", "499354qSvbnL", "1303168wsOEKB", "push", "6998028bKXSpO", "readFileSync", "5596cuKwGS", "shift", "split", "11EEBmmn"];
  __STRING_ARRAY__ = function () {
    return _0x4e0450;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i < n; i++) {
  var v = Arr["shift"]()["split"](" ")["map"](Number);
  M[v[0] - 1].push(v[1] - 1);
}
var L = [];
for (var i = 0; i < m; i++) {
  visit(i);
}
function visit(x) {
  if (check[x] == true) {
    return;
  } else {
    check[x] = true;
  }
  M[x]["forEach"](function (v) {
    visit(v);
  });
  L["push"](x);
}
L["reverse"]();
L["forEach"](function (v) {
  console.log(v + 1);
});
