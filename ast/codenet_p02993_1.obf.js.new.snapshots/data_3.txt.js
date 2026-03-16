function __STRING_ARRAY__() {
  var _0x20b713 = ["657kcmzXi", "403752nFXczM", "152024gjRIYF", "4591390cAjWeB", "log", "/dev/stdin", "27YWSepG", "7SZreYN", "3838134tVoNeG", "1675766qEWMOR", "readFileSync", "split", "128725DwbBWK", "Bad", "18345100tkBftT"];
  __STRING_ARRAY__ = function () {
    return _0x20b713;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kZITFe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kZITFe, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("128725DwbBWK") / 1 + parseInt("1675766qEWMOR") / 2 + parseInt("27YWSepG") / 3 * (-parseInt("403752nFXczM") / 4) + parseInt("4591390cAjWeB") / 5 + parseInt("3838134tVoNeG") / 6 * (-parseInt("7SZreYN") / 7) + -parseInt("152024gjRIYF") / 8 * (parseInt("657kcmzXi") / 9) + parseInt("18345100tkBftT") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 784046);
function Main(input) {
  input = input["split"](" ");
  var tem = input;
  var beforeText = tem;
  var arr = String(tem)["split"]("");
  var a = parseInt(arr[0], 10);
  var b = parseInt(arr[1], 10);
  var c = parseInt(arr[2], 10);
  var d = parseInt(arr[3], 10);
  if (a == b) {
    console["log"]("Bad");
  } else if (b == c) {
    console["log"]("Bad");
  } else if (c == d) {
    console.log("Bad");
  } else {
    console.log("Good");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
