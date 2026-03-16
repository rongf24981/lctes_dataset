(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("446689xFBbUI") / 1 + -parseInt("16074lOwuOd") / 2 * (-parseInt("129auBQsb") / 3) + parseInt("252116qDtPfJ") / 4 * (-parseInt("50gRGlwO") / 5) + parseInt("1580316LotvIb") / 6 + -parseInt("1231888kmSOfR") / 7 + -parseInt("40pFuRBE") / 8 * (parseInt("164853gmmNOJ") / 9) + -parseInt("130WGzaoT") / 10 * (-parseInt("152526DDLKNJ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 338065);
function __STRING_ARRAY__() {
  var _0x5bbab9 = ["utf8", "252116qDtPfJ", "readFileSync", "152526DDLKNJ", "log", "129auBQsb", "40pFuRBE", "446689xFBbUI", "130WGzaoT", "16074lOwuOd", "50gRGlwO", "/dev/stdin", "split", "1231888kmSOfR", "164853gmmNOJ", "1580316LotvIb"];
  __STRING_ARRAY__ = function () {
    return _0x5bbab9;
  };
  return __STRING_ARRAY__();
}
function main(arg) {
  var size = arg["split"]("\n")[0].split(" ");
  var sel = arg["split"]("\n")[1].split(" ");
  console["log"](size[0] * size[1] - size[1] * sel[0] - (size[0] - sel[0]) * sel[1]);
}
function __DECODE_0__(asogcr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 335;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(asogcr, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
