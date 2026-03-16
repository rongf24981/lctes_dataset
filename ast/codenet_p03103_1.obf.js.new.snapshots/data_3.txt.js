(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("43276SAvUlq") / 1 + -parseInt("642826ewaSiN") / 2 * (parseInt("3TzIOew") / 3) + parseInt("506688eVUOsr") / 4 + parseInt("938735nMifGz") / 5 + parseInt("42FVfHMk") / 6 * (parseInt("346703ZJLmQJ") / 7) + -parseInt("2738744bFEuIl") / 8 + parseInt("2457900SAgjsk") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 313742);
function __STRING_ARRAY__() {
  var _0x2661f6 = ["substr", "sort", "map", "parseInt", "3TzIOew", "2738744bFEuIl", "506688eVUOsr", "utf8", "43276SAvUlq", "split", "log", "346703ZJLmQJ", "2457900SAgjsk", "642826ewaSiN", "readFileSync", "42FVfHMk", "938735nMifGz", "0000000000"];
  __STRING_ARRAY__ = function () {
    return _0x2661f6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(TKDBuf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 232;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TKDBuf, key);
}
function Main(input) {
  input = input["split"]("\n");
  inputStr = input[0]["split"](" ");
  var N = Number.parseInt(inputStr[0]);
  var M = Number["parseInt"](inputStr[1]);
  var tmp = [];
  var array = [];
  var buycnt = 0;
  var okane = 0;
  var mokori = M;
  for (i = 0; i < N; i++) {
    tmp = input[i + 1].split(" ");
    array[i] = tmp["map"](tmp => parseInt(tmp, 10));
    array[i][0] = ("0000000000" + array[i][0])["substr"](-10);
  }
  array["sort"]();
  for (i = 0; i < N; i++) {
    if (mokori > parseInt(array[i][1])) {
      okane += parseInt(array[i][0]) * parseInt(array[i][1]);
      mokori -= parseInt(array[i][1]);
    } else {
      okane += parseInt(array[i][0]) * mokori;
      break;
    }
  }
  console["log"](okane);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
