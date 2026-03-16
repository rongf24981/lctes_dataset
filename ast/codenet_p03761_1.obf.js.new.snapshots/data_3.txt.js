(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("570691BTgvTZ") / 1 + parseInt("260002tjJoPP") / 2 + parseInt("2861943fANrXM") / 3 + -parseInt("882380VAAltH") / 4 + -parseInt("5sBcCGS") / 5 * (parseInt("392694PebDzX") / 6) + parseInt("1351njGpyZ") / 7 * (parseInt("25448OIjKrw") / 8) + -parseInt("63VuCOkr") / 9 * (parseInt("152470pYZtEu") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 734451);
function main(input) {
  var n = input[0] - 0;
  var lists = [];
  var ansmap = {};
  for (var i = 1; i <= n; i++) {
    var str = input[i];
    var map = {};
    for (var j = 0; j < str["length"]; j++) {
      map[str[j]] = map[str[j]] ? map[str[j]] + 1 : 1;
      ansmap[str[j]] = 60;
    }
    lists["push"](map);
  }
  var keys = Object.keys(ansmap)["sort"]((a, b) => a > b ? 1 : -1);
  for (var i = 0; i < n; i++) {
    var list = lists[i];
    for (var j = 0; j < keys["length"]; j++) {
      ansmap[keys[j]] = Math["min"](ansmap[keys[j]], list[keys[j]] || 0);
    }
  }
  var ans = "";
  keys["forEach"](key => {
    for (var i = 0; i < ansmap[key]; i++) {
      ans += key;
    }
  });
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0x4375fd = ["push", "forEach", "utf8", "1351njGpyZ", "/dev/stdin", "882380VAAltH", "log", "260002tjJoPP", "trim", "2861943fANrXM", "split", "63VuCOkr", "25448OIjKrw", "min", "5sBcCGS", "570691BTgvTZ", "392694PebDzX", "sort", "readFileSync", "152470pYZtEu", "length"];
  __STRING_ARRAY__ = function () {
    return _0x4375fd;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(YGUDkJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 117;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YGUDkJ, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n"));
