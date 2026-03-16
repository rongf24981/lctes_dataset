function __DECODE_0__(XKhYUQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 478;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XKhYUQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1gQGhXI") / 1 * (-parseInt("433018fVamNv") / 2) + -parseInt("459kUtLCr") / 3 * (parseInt("13088qxyNuj") / 4) + parseInt("55hCayuh") / 5 * (-parseInt("346506UktamJ") / 6) + -parseInt("2783102oRzcIe") / 7 + -parseInt("3783400LtbNFx") / 8 * (parseInt("9lSEzGw") / 9) + parseInt("8350370jPaoPI") / 10 + parseInt("15447388pQqceU") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 449466);
function __STRING_ARRAY__() {
  var _0x368e54 = ["readFileSync", "/dev/stdin", "floor", "1gQGhXI", "split", "55hCayuh", "2783102oRzcIe", "459kUtLCr", "8350370jPaoPI", "433018fVamNv", "log", "3783400LtbNFx", "9lSEzGw", "15447388pQqceU", "13088qxyNuj", "346506UktamJ"];
  __STRING_ARRAY__ = function () {
    return _0x368e54;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var inputArr = input["split"](" ");
  var sNum = Number(inputArr[0]);
  var cNum = Number(inputArr[1]);
  var result = 0;
  if (sNum > cNum / 2) {
    result += Math["floor"](cNum / 2);
  } else {
    result += sNum;
    cNum -= result * 2;
    result += Math.floor(cNum / 4);
  }
  console["log"](result);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
