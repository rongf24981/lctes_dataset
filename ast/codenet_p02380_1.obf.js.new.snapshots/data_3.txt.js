function __STRING_ARRAY__() {
  var _0x45b2e3 = ["26265888tzgCpB", "stdin", "line", "1215PzzsmL", "cos", "420092dkgXja", "87945lQwyjd", "readline", "exit", "sin", "log", "end", "6328896IOtazM", "sqrt", "7364240KcePEi", "split", "4jUTiwZ", "19062aiqiug", "toFixed", "496334tpmcMr"];
  __STRING_ARRAY__ = function () {
    return _0x45b2e3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("420092dkgXja") / 1 + -parseInt("496334tpmcMr") / 2 + parseInt("87945lQwyjd") / 3 * (parseInt("4jUTiwZ") / 4) + parseInt("1215PzzsmL") / 5 * (-parseInt("19062aiqiug") / 6) + -parseInt("6328896IOtazM") / 7 + -parseInt("7364240KcePEi") / 8 + parseInt("26265888tzgCpB") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 523003);
var reader = require("readline").createInterface({
  input: process["stdin"],
  output: process.stdout
});
function __DECODE_0__(xUpqaZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 494;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xUpqaZ, key);
}
reader.on("line", function (line) {
  var rad;
  var a;
  var S;
  var L;
  var h;
  var e = line["split"](" ");
  var b = Number(e[0]);
  var c = Number(e[1]);
  var d = Number(e[2]);
  rad = d / 180 * Math.PI;
  a = Math["sqrt"](b * b + c * c - b * 2 * c * Math["cos"](rad));
  S = b * c * Math["sin"](rad) / 2;
  L = a + b + c;
  h = b * c * Math["sin"](rad) / b;
  console["log"](S["toFixed"](8));
  console.log(L["toFixed"](8));
  console["log"](h["toFixed"](8));
  process["exit"]();
});
process["stdin"].on("end", function () {});
