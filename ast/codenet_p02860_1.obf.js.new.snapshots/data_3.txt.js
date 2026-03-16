function __STRING_ARRAY__() {
  var _0x3bbc65 = ["415212leXbZR", "12812TrvwQN", "1048607jYXOXN", "/dev/stdin", "slice", "276lMrkyE", "1213003QFMBsa", "length", "4JsyIZX", "635nCUErY", "push", "Yes", "9ACTvdO", "2909334UUSJlh", "2515146cEdcSZ", "log", "utf8", "16RNoEia", "8296930vqIyye"];
  __STRING_ARRAY__ = function () {
    return _0x3bbc65;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UulWeI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 439;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UulWeI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("415212leXbZR") / 1 * (parseInt("4JsyIZX") / 2) + -parseInt("2515146cEdcSZ") / 3 + -parseInt("12812TrvwQN") / 4 * (parseInt("635nCUErY") / 5) + -parseInt("2909334UUSJlh") / 6 + -parseInt("1048607jYXOXN") / 7 * (parseInt("16RNoEia") / 8) + parseInt("9ACTvdO") / 9 * (parseInt("8296930vqIyye") / 10) + -parseInt("1213003QFMBsa") / 11 * (-parseInt("276lMrkyE") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 505894);
function Main(input) {
  var data = input.split("\n");
  var split = parseInt(data[0]) / 2;
  var cdn = [];
  for (let i = 0; i < data[1]["length"]; i += split) {
    cdn["push"](data[1]["slice"](i, i + split));
  }
  if (cdn[0] == cdn[1]) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
