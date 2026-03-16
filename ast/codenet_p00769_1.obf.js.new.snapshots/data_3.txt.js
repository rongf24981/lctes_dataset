(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1288khgCaH") / 1 * (parseInt("1522KBMyEz") / 2) + parseInt("2021046eRLGWX") / 3 + -parseInt("21044MhFZuT") / 4 * (-parseInt("215BMKMWB") / 5) + parseInt("305994MCrkwJ") / 6 * (parseInt("56uYvBCk") / 7) + -parseInt("894824CpwYML") / 8 + parseInt("358461uQOvUg") / 9 * (parseInt("170ynBRfZ") / 10) + -parseInt("3494975SvvNrh") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 575244);
function saiki(str, flag) {
  while (true) {
    if (/\[{2}\d.*?\]{2}/["test"](str)) {
      str = str["replace"](/\[{2}\d.*?\]{2}/, function (s) {
        var d = s["slice"](2, -2).split("][").map(Number);
        d["sort"]((a, b) => a - b);
        var sum = 0;
        for (var i = 0; i < Math.ceil(d["length"] / 2); i++) {
          if (flag) {
            sum += Math.floor(d[i] / 2) + 1;
          } else {
            sum += Math.floor(d[i]);
          }
        }
        return "(" + sum + ")";
      });
    } else {
      break;
    }
  }
  str = str["replace"](/\(/g, "[");
  str = str["replace"](/\)/g, "]");
  return str;
}
function __DECODE_0__(KbOhtu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 419;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KbOhtu, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x57b9ff = ["length", "215BMKMWB", "305994MCrkwJ", "1288khgCaH", "trim", "/dev/stdin", "slice", "21044MhFZuT", "358461uQOvUg", "readFileSync", "test", "sort", "log", "replace", "170ynBRfZ", "shift", "split", "894824CpwYML", "3494975SvvNrh", "1522KBMyEz", "56uYvBCk", "utf8", "2021046eRLGWX"];
  __STRING_ARRAY__ = function () {
    return _0x57b9ff;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
arr.forEach(str => {
  str = saiki(str, true);
  while (/\[\[/["test"](str)) {
    str = saiki(str, false);
  }
  console["log"](str["replace"](/\[|\]/g, ""));
});
