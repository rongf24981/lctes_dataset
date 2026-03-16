(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1hsAegG") / 1 * (-parseInt("871562xMyEBP") / 2) + parseInt("103260WEtFrf") / 3 * (-parseInt("20OfuIMt") / 4) + parseInt("524725WVJEVT") / 5 + -parseInt("42IboEHS") / 6 * (parseInt("7791ZxVntH") / 7) + -parseInt("611520tShYhb") / 8 + -parseInt("222687GxBzsf") / 9 * (parseInt("40aiMnRM") / 10) + parseInt("29447oFcPCP") / 11 * (parseInt("4080ajiGAk") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 224041);
function __DECODE_0__(VlhbSL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 394;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VlhbSL, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x41e76e = ["4080ajiGAk", "trim", "shift", "1hsAegG", "split", "readFileSync", "replace", "7791ZxVntH", "40aiMnRM", "log", "20OfuIMt", "29447oFcPCP", "524725WVJEVT", "871562xMyEBP", "222687GxBzsf", "42IboEHS", "103260WEtFrf", "611520tShYhb"];
  __STRING_ARRAY__ = function () {
    return _0x41e76e;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["replace"](/\n/g, " ")["split"](" ");
var n = arr["shift"]() - 0;
var a = [];
for (var i = 0; i < 10000; i++) {
  a[i] = false;
}
for (var i = 0; i < n; i++) {
  a[arr[i] - 0] = true;
  if (i + 1 < n) {
    a[arr[i] + arr[i + 1] - 0] = true;
  }
  if (i + 2 < n) {
    a[arr[i] + arr[i + 1] + arr[i + 2] - 0] = true;
  }
  if (i + 3 < n) {
    a[arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] - 0] = true;
  }
}
for (var i = 0; i < 10000; i++) {
  if (a[i] == false) {
    console["log"](i);
    break;
  }
}
