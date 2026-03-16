(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("470056DGvrlj") / 1 + parseInt("1664362VbUNMd") / 2 + -parseInt("2392185PfHbSG") / 3 + -parseInt("260yKgtXo") / 4 * (-parseInt("57355yzrEWB") / 5) + -parseInt("1562886hkDxKU") / 6 * (parseInt("7aadBlF") / 7) + parseInt("32naUsJH") / 8 * (parseInt("220500QlxemD") / 9) + parseInt("3960050BEYclC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 543869);
function Main(input) {
  var cnt = 0;
  for (var i = 0; i < input.length; i++) {
    if (parseInt(input[i]) != i % 2) {
      cnt++;
    }
  }
  console["log"](parseInt(Math["min"](cnt, input.length - cnt)));
}
function __STRING_ARRAY__() {
  var _0x1e4603 = ["/dev/stdin", "2392185PfHbSG", "470056DGvrlj", "32naUsJH", "260yKgtXo", "1562886hkDxKU", "log", "readFileSync", "min", "1664362VbUNMd", "utf8", "7aadBlF", "220500QlxemD", "3960050BEYclC", "57355yzrEWB"];
  __STRING_ARRAY__ = function () {
    return _0x1e4603;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(uWCJqj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 424;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uWCJqj, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
