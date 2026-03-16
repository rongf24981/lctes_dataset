function __DECODE_0__(BLYSGH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 259;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BLYSGH, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1PwNBmC") / 1 * (-parseInt("45280ZGChzc") / 2) + -parseInt("928761MIbPHs") / 3 * (-parseInt("4ppmvKL") / 4) + parseInt("1115QgKJZS") / 5 * (parseInt("54xwrPcu") / 6) + -parseInt("489223YSeNYW") / 7 + parseInt("1526104sqsYSN") / 8 + parseInt("1226799mbakrT") / 9 + -parseInt("4066650TnOpqq") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 184754);
function Main(input) {
  var a;
  var b;
  var c;
  a = Number(input["split"]("\n")[0].split(" ")[0]);
  b = Number(input["split"]("\n")[0]["split"](" ")[1]);
  c = Number(input["split"]("\n")[0]["split"](" ")[2]);
  console.log(c - (a - b) > 0 ? c - (a - b) : 0);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x1df4a0 = ["489223YSeNYW", "54xwrPcu", "1PwNBmC", "utf8", "1526104sqsYSN", "4ppmvKL", "/dev/stdin", "1226799mbakrT", "split", "4066650TnOpqq", "1115QgKJZS", "45280ZGChzc", "928761MIbPHs", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x1df4a0;
  };
  return __STRING_ARRAY__();
}
