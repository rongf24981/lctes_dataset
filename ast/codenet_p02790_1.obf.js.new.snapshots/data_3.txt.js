function __STRING_ARRAY__() {
  var _0x13bf65 = ["35nzzwlW", "readFileSync", "split", "log", "1gzHZxJ", "985254FxRkfU", "4919354ipCgTy", "10LvrPQf", "utf8", "9296442QaHYVK", "2163852RKNAUL", "460036pxpvrR", "804182hpLMyN", "5NgXPch", "repeat", "toString", "982664UTQnHX"];
  __STRING_ARRAY__ = function () {
    return _0x13bf65;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1gzHZxJ") / 1 * (parseInt("804182hpLMyN") / 2) + -parseInt("2163852RKNAUL") / 3 + -parseInt("460036pxpvrR") / 4 + parseInt("5NgXPch") / 5 * (parseInt("985254FxRkfU") / 6) + parseInt("35nzzwlW") / 7 * (-parseInt("982664UTQnHX") / 8) + -parseInt("9296442QaHYVK") / 9 * (-parseInt("10LvrPQf") / 10) + parseInt("4919354ipCgTy") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 595994);
function Main(arg) {
  var a = arg["split"]("\n")[0].split(" ")[0] - 0;
  var b = arg["split"]("\n")[0]["split"](" ")[1] - 0;
  if (a < b) {
    console["log"](a["toString"]().repeat(b));
  } else {
    console.log(b["toString"]()["repeat"](a));
  }
  return;
}
function __DECODE_0__(HuCIuO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 459;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HuCIuO, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
