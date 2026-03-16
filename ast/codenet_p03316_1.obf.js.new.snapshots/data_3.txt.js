(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("181636ZzCikg") / 1 * (-parseInt("2mdrZut") / 2) + parseInt("1620597HOmrke") / 3 + -parseInt("1244924QkqtmI") / 4 + -parseInt("4360820qZccGo") / 5 + parseInt("6HYoOwH") / 6 * (-parseInt("5482834hCYpli") / 7) + parseInt("6956032hHfPRA") / 8 + parseInt("7568910WosxHY") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 465672);
function main(input) {
  var inputA = input["toString"]()["split"]("");
  var sum = 0;
  for (var i = 0; i < inputA.length; i++) {
    sum += parseInt(inputA[i]);
  }
  if (parseInt(input) % sum == 0) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
function __STRING_ARRAY__() {
  var _0x17ba58 = ["readFileSync", "log", "5482834hCYpli", "2mdrZut", "split", "1244924QkqtmI", "7568910WosxHY", "6HYoOwH", "utf8", "181636ZzCikg", "4360820qZccGo", "6956032hHfPRA", "/dev/stdin", "Yes", "toString", "1620597HOmrke"];
  __STRING_ARRAY__ = function () {
    return _0x17ba58;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KGjejO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 238;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KGjejO, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
