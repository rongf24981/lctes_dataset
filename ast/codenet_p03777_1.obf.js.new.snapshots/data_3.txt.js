(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("13RlkIfK") / 1 * (-parseInt("124262qUhpIU") / 2) + parseInt("1332786lJAErh") / 3 + -parseInt("10956ALRJgV") / 4 * (-parseInt("1470iRVEer") / 5) + -parseInt("5646618gjQLCS") / 6 + -parseInt("7974414MNPEaE") / 7 + parseInt("375416QSzOdn") / 8 + parseInt("6375384FjCyEJ") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 732229);
function Main(input) {
  input = input.split(" ");
  var a = String(input[0]);
  var b = String(input[1]);
  if (a === "H" && b === "H" || a === "D" && b === "D") {
    console["log"]("H");
  } else {
    console["log"]("D");
  }
}
function __DECODE_0__(hLpwGj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 312;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hLpwGj, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x4f49e7 = ["375416QSzOdn", "1332786lJAErh", "124262qUhpIU", "5646618gjQLCS", "log", "/dev/stdin", "10956ALRJgV", "utf8", "7974414MNPEaE", "6375384FjCyEJ", "1470iRVEer", "13RlkIfK"];
  __STRING_ARRAY__ = function () {
    return _0x4f49e7;
  };
  return __STRING_ARRAY__();
}
