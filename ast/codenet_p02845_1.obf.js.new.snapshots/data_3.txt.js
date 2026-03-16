(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("9753ltyNQN") / 1 * (-parseInt("86lDhUhH") / 2) + -parseInt("1400886XiKgMs") / 3 + -parseInt("34624VSAmiA") / 4 * (-parseInt("25ZgPeOF") / 5) + parseInt("12SnPTzF") / 6 * (parseInt("719873hYvysQ") / 7) + parseInt("1016MMizoL") / 8 * (parseInt("6543tCYdMB") / 9) + -parseInt("558180uMvddg") / 10 + -parseInt("22gJpyHZ") / 11 * (-parseInt("5350452NQWGmf") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 290870);
function __DECODE_0__(tJkato, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 309;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tJkato, key);
}
function Main(input) {
  input = input.trim()["split"]("\n")["map"](function (x) {
    return x["split"](" ");
  });
  var N = parseInt(input[0][0], 10);
  var RGBWithoutOrder = [1, 0, 0];
  var tmp1;
  var tmp2;
  var flag;
  var ans = 3;
  for (var i = 1; i < N; i++) {
    tmp2 = 0;
    tmp1 = parseInt(input[1][i], 10);
    for (var x of RGBWithoutOrder) {
      if (x === tmp1) {
        tmp2++;
      }
    }
    ans *= tmp2;
    ans %= 1000000007;
    for (var j = 0; j < 3; j++) {
      if (RGBWithoutOrder[j] === tmp1) {
        RGBWithoutOrder[j]++;
        break;
      }
    }
  }
  console.log(ans);
}
function __STRING_ARRAY__() {
  var _0x22f6ad = ["25ZgPeOF", "6543tCYdMB", "9753ltyNQN", "1016MMizoL", "map", "readFileSync", "5350452NQWGmf", "1400886XiKgMs", "22gJpyHZ", "utf8", "558180uMvddg", "719873hYvysQ", "split", "12SnPTzF", "/dev/stdin", "34624VSAmiA", "86lDhUhH"];
  __STRING_ARRAY__ = function () {
    return _0x22f6ad;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
