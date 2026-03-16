(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1149983vmVsDK") / 1 + -parseInt("2258672pzMQjN") / 2 * (parseInt("3bdZTmN") / 3) + parseInt("3436xqKHwk") / 4 * (parseInt("8335DqUUBr") / 5) + parseInt("184260vFenwJ") / 6 * (parseInt("224AJPeqs") / 7) + parseInt("539048OdDIvu") / 8 * (-parseInt("198kBONHh") / 9) + -parseInt("10BCQWFO") / 10 * (parseInt("13363757SImPTC") / 11) + parseInt("39859716zOEVTf") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 759728);
function __DECODE_0__(gwILdO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 466;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gwILdO, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x11b68c = ["224AJPeqs", "10BCQWFO", "539048OdDIvu", "2258672pzMQjN", "1149983vmVsDK", "8335DqUUBr", "184260vFenwJ", "log", "198kBONHh", "readFileSync", "3436xqKHwk", "split", "13363757SImPTC", "/dev/stdin", "3bdZTmN", "39859716zOEVTf"];
  __STRING_ARRAY__ = function () {
    return _0x11b68c;
  };
  return __STRING_ARRAY__();
}
function Main(args) {
  input = args["split"]("\n");
  const N = parseInt(input[0]);
  var tmp;
  var result = 0;
  for (var i = 1; i <= N; i++) {
    tmp = input[i]["split"](" ");
    result += parseInt(tmp[1]) - parseInt(tmp[0]) + 1;
  }
  console["log"](result);
}
