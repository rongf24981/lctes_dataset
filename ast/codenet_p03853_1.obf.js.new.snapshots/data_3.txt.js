(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2bpQqwY") / 1 * (parseInt("16636AgeLNh") / 2) + parseInt("986016TOKGyu") / 3 + parseInt("75828XvKnvX") / 4 + -parseInt("615iYAkfn") / 5 * (-parseInt("3690jcCNgO") / 6) + parseInt("7UXznpt") / 7 * (parseInt("797656IGsoDK") / 8) + -parseInt("18oEAXyJ") / 9 * (parseInt("184810xHYbtc") / 10) + -parseInt("3189230cePtgx") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 179453);
function __DECODE_0__(oAHNKV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 239;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oAHNKV, key);
}
function Main(input) {
  input = input["trim"]();
  var tate = parseInt(input["split"]("\n")[0]["split"](" ")[0]);
  for (var i = 1; i <= tate; i++) {
    console.log(input["split"]("\n")[i]);
    console["log"](input["split"]("\n")[i]);
  }
}
function __STRING_ARRAY__() {
  var _0x4930ad = ["3189230cePtgx", "trim", "75828XvKnvX", "184810xHYbtc", "986016TOKGyu", "2bpQqwY", "615iYAkfn", "18oEAXyJ", "7UXznpt", "/dev/stdin", "log", "16636AgeLNh", "797656IGsoDK", "split", "3690jcCNgO", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x4930ad;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
