function __DECODE_0__(LeBTQr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 274;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LeBTQr, key);
}
function __STRING_ARRAY__() {
  var _0x496bf4 = ["log", "1321824lbgEkx", "replace", "shift", "forEach", "/dev/stdin", "5284905BSYmAs", "6350FYRGtv", "utf8", "35jMucWN", "3134370UhHKiN", "450CzoMgy", "push", "27720504wveJaI", "1893352FoVuZv", "length", "1023730mpbRIE", "trim", "readFileSync", "split"];
  __STRING_ARRAY__ = function () {
    return _0x496bf4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1023730mpbRIE") / 1 + parseInt("6350FYRGtv") / 2 * (-parseInt("450CzoMgy") / 3) + -parseInt("1321824lbgEkx") / 4 + parseInt("5284905BSYmAs") / 5 + -parseInt("3134370UhHKiN") / 6 + parseInt("35jMucWN") / 7 * (-parseInt("1893352FoVuZv") / 8) + parseInt("27720504wveJaI") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 600861);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var L = Arr["shift"]();
for (var i = 0; i < L; i++) {
  var str = Arr[i];
  str = str.replace(/\-\>/g, "A");
  str = str["replace"](/\<\-/g, "Z");
  var m = str["split"]("");
  var arr = [m[0]];
  var n = 1;
  m["forEach"](function (v) {
    if (v == "A") {
      n++;
    } else if (v == "Z") {
      n--;
    } else {
      if (n == 0) {
        arr.unshift(v);
        n = 1;
      }
      if (n > arr["length"]) {
        arr["push"](v);
      }
    }
  });
  console["log"](arr.join(""));
}
