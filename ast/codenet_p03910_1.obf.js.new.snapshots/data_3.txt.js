(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("129812XnEExJ") / 1 + parseInt("2JvpwvG") / 2 * (-parseInt("1186359aTAhuC") / 3) + -parseInt("1216712DCjYeB") / 4 + -parseInt("155SnemOc") / 5 * (-parseInt("73974FgrJXS") / 6) + -parseInt("3220686SEahUj") / 7 + parseInt("8GfNaCa") / 8 * (-parseInt("3256128mMgqXW") / 9) + parseInt("15015230oxGpZF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 232389);
function __DECODE_0__(MyUTnG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 146;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MyUTnG, key);
}
function myout(text) {
  console["log"](text);
}
function Main(input) {
  input = parseInt(input);
  var list = [];
  var output = 0;
  for (var i = 1; i <= input; i++) {
    output += i;
    list["push"](i);
    if (output == input) {
      myout(list["join"]("\n"));
      return;
    } else if (output > input) {
      var diff = output - input;
      list["splice"](list["indexOf"](diff), 1);
      myout(list["join"]("\n"));
      return;
    }
  }
}
function __STRING_ARRAY__() {
  var _0x391f22 = ["readFileSync", "/dev/stdin", "3256128mMgqXW", "push", "join", "3220686SEahUj", "73974FgrJXS", "log", "2JvpwvG", "155SnemOc", "129812XnEExJ", "splice", "1186359aTAhuC", "8GfNaCa", "trim", "15015230oxGpZF", "indexOf", "1216712DCjYeB", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x391f22;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
